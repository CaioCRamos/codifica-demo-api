const express = require("express")

const ProductsRepository = require("./products.repository");
const ProductsAdapter = require("./products.adapter");

module.exports = class ProductsController {
    constructor() {
        this.router = express.Router();
        this.repository = new ProductsRepository();
        this.adapter = new ProductsAdapter();

        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/products", this.getAll);
        this.router.get("/products/:id", this.getById);
        this.router.get("/products/:id/image", this.getImageById);
        this.router.get("/products/category/:category", this.getByCategory);
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
        const filePath = `${process.cwd()}/assets/produto_${id}.jpg`;

        console.log(filePath);
        return res.sendFile(filePath);
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