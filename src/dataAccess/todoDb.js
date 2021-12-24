export default function makeTodoDb ({todoModel}) {
    return Object.freeze({
        addTodo,
        findTodoById,
        deleteTodo,
        findTodos
    })
    async function findTodos(){
        const todos = await todoModel.find()
        if(!todos.length) return null
        return todos;
    }
    async function addTodo(todo){

        const addNewTodo = new todoModel(todo)
        console.log(addNewTodo)

        const saveNewTodo = await addNewTodo.save()

        return saveNewTodo
    }
    
    async function findTodoById(id){

        const todoFound = await todoModel.findById(id)

        return todoFound
    }
    
    async function deleteTodo(todo){
        try{
            const todoDeleted = await todo.remove()
            return todoDeleted
        } catch (e){
            throw new Error('error when removing document')
        }
    }
}