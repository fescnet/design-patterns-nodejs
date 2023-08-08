class Controller {
    constructor() {
        this.commands = []
    }

    execute(command) {
        this.commands.push(command)
        command.execute()
    }

    undo() {
        const lastCommandIndex = this.commands.length - 1
        if (lastCommandIndex < 0) {
            return console.log('Nothing to undo')
        }
        this.commands[lastCommandIndex].undo()
        this.commands.pop()
        console.log('undone!')
    }
}

module.exports = Controller