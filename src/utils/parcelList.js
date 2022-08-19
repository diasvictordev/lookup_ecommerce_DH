const formatPrice = require('./formatPrice')

const parcelList = {
  one: (value) => {

    const array = []

    for (let i = 2; i <= 6; i++) {

      const x = formatPrice(value / i)

      array.push(i + "x de " + x + " sem juros")

    }
    return array
  },

  two: (value) => {

    const array = []

    for (let i = 7; i <= 12; i++) {

      const x = formatPrice(value / i)

      array.push(i + "x de " + x + " sem juros")

    }
    return array
  }

}

module.exports = parcelList