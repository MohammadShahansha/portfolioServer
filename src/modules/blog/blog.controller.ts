import { NextFunction, Request, Response } from 'express';
import { blogServices } from './blog.service';

const createBlogIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await blogServices.createBlogIntoDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Blog created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await blogServices.getAllBlog();
    res.status(200).json({
      success: true,
      statuCode: 200,
      message: 'Blogs retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    const result = await blogServices.getSingleBlog(_id);
    res.status(200).json({
      success: true,
      statuCode: 200,
      message: 'Single Blog retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    const blogData = req.body;
    const result = await blogServices.updateBlog(_id, blogData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Blog updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    const result = await blogServices.deleteBlog(_id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Blog deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const blogController = {
  createBlogIntoDB,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
