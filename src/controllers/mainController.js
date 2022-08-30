const { Product } = require("../database/models");
const { Cart } = require("../database/models");
const { User } = require("../database/models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const randomNumber = require("../utils/randomNumber");
const {limiterText} = require('../utils/stringHelper');
const price = require('../utils/priceHelper');
const splitDescription = require('../utils/splitDescription');

const mainController = {
  index: (req, res) => {
    Product.findAll({
      where: {
        [Op.or]: [
          {
            state: "Em oferta",
          },
          { category: "Smartphone" },
        ],
      },
    })
      .then((products) => {
        const productsResume = [];
        products.map((product) => {
          productsResume.push(product._previousDataValues);
        });

        const offer = [];
        const smartphone = [];

        productsResume.map((product1) => {
          if (product1.state == "Em oferta") {
            offer.push(product1);
          }
        });
        productsResume.map((product2) => {
          if (product2.category == "Smartphone") {
            smartphone.push(product2);
          }
        });


        return res.render("index", { offer, smartphone, limiterText, price});
      })
      .catch((erro) => {
        console.log(erro);
      });
  },

  carrinho: async (req, res) => {

    const userId = req.session.user.id

    const findUserCart = await Cart.findOne({
      where:{
        user_id: userId
      }
    })

    if(!findUserCart){ 
      Cart.create({cart_id: uuidv4(), product_id: "notDefined", user_id: userId})
      return res.redirect("/carrinho")
    }

    const allProducts = findUserCart.dataValues.product_id

    if(allProducts == "notDefined"){
      const products = false
      return res.render("cart",{products})
    }

    const splitProducts = allProducts.split(",")

    const productsBase = await Product.findAll({
      where: {product_id: splitProducts}
    })

    let products = []
    let finalPrice = []

    productsBase.map(product=> products.push(product.dataValues))
    productsBase.map(product=> finalPrice.push(product.dataValues.price_discount))
    finalPrice = price.finalCartValue(finalPrice)

    res.render("cart", {user: req.session.user, products, price, finalPrice});


  },

  cartCreate: async (req, res) => {
    
    const user_id = req.session.user.id

    const {id} = req.params

    let product = id

    const cartExists = await Cart.findOne({
      where:{
        user_id: user_id
      }
    })

    const allProducts = cartExists.dataValues.product_id

    if(allProducts == "notDefined"){
      const update = await Cart.update({
        product_id: product
      },
      {
        where: {user_id: user_id}
      })

      return res.redirect("/carrinho")
    }

    if(cartExists){

  let updateCart = allProducts + "," + id
  const update = await Cart.update({
    product_id: updateCart
  },
  {
    where: {user_id: user_id}
  })

      return res.redirect("/carrinho")
    }else{
      const newCart = await Cart.create({cart_id: uuidv4(), product_id: product, user_id})
    }

  },

  removeItem: async(req, res)=>{
    const userId = req.session.user.id

    const {id} = req.params

    const findUserCart = await Cart.findOne({
      where:{
        user_id: userId
      }
    })

    const allProducts = findUserCart.dataValues.product_id

    if(allProducts.length <=36){
      const update = await Cart.update({
        product_id: "notDefined"
      },
      {
        where: {user_id: userId}
      })

      return res.redirect("/carrinho")
    }

    const splitProducts = allProducts.split(",")

    const newProductsArray = splitProducts.filter(x=> x != id)

    const updateId = newProductsArray.reduce((x, y)=> x + "," + y)

    const update = await Cart.update({
      product_id: updateId
    },
    {
      where: {user_id: userId}
    })

    return res.redirect("/carrinho")
  

    
  },

  detail: (req, res) => {
    res.render("detail-product");
  },
  detailProduct: (req, res) => {
    const { id } = req.params;
    const randomNumberResult = randomNumber(0, 4);
    const categoryArray = ["Smartphone", "Tablet", "Tv", "Periféricos", "Notebook"]
    const category = categoryArray[randomNumberResult]

    Product.findAll({
      where: {
        [Op.or]: [{ product_id: id }, { category: category }],
      },
    })
      .then((product) => {
        const allProducts = [];
        let productPk = null;

        product.map((productMap) => {
          allProducts.push(productMap._previousDataValues);
        });
        productPk = allProducts.find((product) => product.product_id == id);
        productsToShow = allProducts.filter(
          (product) => product.product_id != id
        );
        
        res.render("detail-product", { productPk, productsToShow, limiterText, splitDescription, price});
      })
      .catch((erro) => {
        console.log(erro);
      });
  },

  // findAll passando a categoria do produto que está na variavel productToshow
  // where e um like pegando as informações atraves do name que está no productToShow
  // renderiza essa view novamente passando as informações filtradas por TV

  // const todasTvs = await Products.findAll({
  //   where: {
  //     [Op.like]: `%${productsToShow.category}%`
  //   }
  // })

  // res.render('detail-product', todasTvs)
};

module.exports = mainController;
