const {v4, validate} = require('uuid');

const Id = Object.freeze({
    makeId: v4,
    isValidId: validate
})

export default Id