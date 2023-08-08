class EphemeralMemoryStorage {

    constructor() {
        this.data = {}
    }

    save(key, value) {
        this.data[key] = value
        console.log('Value saved successfully!')
    }

    retrieve(key) {
        return this.data[key] || null
    }
}

module.exports = EphemeralMemoryStorage