module.exports = class ProductRepository {
    constructor(source) {
        this.source = source;
    }

    getAll() {
        return require(`../../data/${this.source}.json`);
    }

    getById(id) {
        return this.getAll().find(product => product.id === id);
    }

    getByCategory(category) {
        return this.getAll().filter(product => product.categoria.toLowerCase() === category.toLowerCase());
    }
}