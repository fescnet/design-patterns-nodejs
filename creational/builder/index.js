const UserBuilder = require("./UserBuilder");

const user = new UserBuilder('Mary').isManager().defineSalary(2000).build()
user.display()