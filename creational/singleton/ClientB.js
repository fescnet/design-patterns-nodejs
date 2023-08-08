/**
 * This class uses the Logger class.
 * The goal of this class is to prove that the instance received from ./Logger module is a singleton.
 */
class ClientB {
    constructor() {
        this.logger = require('./Logger')
    }

    myFunction() {
        this.logger.log('log called inside ClientB')
    }
}

module.exports = ClientB