class CreateCompanyCommand {

    constructor(company) {
        this.company = company
        this.subscribers = []
    }

    subscribe(observer) {
        this.subscribers.push(observer)
    }

    notifySubscribers() {
        this.subscribers.forEach(observer => observer.notify(this.company))
    }

    execute() {
        //logic to create a company...
        console.log('Company created successfully!')
        this.notifySubscribers()
    }
}

module.exports = CreateCompanyCommand