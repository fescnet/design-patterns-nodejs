/**
 * Entry point of the proxy example
 * run "node ./structural/proxy/index.js" to execute this file
 * 
 * This proxy restricts access to users with the 'clear' permission
 */

const DataStorage = require('./DataStorage')
const DataStorageProxy = require('./DataStorageProxy')

const userPermissions = []
// const userPermissions = ['clear'] // give 'clear' permission to the user
const dataStorage = new DataStorage()
const dataStorageProxy = new DataStorageProxy(dataStorage, userPermissions)

dataStorageProxy.save('name', 'Mary')
console.log(dataStorageProxy.retrieve('name'))
// The user is not allowed to clear the storage, the next line will throw an exception
dataStorageProxy.clear()