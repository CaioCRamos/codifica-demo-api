const express = require("express")
const ProductsRepository = require("./products.repository");

module.exports = class ProductsController {
    constructor() {
        this.router = express.Router();
        this.repository = new ProductsRepository();

        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/products", this.getAll);
        this.router.get("/products/:id", this.getById);
    }

    getAll = async (req, res) => {
        res.status(200).json(
            this.repository
                .getAll()
                .map(p => ({
                    id: p.id,
                    nome: p.name,
                    img: p.image,
                    preco: p.price,
                    categoria: p.category,
                    descricao: p.description
                }))
        );
    }

    getById = async (req, res) => {
        const { id } = req.params;

        const product = this.repository.getById(id);

        return product
            ? res.status(200).json(product)
            : res.status(404).json({ mensagem: `Produto não encontrado com o ID: ${id}` });
    }
}