const CreateCompanyCommand = require('./CreateCompanyCommand')
const Company = require('./Company')
const WelcomeMsgSender = require('./WelcomeMsgSender')

const company = new Company('Pepsi')
const createCompanyCommand = new CreateCompanyCommand(company)
createCompanyCommand.subscribe(new WelcomeMsgSender())
createCompanyCommand.execute()