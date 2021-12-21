import makeCreateTodo from "./createTodo";
import makeRemoveTodo from "./removeTodo";
import makeListTodos from "./listTodos.useCase"
import todoDb from "../dataAccess"

const createTodo = makeCreateTodo({todoDb})
const removeTodo = makeRemoveTodo({todoDb})
const listTodos = makeListTodos({todoDb})

const userService = {
    createTodo,
    removeTodo,
    listTodos
}

export default userService;
export { createTodo, removeTodo, listTodos }