const UserFactory = require('./UserFactory')

const manager = UserFactory.createUser('Mary', 'Manager')
manager.addEmployee('Jacob')
manager.addEmployee('John')
const employee = UserFactory.createUser('John', 'Employee')

manager.display()
employee.display()