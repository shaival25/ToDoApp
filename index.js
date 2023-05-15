const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const router = require("../ToDoApp/routes")




const app = express()
const PORT = 3000


//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

mongoose.set('strictQuery', false);
const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/TodoApp", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})