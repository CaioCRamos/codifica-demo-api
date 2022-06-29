module.exports = class Product {
    constructor(id, name, image, price, category, description) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}