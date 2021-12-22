import sanitizeHtml from "sanitize-html";
import buildMakeTodo from "./todo.entity.js";
import Id from './service/id/index.js';


const makeTodo = buildMakeTodo({Id})

export default makeTodo;


