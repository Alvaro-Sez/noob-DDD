import makeTodo from "../todo";

export default function makeCreateTodo({todoDb}){

    return async function createTodo(todoData){
        const todo = makeTodo(todoData)
        const exists = await todoDb.findTodoById(todoData)

        if(exists) throw new Error("todo alredy exist")

        return todoDb.addTodo(todo)
    }
}
