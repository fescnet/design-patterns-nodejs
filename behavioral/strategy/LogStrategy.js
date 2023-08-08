const path = require('path')
const { appendFile } = require('fs')

class LogStrategy {
    static toConsole(timestamp, message) {
        console.log(`${timestamp} - ${message}`)
    }

    static toFile(timestamp, message) {
        const fileName = path.join(__dirname, 'logs.txt')
        appendFile(fileName, `${timestamp} - ${message} \n`, error => {
            if (error) {
                console.error(error)
            }
        })
    }

    static none() {

    }
}

module.exports = LogStrategy