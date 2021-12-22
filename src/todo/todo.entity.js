export default function buildMakeTodo ({ Id }){
    return function makeTodo({
        _id = Id.makeId(),
        createdOn = Date.now(),
        descriptionTask
    }) {
        if(!Id.isValidId(_id)){
            throw new Error("Todo must have valid _id")
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
            _id,
            createdOn,
            descriptionTask 
        })
    }
}