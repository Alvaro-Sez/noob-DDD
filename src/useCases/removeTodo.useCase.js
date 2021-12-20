export default function makeRemoveTodo({todoDb}){

    return async function removeTodo({id} = {}){
        if(!id) throw new Error("you must introduce a todo id")

        const todoToDelete = await todoDb.findTodoById(id)

        if(!todoToDelete) throw new Error("todo does not exist")

        return todoDb.removeTodo(todoToDelete)
    }
}