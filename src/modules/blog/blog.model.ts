import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Blog = model<TBlog>('Blog', blogSchema);
