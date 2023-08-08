/**
 * Entry point of the adapter example
 * run "node ./structural/adapter/index.js" to execute this file
 */

const EphemeralMemoryStorage = require('./EphemeralMemoryStorage')
const PersistentMemoryStorageAdapter = require('./PersistentMemoryStorageAdapter')

const e = new EphemeralMemoryStorage()
const p = new PersistentMemoryStorageAdapter()

e.save('name', 'John')
p.save('name', 'Mary')

console.log(e.retrieve('name'))
console.log(p.retrieve('name'))