require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DATABASE_PASSWORD,
    "database": "lookup_db",
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
