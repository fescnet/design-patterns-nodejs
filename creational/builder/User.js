class User {
    constructor(builder) {
        this.name = builder.name
        this.role = builder.role
        this.salary = builder.salary
    }

    display() {
        console.log(`name: ${this.name}, role: ${this.role}, salary: ${this.salary}`)
    }
}

module.exports = User