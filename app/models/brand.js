const Sequelize = require('sequelize');
const sequelize = require('../database');

class Brand extends Sequelize.Model {};

Brand.init({
  brand_name: Sequelize.STRING
},{
  sequelize,
  tableName: "brand"
});

// on exporte la class directement !
module.exports = Brand;