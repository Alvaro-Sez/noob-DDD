import makePostTodo from "./postTodo.controller";
import makeDeleteTodo from "./deleteTodo.controller";
import { createTodo, removeTodo } from "../useCases/index";

const postTodo = makePostTodo({createTodo});
const deleteTodo = makeDeleteTodo({removeTodo});

const todoController = Object.freeze({
    postTodo,
    deleteTodo
})

export default todoController;
export { postTodo, deleteTodo };