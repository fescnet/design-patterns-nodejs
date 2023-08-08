const Category = require('./Category')
const Product = require('./Product')

const pen = new Product('pen', 1.00, 10)
const pencil = new Product('pencil', 0.70, 5)
const stationery = new Category('stationery', [pen, pencil])
stationery.print()

const tShirt = new Product('t-shirt', 20.00, 2)
const jeans = new Product('jeans', 30.00, 2)
const clothing = new Category('clothing', [tShirt, jeans])
clothing.print()

const notebook = new Product('notebook', 1000.00, 1)
notebook.print()

const store = new Category('store', [stationery, clothing, notebook])
store.print()