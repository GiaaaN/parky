class App {
    constructor() {
        this.initializeServer()
    }

    initializeServer(port = 3000) {
        const http = require('http')
            .createServer((request, response) => {
                console.log(true)
            }).listen(port)
    }
}

module.exports = new App()