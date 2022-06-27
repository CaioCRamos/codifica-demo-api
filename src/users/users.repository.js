const User = require("./users.domain");

module.exports = class UserRepository {
    constructor() {
        this.users = [];

        for (let index = 1; index < 11; index++) {
            this.users.push(new User(index, `Usuário ${index}`, `usuario${index}@basesocial.org`, "base@123"));
        }
    }

    getAll() {
        return this.users;
    }

    getByLoginAndPassword(login, password) {
        return this.users.find((user) => user.login === login && user.password == password);
    }
}