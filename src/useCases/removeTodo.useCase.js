export default function makeRemoveTodo({todoDb}){

    return async function removeTodo({_id} = {}){
        if(!_id) throw new Error("you must introduce a todo id")

        const todoToDelete = await todoDb.findTodoById(_id)

        if(!todoToDelete) throw new Error("todo does not exist")

        return todoDb.deleteTodo(todoToDelete)
    }
}