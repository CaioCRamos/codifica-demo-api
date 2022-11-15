const express = require("express")
const ProductsAdapter = require("./products.adapter");
const ProductRepository = require("./products.repository");

module.exports = class ProductsController {
    constructor(source) {
        this.source = source;
        this.router = express.Router();
        this.repository = new ProductRepository(source);
        this.adapter = new ProductsAdapter(source);

        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getById);
        this.router.get("/:id/image", this.getImageById);
        this.router.get("/category/:category", this.getByCategory);
    }

    getAll = async (req, res) => {
        res.status(200).json(
            this.repository
                .getAll()
                .map(p => this.adapter.toApiResponse(p))
        );
    }

    getById = async (req, res) => {
        const { id } = req.params;

        const product = this.repository.getById(parseInt(id));

        return product
            ? res.status(200).json(this.adapter.toApiResponse(product))
            : res.status(404).json({ mensagem: `Produto não encontrado com o ID: ${id}` });
    }

    getImageById = async (req, res) => {
        const { id } = req.params;
        const product = this.repository.getById(parseInt(id));

        res.header('Cache-Control', 'max-age=2592000000');

        return product
            ? res.status(200).sendFile(`${process.cwd()}/assets/${this.source}/${product.id}.jpg`)
            : res.status(404).json({ mensagem: `Produto não encontrado com o ID: ${id}` });
    }

    getByCategory = async (req, res) => {
        const { category } = req.params;

        res.status(200).json(
            this.repository
                .getByCategory(category)
                .map(p => this.adapter.toApiResponse(p))
        );
    };
}