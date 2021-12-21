import dotenv from 'dotenv';
import express from 'express';
import makeExpressCallback from './expressCallback/index';
import {
    postTodo,
    deleteTodo,
} from './controllers'
const app = express();

app.listen(3000, ()=>console.log("app running port 3000"))

app.use(express.json())

app.post('/todos', makeExpressCallback(postTodo))
app.delete('/todos/:id', makeExpressCallback(deleteTodo))

