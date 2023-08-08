const Observer = require("./Observer");

class WelcomeMsgSender extends Observer {
    sendMessage(company) {
        console.log(`Message sent to the company ${company.name}`)
    }

    notify(company) {
        this.sendMessage(company)
    }
}

module.exports = WelcomeMsgSender