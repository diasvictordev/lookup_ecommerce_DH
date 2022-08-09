module.exports = (sequelize, datatypes)=>{
    const alias = "Adress"

    const collumns = {
        adress_id: {
            type: datatypes.STRING,
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
          number_adress: {
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
          }
    }

    const config = {
        tableName: "adress",
        timestamps: false
    }

    const Adress = sequelize.define(alias, collumns, config)

    Adress.associate = (models)=>{
        Adress.hasMany(models.User, {
            foreignKey: 'id', as : 'user_id'
        })
    }

    return Adress;
}