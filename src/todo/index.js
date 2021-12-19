import buildMakeTodo from "./todo.entity";
import sanitizeHtml from 'sanitize-html';
import Id from './service/id';

const makeTodo = buildMakeTodo({Id, sanitizeHtml})

export default makeTodo;


