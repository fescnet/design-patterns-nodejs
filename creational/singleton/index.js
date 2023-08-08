/**
 * Entry point of the sigleton example
 * run "node ./creational/singleton/index.js" to execute this file
 */
const ClientA = require('./ClientA')
const ClientB = require('./ClientB')
const logger = require('./Logger')

logger.log('log called inside index.js')
const clientA = new ClientA()
clientA.myFunction() // calls Logger internally

const clientB = new ClientB()
clientB.myFunction() // calls Logger internally

// Prove that clientA, clientB and this file use the same Logger instance
const messagesCount = logger.countMessages()
console.log('The value of messageCount variable should be 3')
console.log(`messagesCount value: `, messagesCount)