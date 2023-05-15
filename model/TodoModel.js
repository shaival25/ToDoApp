const mongoose = require("mongoose")

const todo = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    item: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("todo", todo)