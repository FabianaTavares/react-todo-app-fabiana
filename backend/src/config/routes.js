const express = require('express')

module.exports = function(server) {

    /**
     * @description é um API Routes, é um middleware, como por exemplo no Laravel. Lembrei disso. =)
     */
    const router = express.Router()
    server.use('/api', router)

    // Routes todo
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

}