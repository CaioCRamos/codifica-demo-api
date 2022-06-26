const App = require("./src/app");
const UsersController = require("./src/users/users.controller");

const port = parseInt(process.env.PORT || "3000");

const app = new App(port, [new UsersController()]);
app.start();