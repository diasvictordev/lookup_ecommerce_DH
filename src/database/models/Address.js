module.exports = (sequelize, datatypes)=>{
    const alias = "Address"

    const collumns = {
        address_id: {
            type: datatypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          cep: {
            type: datatypes.INTEGER(8),
            allowNull: false,
          },
          state: {
            type: datatypes.STRING,
            allowNull: false,
          },
          number_address: {
            type: datatypes.INTEGER,
            allowNull: false,
          },
          user_id: {
            type: datatypes.STRING,
            allowNull: false,
          },
          district: {
            type: datatypes.STRING,
            allowNull: false,
          },
          city: {
            type: datatypes.STRING,
            allowNull: false,
          },
          street:{
            type:datatypes.STRING,
            allowNull: false
          }
    }

    const config = {
        tableName: "address",
        timestamps: false
    }

    const Address = sequelize.define(alias, collumns, config)

    Address.associate = (models)=>{
        Address.hasMany(models.User, {
            foreignKey: 'id', as : 'users'
        })
    }

    return Address;
}