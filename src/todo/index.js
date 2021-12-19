import buildMakeTodo from "./todo.entity";
import sanitizeHtml from 'sanitize-html';
import Id from '../id/index';

const makeTodo = buildMakeTodo({Id, sanitizeHtml})


