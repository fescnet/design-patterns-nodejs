class SmsMessageDecorator {
    constructor(message, to) {
        this.message = message
        this.to = to
    }

    send() {
        console.log(`SMS sent successfully`)
        console.log(`to: ${this.to}`)
        console.log(`message: ${this.message.content}`)
    }
}

module.exports = SmsMessageDecorator