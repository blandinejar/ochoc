const { Brand, Product, User, Tag } = require('../models/');

const mainController = {

    homePage: async (request, response) => {
        try {
            const brands = await Brand.findAll();
            response.render('index', {brands});
        } catch (error) {
            console.error(error);
            response.status(500).send(error);
        }
    },

    allProducts: async (request, response) => {
        try {
            const products = await Product.findAll({
                include: [
                    {association: 'brand'}
                ]
            });
            response.render('allProducts', {products});
        } catch (error) {
            console.error(error);
            response.status(500).send(error);
        }
    },

    selectByBrand: async (request, response) => {
        try {
            const brandId = parseInt(request.params.id);
            const brand = await Brand.findByPk(brandId, {
                include: [
                    {association: 'products'}
                ]
            });
            response.render('productsByBrand', {brand, products: brand.products})
        } catch (error) {
            console.error(error);
            response.status(500).send(error);
        }
    }
};

module.exports = mainController;