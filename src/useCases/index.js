import makeAddTodo from "./addTodo.useCase.js";
import makeRemoveTodo from "./removeTodo.useCase.js";
import makeListTodos from "./listTodos.useCase.js"
import todoDb from "../dataAccess/index.js"

const addTodo = makeAddTodo({todoDb})
const removeTodo = makeRemoveTodo({todoDb})
const listTodos = makeListTodos({todoDb})

const userService = {
    addTodo,
    removeTodo,
    listTodos
}

export default userService;
export { addTodo, removeTodo, listTodos }