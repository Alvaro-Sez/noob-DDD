import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    _id : { type: String },
    createdOn : { type: Date, default: Date.now()},
    taskDescription: { type: String, minlength: 4, maxlength: 80 }
})

const todoModel = mongoose.model('todoModel', todoSchema);

export default todoModel;