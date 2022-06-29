const Product = require("./products.domain");
const ProductsJSON = require("../../data/products.json");

module.exports = class ProductRepository {
    getAll() {
        return ProductsJSON;
    }

    getById(id) {
        return this.getAll().find(product => product.id == id);
    }
}