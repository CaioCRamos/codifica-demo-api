const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = class App {
    constructor(port) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeMiddlewares() {
        this.app.use(helmet());
        this.app.use(cors())
        this.app.use(express.json());
    }

    initializeRoutes() {
        this.app.get("/", (req, res) => {
            res.send("Hello World");
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}

