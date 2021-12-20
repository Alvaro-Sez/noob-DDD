import makeTodoDb from "./todoDb"
import todoModel from "./models/todoModel"

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/todoTest', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err))

const todoDb = makeTodoDb({todoModel})
export default todoDb;
