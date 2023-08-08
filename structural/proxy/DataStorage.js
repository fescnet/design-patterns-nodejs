class DataStorage {
    constructor() {
        this.initialState = {}
        this.data = this.initialState
    }

    save(key, value) {
        this.data[key] = value
    }

    retrieve(key) {
        return this.data[key]
    }

    clear() {
        this.data = this.initialState
    }
}

module.exports = DataStorage