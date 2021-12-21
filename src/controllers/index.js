import makePostTodo from "./postTodo.controller";
import makeDeleteTodo from "./deleteTodo.controller";
import makeListTodos from "./listTodos.controller";
import { createTodo, removeTodo, listTodos } from "../useCases/index";

const postTodo = makePostTodo({createTodo});
const deleteTodo = makeDeleteTodo({removeTodo});
const listTodos = makeListTodos({listTodos});

const todoController = Object.freeze({
    postTodo,
    deleteTodo,
    listTodos
})

export default todoController;
export { postTodo, deleteTodo, listTodos };