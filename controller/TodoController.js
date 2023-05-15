const todo = require("../model/TodoModel")

exports.getAllTodo = (req, res) => {
    todo.find().then((data, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200)
            res.json({
                data: data
            })
        }
    })
}

exports.SaveTodo = (req, res) => {
    console.log(req.params.id)
    let todoData = new todo({
        id: parseInt(req.params.id),
        item: req.body.item
    })
    todoData.save().then((success, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(success)
        }
    })
}

exports.updateTodo = (req, res) => {

    todo.findOneAndUpdate({ id: parseInt(req.params.id) }, { item: req.body.item }).then((success, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(success)
        }
    })
}

exports.deleteTodo = (req, res) => {
    todo.findOneAndDelete({ id: parseInt(req.params.id) }).then((success, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(success)
        }
    })
}

exports.getTodoById = (req, res) => {
    todo.findOne({ id: parseInt(req.params.id) }).then((data, err) => {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200)
            res.json({
                data: data
            })
        }
    })
}