export default function makeDeleteTodo({todoDb}){

    return async function deleteTodo({id} = {}){
        if(!id) throw new Error("you must introduce a todo id")

        const todoToDelete = await todoDb.findTodoById(id)

        if(!todoToDelete) throw new Error("todo does not exist")

        return todoDb.deleteTodo(todoToDelete)
    }
}