import { NextFunction, Request, Response } from 'express';
import { skillServices } from './skill.service';

const createSkillIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await skillServices.createSkillIntoDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Skill created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await skillServices.getAllSkill();
    res.status(200).json({
      success: true,
      statuCode: 200,
      message: 'skill retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    const projectData = req.body;
    const result = await skillServices.updateSkill(_id, projectData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Skill updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    const result = await skillServices.deleteSkill(_id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Skill deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const skillController = {
  createSkillIntoDB,
  getAllSkill,
  updateSkill,
  deleteSkill,
};
