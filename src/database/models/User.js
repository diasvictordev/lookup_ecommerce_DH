module.exports = (sequelize, datatypes)=>{
    const alias = "User"

    const collumns = {
        id: {
            type: datatypes.STRING,
            allowNull: false,
            primaryKey: true
          },
          user_name: {
            type: datatypes.STRING,
            allowNull: false
          },
          last_name: {
            type: datatypes.STRING,
            allowNull: false
          },
          tel: {
            type: datatypes.INTEGER,
            allowNull: false
          },
          email:{
            type: datatypes.STRING,
            allowNull: false
          },
          user_password: {
            type: datatypes.STRING,
            allowNull: false
          },
          date_birthday: {
            type: datatypes.DATE,
            allowNull: false
          },
          cpf: {
            type: datatypes.INTEGER(11),
            allowNull: false
          }
    }

    const config = {
        tableName: "user",
        timestamps: false
    }

    const User = sequelize.define(alias, collumns, config)

    User.associate = (models)=>{
        User.hasMany(models.Address, {
            foreignKey: 'user_id', as : 'address'
        })
    }

    return User;
}