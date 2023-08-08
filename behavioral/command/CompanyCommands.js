const companiesRepo = require('./CompaniesRepo')

class Command {
    execute() { }
    undo() { }
}

class CreateCompanyCommand extends Command {

    constructor(company) {
        super()
        this.company = company
    }

    execute() {
        companiesRepo.create(this.company)
        console.log('Company created successfully!')
    }

    undo() {
        companiesRepo.delete(this.company.name)
    }
}

class DeleteCompanyCommand extends Command {
    constructor(company) {
        super()
        this.company = company
    }

    execute() {
        companiesRepo.delete(this.company.name)
        console.log('Company deleted!')
    }

    undo() {
        companiesRepo.create(this.company)
    }
}

module.exports = {
    CreateCompanyCommand,
    DeleteCompanyCommand,
}