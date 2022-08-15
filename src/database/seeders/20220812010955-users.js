'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')


module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
    {
      id: uuidv4().toString(),
      user_name: "Rodrigo",
      last_name: "Santos",
      tel: "12123456789",
      email: "rodrigo@email",
      user_password: await bcrypt.hash('123456', 8),
      date_birthday: new Date("1998-08-06"),
      cpf: "12345678914"
     },
    {
      id: uuidv4().toString(),
      user_name: "Henrique",
      last_name: "Afonso",
      tel: "12654986321",
      email: "henrique@email",
      user_password: await bcrypt.hash('123456', 8),
      date_birthday: new Date("1999-03-07"),
      cpf: "56321478956"},
    {
      id: uuidv4().toString(),
      user_name: "Victor",
      last_name: "Dias",
      tel: "1265985632145",
      email: "victor@email",
      user_password: await bcrypt.hash('123456', 8),
      date_birthday: new Date("2001-07-08"),
      cpf: "63259864125"},
    {
      id: uuidv4().toString(),
      user_name: "Jessica",
      last_name: "Maia",
      tel: "1296548796532",
      email: "jessica@email",
      user_password: await bcrypt.hash('123456', 8),
      date_birthday: new Date("2000-10-15"),
      cpf: "12345678914"},
    {
      id: uuidv4().toString(),
      user_name: "cássio",
      last_name: "Lima",
      tel: 12546986523,
      email: "cassio@email",
      user_password: await bcrypt.hash('123456', 8),
      date_birthday: new Date("1992-05-25"),
      cpf: 65321478965
    },
    {
      id: uuidv4().toString(),
      user_name: "Milena",
      last_name: "Santana",
      tel: 15698453267,
      email: "milena@email",
      user_password: await bcrypt.hash('123456', 8),
      date_birthday: new Date("1985-01-20"),
      cpf: 65321478965
    }]);
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});
  }
};
