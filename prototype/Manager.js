class Manager {
    constructor(name) {
        this.name = name
        this.employees = []
    }

    display() {
        console.log(`name: ${this.name}, employees: ${this.employees}`)
    }

    addEmployee(name) {
        this.employees.push(name)
    }

    clone() {
        const newObject = Object.create(this)
        newObject.name = this.name
        newObject.employees = [...this.employees]
        return newObject
    }
}

module.exports = Manager