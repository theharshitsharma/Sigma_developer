import mongoose from "mongoose";
const Todoschema = new mongoose.Schema({
    title: String,
    desc:String,
    isDone:Boolean,
    days:Number
  });
export const Todo = mongoose.model('Todo', Todoschema);