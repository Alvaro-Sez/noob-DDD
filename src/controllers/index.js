import makePostTodo from "./postTodo.controller.js";
import makeDeleteTodo from "./deleteTodo.controller.js";
import makeGetTodos from "./getTodos.controller.js";
import userService from "../useCases/index.js";

const { addTodo, removeTodo, listTodos } = userService

const deleteTodo = makeDeleteTodo({removeTodo}); 
const postTodo = makePostTodo({addTodo});
const getTodos = makeGetTodos({listTodos});

const todoController = Object.freeze({
    postTodo,
    deleteTodo,
    getTodos
})

export default todoController;
export { postTodo, deleteTodo, getTodos };