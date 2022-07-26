module.exports = (sequelize, datatypes)=>{
  const alias = "Product"

  const collumns = {
      product_id: {
          type: datatypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        price: {
          type: datatypes.FLOAT,
          allowNull: false
        },
        discount: {
          type: datatypes.INTEGER,
          allowNull: false
        },
        price_discount:{
          type: datatypes.FLOAT,
          allowNull: false
        },
        category: {
          type: datatypes.STRING,
          allowNull: false
        },
        amount: {
          type: datatypes.INTEGER,
          allowNull: false
        },
        state:{
          type: datatypes.STRING,
          allowNull: false
        },
        name: {
          type: datatypes.STRING,
          allowNull: false
        },
        description: {
          type: datatypes.TEXT,
          allowNull: false
        },
          description_2: {
            type: datatypes.TEXT,
            allowNull: false

          },
        image: {
          type: datatypes.STRING,
          allowNull: false
        },
        extension: {
          type: datatypes.STRING,
          allowNull: false
        }, 
        brand: {
          type: datatypes.STRING,
          allowNull: false
        }
  }

  const config = {
      tableName: "products",
      timestamps: false
  }

  const Product = sequelize.define(alias, collumns, config)

  Product.associate = (models)=>{
      Product.hasMany(models.Cart, {
          foreignKey: 'product_id', as : 'cart'
      })
  }

  return Product;
}