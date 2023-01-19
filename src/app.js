const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = class App {
    constructor(port, controllers = []) {
        this.app = express();
        this.port = port;
        this.controllers = controllers;

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeMiddlewares() {
        this.app.use(helmet({
            crossOriginResourcePolicy: false,
        }));

        const corsOptions = {
            origin: '*',
            credentials: true,            //access-control-allow-credentials:true
            optionSuccessStatus: 200,
        }

        this.app.use(cors(corsOptions))

        this.app.use(express.json());
    }

    initializeRoutes() {
        this.app.get("/api/v1/", (req, res) => {
            res.status(200).json({ nome: "Demo API", versao: "1.0" });
        });

        this.controllers.forEach((c) => {
            this.app.use(c.path, c.controller.router);
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}

