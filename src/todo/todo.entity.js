export default function buildMakeTodo ({ Id }){
    return function makeTodo({
        id = Id.makeId(),
        createdOn = Date.now(),
        descriptionTask
    }) {
        console.log(id)
        console.log(typeof id)
        if(!Id.isValidId(id)){
            throw new Error("Todo must have valid id")
        }
        if(!descriptionTask){
            throw new Error("Todo must have a task description")
        }
        if(descriptionTask.length < 1){
            throw new Error("Todo's task description must be longer")
        }

        
        /* if(sanitizedDescription < 1){
            throw new Error("Description contains no usable text")
        } */

        return Object.freeze({
            id,
            createdOn,
            descriptionTask
        })
    }
}