const formatPrice = require('./formatPrice')

const price = {

  format: (value) =>{
   return formatPrice(value)
  },

  parcelOne: (value) => {

    const array = []

    for (let i = 2; i <= 6; i++) {

      const x = formatPrice(value / i)

      array.push(i + "x de " + x + " sem juros")

    }
    return array
  },

  parcelTwo: (value) => {

    const array = []

    for (let i = 7; i <= 12; i++) {

      const x = formatPrice(value / i)

      array.push(i + "x de " + x + " sem juros")

    }
    return array
  },
  parcels: (value) => {
    const x = value/12
    return formatPrice(x)
  }

}

module.exports = price