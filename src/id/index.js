import { v4 as uuidv4 } from 'uuid';

const Id = Object.freeze({
    makeId: uuidv4(),
    isValidId: uuidv4.validate
})

export default Id