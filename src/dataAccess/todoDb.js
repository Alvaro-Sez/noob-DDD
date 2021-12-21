export default function makeTodoDb ({todoModel}) {
    return Object.freeze({
        addTodo,
        findTodoById,
        deleteTodo,
        findTodos
    })
    async function findTodos(){
        const todos = await todoModel.find()
        if(!todos) todos = null
        return todos;
    }
    async function addTodo(todo){
        const addNewTodo = new todoModel(todo)
        const saveNewTodo = await addNewTodo.save()

        return saveNewTodo
    }
    
    async function findTodoById(todo){
        const { _id } = todo
        const todoFound = await todoModel.findById({_id})
        if(!todoFound) todoFound = null;
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