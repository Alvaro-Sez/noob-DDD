export default function buildMakeTodo ({ Id, sanitize }){
    return function makeTodo({
        id = Id.makeId(),
        createdOn = Date.now(),
        descriptionTask
    }) {
        if(!Id.isValidId(id)){
            throw new Error("Todo must have valid id")
        }
        if(!descriptionTask){
            throw new Error("Todo must have a task description")
        }
        if(descriptionTask.length < 1){
            throw new Error("Todo's task description must be longer")
        }
        
        let sanitizedDescription = sanitize(descriptionTask).trim()
        
        if(sanitizedDescription < 1){
            throw new Error("Description contains no usable text")
        }

        return Object.freeze({
            getId:() => id,
            getCreatedOn:() => createdOn,
            getDescriptionTask: () => descriptionTask,
        })
    }
}