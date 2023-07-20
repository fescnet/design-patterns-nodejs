const Manager = require('./Manager')

const manager1 = new Manager('Mary')
manager1.addEmployee('John')
manager1.addEmployee('Jacob')
manager1.addEmployee('Jessica')
manager1.display()

const manager2 = manager1.clone()
manager2.name = 'Robert'
manager2.addEmployee('Mary')
manager2.display()