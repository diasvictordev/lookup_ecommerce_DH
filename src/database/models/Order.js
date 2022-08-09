module.exports = (sequelize, datatypes)=>{
    const alias = "Order"

    const collumns = {
      order_id: {
        type: datatypes.STRING,
        allowNull: false
      },
      order_status: {
        type: datatypes.STRING,
        allowNull: false
      },
      cart_id: {
        type: datatypes.STRING,
        allowNull: false
      },
      payment_method: {
        type: datatypes.STRING,
        allowNull: false
      }
    }

    const config = {
        tableName: "order",
        timestamps: false
    }

    const Order = sequelize.define(alias, collumns, config)

    Order.associate = (models)=>{
        Order.hasMany(models.Cart, {
            foreignKey: 'cart_id', as : 'cart'
        })
    }

    return Order;
}