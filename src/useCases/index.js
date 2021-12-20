import makeCreateTodo from "./createTodo";
import makeRemoveTodo from "./removeTodo";
import todoDb from "../dataAccess"

const createTodo = makeCreateTodo({todoDb})
const removeTodo = makeRemoveTodo({todoDb})

const userService = {
    createTodo,
    removeTodo
}

export default userService;
export { createTodo, removeTodo }