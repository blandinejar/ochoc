const Brand = require('./brand');
const Product = require('./product');
const Tag = require('./tag');
const User = require('./user');


Product.belongsTo(Brand, {
    foreignKey: "brand_id",
    as: "brand"
})

Brand.hasMany(Product, {
    foreignKey: "brand_id",
    as: "products"
})

// Tag.belongsTo(Product, {
//     foreignKey: "product_id",
//     as: "tag"
// })
// Product.hasMany(Tag, {
//     foreignKey: "product_id",
//     as: "tags"
// })
// Quiz <> Tags, via la table de liaison
// "Un Quiz possède plusieurs tags"
Product.belongsToMany(Tag, {
    as: "tags", // alias de l'association 
    through: 'product_has_tag', // "via la table de liaison qui s'appelle ..."
    foreignKey: 'product_id', // le nom de la clef de Quiz dans la table de liaison
    otherKey: 'tag_id', // le nom de la clef de "l'autre" (donc Tag)
});
// ... et la réciproque !
Tag.belongsToMany(Product, {
    as: "products",
    through: 'product_has_tag',
    otherKey: 'product_id',
    foreignKey: 'tag_id'
});

module.exports = { Product, Brand, Tag, User };