class Employee {
    constructor(name) {
        this.name = name
        this.role = 'Employee'
    }

    display() {
        console.log(`Nome: ${this.name}, Role: ${this.role}, Class: ${this.constructor.name}`)
    }
}

module.exports = Employee