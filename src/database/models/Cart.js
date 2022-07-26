module.exports = (sequelize, datatypes)=>{
    const alias = "Cart"

    const collumns = {
        cart_id: {
            type: datatypes.STRING,
            primaryKey: true,
            allowNull: false
          },
          product_id: {
            type: datatypes.STRING,
            allowNull: false
          },
          user_id: {
            type: datatypes.STRING,
            allowNull: false
          }
    }

    const config = {
        tableName: "cart",
        timestamps: false
    }

    const Cart = sequelize.define(alias, collumns, config)

    Cart.associate = (models)=>{
        Cart.belongsTo(models.User, {
            foreignKey: 'user_id', as : 'users'
        }),
        Cart.belongsTo(models.Product, {
            foreignKey: 'product_id', as : 'product'
        })
    }

    return Cart;
}