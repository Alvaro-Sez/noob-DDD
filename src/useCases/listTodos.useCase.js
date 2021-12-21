export default function makeListTodos({todoDb}){

 return async function listTodos(){
     
     const todos = await todoDb.findTodos()

     if(!todos) throw new Error("there are no todos in the db")

     return todos
 }
}