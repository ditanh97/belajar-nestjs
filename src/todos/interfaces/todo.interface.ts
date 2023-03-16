import { Document } from 'mongoose';
export interface Todo extends Document {
  id?: string;
  title: string;
  description?: string;
  is_completed: boolean;
}