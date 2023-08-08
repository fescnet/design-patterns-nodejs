const User = require("./User");


class UserBuilder {

    constructor(name) {
        this.name = name
    }

    isManager() {
        this.role = 'Manager'
        return this
    }

    defineSalary(salary) {
        this.salary = salary
        return this
    }

    build() {
        return new User(this)
    }
}

module.exports = UserBuilder