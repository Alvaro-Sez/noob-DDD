import uuid from 'uuid';

const Id = Object.freeze({
    makeId: uuid.v4,
    isValidId: uuid.validate
})

export default Id