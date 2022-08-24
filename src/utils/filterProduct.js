const { Op } = require("sequelize");
const { limiterText } = require("../utils/stringHelper");
const price = require("../utils/priceHelper");

async function filter (req, res, model){

let brand = null
let ordem
let value = null

const {brand1, brand2, brand3, brand4} = req.body
const {priceUp, priceDown, orderA, orderZ} = req.body
const {value1, value2, value3, value4, value5} = req.body

if(brand1){brand = "Samsung"}
if(brand2){brand = "Asus"}
if(brand3){brand = "Iphone"}
if(brand4){brand = "Philco"}
if(priceUp || orderA){ordem = "DESC"}
if(priceDown || orderZ){ordem = "ASC"}


const x = brand?[{category: "smartphone"}, {name: "brand"}]

const smartphones = await model.findAll({
    where:{
        [Op.and]: [
            {category: "Smartphone"}
            
        ]
})

console.log(smartphones)


return res.render("smartphones", {smartphones, limiterText, price})



}


// async function filterProducts(req, model) {
//     const { valueChecked } = req.body

//     const result = await model.findAll({
//         where: {
//             price: valueChecked
//         }
//     })

//     return result
// }


module.exports = filter