const Message = require('./Message')
const EmailMessageDecorator = require('./EmailMessageDecorator')
const SmsMessageDecorator = require('./SmsMessageDecorator')

const message = new Message('Hi!  Can you send me the report today?')

const [subject, from, to] = ['Report', 'from@example.com', 'to@example.com']
const emailMessage = new EmailMessageDecorator(message, subject, from, to)
emailMessage.send()

const phonenumber = '123456789'
const sms = new SmsMessageDecorator(message, phonenumber)
sms.send()