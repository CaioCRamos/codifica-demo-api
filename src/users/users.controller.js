const express = require("express");
const UserRepository = require("./users.repository");

module.exports = class UserController {
    constructor() {
        this.router = express.Router();
        this.repository = new UserRepository();

        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/users", this.getAll);
        this.router.post("/users/login", this.authenticate);
    }

    getAll = async (req, res) => {
        res.status(200).json(
            this.repository.getAll()
                .map(user => ({
                    nome: user.name,
                    email: user.login,
                    senha: user.password
                })));
    };

    authenticate = async (req, res) => {
        const { email, senha } = req.body;

        const user = this.repository.getByLoginAndPassword(email, senha);

        return user
            ? res.status(200).json({ mensagem: "Login feito com sucesso" })
            : res.status(404).json({ mensagem: "Login ou senha incorretos" });
    };
}