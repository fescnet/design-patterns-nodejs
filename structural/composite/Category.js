class Category {
    constructor(name, categoriesAndProducts) {
        this.name = name
        this.categoriesAndProducts = categoriesAndProducts
    }

    total() {
        return this.categoriesAndProducts.reduce((accumulator, categoryOrProduct) => accumulator + categoryOrProduct.total(), 0)
    }

    print() {
        console.log(`${this.name} total: ${this.total()}`)
        this.categoriesAndProducts.forEach(item => {
            console.log(`- ${item.name} total: ${item.total()}`)
        });
    }
}

module.exports = Category