import makeTodo from "../todo/index";

export default function makeAddTodo({todoDb}){

    return async function addTodo(todoData){
        const todo = makeTodo(todoData)
        const exists = await todoDb.findTodoById(todoData)

        if(exists) throw new Error("todo alredy exist")

        return todoDb.addTodo(todo)
    }
}
