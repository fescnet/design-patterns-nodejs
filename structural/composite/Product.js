class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    total() {
        return this.price * this.quantity
    }

    print() {
        console.log(`${this.name} total: `, this.total())
    }
}

module.exports = Product