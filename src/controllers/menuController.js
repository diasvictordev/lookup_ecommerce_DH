const { Product } = require("../database/models");
const { Op } = require("sequelize");

const menuController = {
    smartphones: (req, res)=>{
        Product.findAll({
            where: {
              [Op.or]: [
                { category: "Smartphone" },
              ],
            },
          })
          .then((products) => {
            const smartphones = []
            products.map((product) => {
              smartphones.push(product._previousDataValues)
            });
            res.render("smartphones",{smartphones})
        
    })},
    perifericos: (req, res)=>{
        res.render('perifericos')
    },
    audio: (req, res)=>{
        res.render('audio')
    },
    cadeiras: (req, res)=>{
        res.render('cadeiras')
    },
    hardware: (req, res)=>{
        res.render('hardware')
    },
    tablet: (req, res)=>{
        res.render('tablet')
    },
    tv: (req, res)=>{
        res.render('tv')
    }
}

module.exports = menuController