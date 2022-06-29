const App = require("./src/app");

const UsersController = require("./src/users/users.controller");
const ProductsController = require("./src/products/products.controller");

const port = parseInt(process.env.PORT || "3000");

const app = new App(port, [
    new UsersController(),
    new ProductsController(),
]);

app.start();