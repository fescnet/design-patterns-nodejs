class CompaniesRepo {
    constructor() {
        this.companies = []
    }

    create(company) {
        this.companies.push(company)
    }

    delete(name) {
        this.companies = this.companies.filter((company) => company.name !== name)
    }

    display() {
        console.log("Companies: ", this.companies)
    }
}

module.exports = new CompaniesRepo()