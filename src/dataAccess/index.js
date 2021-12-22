import makeTodoDb from "./todoDb.js"
import todoModel from "./models/todoModel.js"
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/todoTest', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err))

const todoDb = makeTodoDb({todoModel})
export default todoDb;
