class Iterator {
    constructor(items) {
        this.items = items
        this.index = 0
    }

    first() {
        return this.items[0]
    }

    last() {
        return this.items[this.items.length - 1]
    }

    prev() {
        if (this.index > 0) {
            this.index--
        }
        return this.current()
    }

    current() {
        return this.items[this.index]
    }

    hasNext() {
        return this.index < this.items.length - 1
    }

    next() {
        if (this.hasNext()) {
            this.index++
        }
        return this.current()
    }
}

module.exports = Iterator