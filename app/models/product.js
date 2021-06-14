const Sequelize = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {};

Product.init({
  product_name: Sequelize.STRING,
  weight: Sequelize.INTEGER,
  price: Sequelize.INTEGER
}, {
  sequelize,
  tableName: "product"
});


module.exports = Product;