const LogStrategy = require('./LogStrategy')

class Logger {

    constructor(strategy = 'toConsole') {
        this.strategy = LogStrategy[strategy]
    }

    changeStrategy(newStrategy) {
        this.strategy = LogStrategy[newStrategy]
    }

    log(message) {
        const timestamp = new Date().toISOString()
        this.strategy(timestamp, message)
    }
}

module.exports = Logger