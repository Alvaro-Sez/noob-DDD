const express = require('express');
import makeExpressCallback from './expressCallback/index';
import todoController from './controllers/index';

const { getTodos, postTodo, deleteTodo } = todoController;

const app = express();


app.use(express.json())

app.get('/todos', makeExpressCallback(getTodos))
app.post('/todos', makeExpressCallback(postTodo))
app.delete('/todos/:_id', makeExpressCallback(deleteTodo))


app.listen(3000, ()=>console.log("app running port 3000"))