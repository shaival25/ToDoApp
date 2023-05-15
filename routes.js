var router = require('express').Router()
var authController = require('./controller/AuthController')
var todoController = require("./controller/TodoController")

router.post('/saveUser', authController.SaveUser)
router.post('/login', authController.login)


router.get("/getall", authController.authenticatetoken, todoController.getAllTodo)
router.post("/create/:id", authController.authenticatetoken, todoController.SaveTodo)
router.put("/update/:id", authController.authenticatetoken, todoController.updateTodo)
router.delete("/delete/:id", authController.authenticatetoken, todoController.deleteTodo)
router.get("/getbyid/:id", authController.authenticatetoken, todoController.getTodoById)


module.exports = router