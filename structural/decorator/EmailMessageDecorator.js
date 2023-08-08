class EmailMessageDecorator {
    constructor(message, subject, from, to) {
        this.message = message
        this.subject = subject
        this.from = from
        this.to = to
    }

    send() {
        console.log(`E-mail sent successfully`)
        console.log(`subject: ${this.subject}`)
        console.log(`from: ${this.from}`)
        console.log(`to: ${this.to}`)
        console.log(`message: ${this.message.content}`)
    }
}

module.exports = EmailMessageDecorator