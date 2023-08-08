class DataStorageProxy {
    constructor(dataStorage, userPermissions = []) {
        this.ds = dataStorage
        this.userPermissions = userPermissions
    }

    save(key, value) {
        this.ds.save(key, value)
    }

    retrieve(key) {
        return this.ds.retrieve(key)
    }

    clear() {
        if (!this.userPermissions.includes('clear')) {
            throw new Error('The user is not allowed to perform the clear operation')
        }
        this.ds.clear()
    }
}

module.exports = DataStorageProxy