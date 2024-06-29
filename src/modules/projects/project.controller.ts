import { NextFunction, Request, Response } from 'express';
import { projectServices } from './project.service';

const createProjectIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.createProjectIntoDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Project created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await projectServices.getAllProject();
    res.status(200).json({
      success: true,
      statuCode: 200,
      message: 'Projects retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    const result = await projectServices.getSingleProject(_id);
    res.status(200).json({
      success: true,
      statuCode: 200,
      message: 'Single Projects retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    const projectData = req.body;
    const result = await projectServices.updateProject(_id, projectData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Project updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    const result = await projectServices.deleteProject(_id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Project deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const projectController = {
  createProjectIntoDB,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
