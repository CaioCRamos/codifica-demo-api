const App = require("./src/app");
const UsersController = require("./src/users/users.controller");

const app = new App(3000, [new UsersController()]);
app.start();