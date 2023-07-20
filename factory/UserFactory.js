const Employee = require("./Employee");
const Manager = require("./Manager");

class UserFactory {
    static createUser(name, type) {
        if (type === 'Manager') return new Manager(name)
        if (type === 'Employee') return new Employee(name)
        throw new Error('unknown type')
    }
}

module.exports = UserFactory