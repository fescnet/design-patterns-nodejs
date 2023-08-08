const Iterator = require('./Iterator')
const Company = require('./Company')

const iterator = new Iterator([
    new Company('Pepsi'),
    new Company('Coke'),
    new Company('Facebook'),
    new Company('Google'),
    new Company('Apple'),
])

console.log(iterator.last().name)
console.log(iterator.first().name)
console.log(iterator.current().name)
console.log(iterator.next().name)
console.log(iterator.prev().name)