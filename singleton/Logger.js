/**
 * Class Logger to display and store logs
 */
class Logger {
    constructor() {
        this.messages = [];
    }


    log(message) {
        this.messages.push(message);
        console.log(message)
    }

    countMessages() {
        return this.messages.length
    }
}

// Singleton
module.exports = new Logger()