const fs = require('fs');

class PersistentMemoryStorageAdapter {

    constructor() {
        this.data = {}
        this.fileName = './data.json'
    }

    save(key, value) {
        this.data[key] = value;
        console.log('Value saved successfully!')
        const dataString = JSON.stringify(this.data);
        fs.writeFile(this.fileName, dataString, (err) => {
            if (err) {
                console.error('Error: ', err);
            } else {
                console.log('Value successfully saved to file system!')
            }
        });
    }

    retrieve(key) {
        return this.data[key] || null;
    }
}

module.exports = PersistentMemoryStorageAdapter;
