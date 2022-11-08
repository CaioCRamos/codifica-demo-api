const App = require("./src/app");

const UsersController = require("./src/users/users.controller");
const ProductsController = require("./src/products/products.controller");

const port = parseInt(process.env.PORT || "3000");

const PETSHOP_SOURCE = "petshop";
const DIARIO_DE_UM_BANANA_SOURCE = "diariodeumbanana"

const app = new App(port, [
    { path: "/api/v1/users", controller: new UsersController() },
    { path: "/api/v1/products", controller: new ProductsController(PETSHOP_SOURCE) },
    { path: "/api/v2/petshop/products", controller: new ProductsController(PETSHOP_SOURCE) },
    { path: "/api/v2/diariodeumbanana/products", controller: new ProductsController(DIARIO_DE_UM_BANANA_SOURCE) },
]);

app.start();