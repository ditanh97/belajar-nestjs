import * as mongoose from 'mongoose';
export const TodoSchema = new mongoose.Schema({
  title: String,
  is_completed: Boolean,
  description: String,
});