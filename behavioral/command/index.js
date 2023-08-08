const Company = require("./Company")
const { CreateCompanyCommand, DeleteCompanyCommand } = require("./CompanyCommands")
const companiesRepo = require("./CompaniesRepo")
const Controller = require("./Controller")

const company1 = new Company('Pepsi')
const company2 = new Company('Coke')

const controller = new Controller()
const createCompanyCommand1 = new CreateCompanyCommand(company1)
const createCompanyCommand2 = new CreateCompanyCommand(company2)
const deleteCompanyCommand1 = new DeleteCompanyCommand(company1)

controller.execute(createCompanyCommand1)
controller.execute(createCompanyCommand2)
controller.execute(deleteCompanyCommand1)
controller.undo()
companiesRepo.display()
