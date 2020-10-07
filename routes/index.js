const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
module.exports = function(){

    router.get('/', controllers.home)
    
    router.post('/employee/add', controllers.addEmployee)

    router.get('/employee', controllers.showEmployees)

    router.get('/employee/:id', controllers.oneEmployee)

    router.put('/employee/update/:id', controllers.updateEmployee)

    router.delete('/employee/delete/:id', controllers.deleteEmployee)

    return router
}