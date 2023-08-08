class Observer {
    notify(data) {
        throw new Error('Implement the method "notify" on the derived class!')
    }
}

module.exports = Observer
