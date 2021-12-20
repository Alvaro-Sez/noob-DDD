import makeCreateTodo from "./createTodo";
import makeDeleteTodo from "./deleteTodo";
import todoDb from "../dataAccess"

const createTodo = makeCreateTodo({todoDb})
const deleteTodo = makeDeleteTodo({todoDb})

const userService = {
    createTodo,
    deleteTodo
}

export default userService;
export { createTodo, deleteTodo }