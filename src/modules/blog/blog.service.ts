import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (blog: TBlog) => {
  const newdate = new Date();

  const day = newdate.getDate();
  const month = newdate.getMonth() + 1;
  const year = newdate.getFullYear();
  const date = `${month}/${day}/${year}`.slice(0, 10);
  console.log(date);
  const result = await Blog.create({ ...blog, date });
  return result;
};

const getAllBlog = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlog = async (_id: string) => {
  const result = await Blog.findById({ _id });
  return result;
};

const updateBlog = async (_id: string, blogData: TBlog) => {
  const result = await Blog.findByIdAndUpdate({ _id }, blogData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBlog = async (_id: string) => {
  const result = await Blog.deleteOne({ _id });
  return result;
};

export const blogServices = {
  createBlogIntoDB,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
