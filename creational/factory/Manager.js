class Manager {
    constructor(name) {
        this.name = name
        this.role = 'Manager'
        this.employees = []
    }

    addEmployee(name) {
        this.employees.push(name)
    }

    display() {
        console.log(`Nome: ${this.name}, Role: ${this.role}, Class: ${this.constructor.name}, Employees: ${this.employees}`)
    }
}

module.exports = Manager