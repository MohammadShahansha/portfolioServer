import { NextFunction, Request, Response } from 'express';
import { loginService } from './login.service';

const createLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await loginService.createLogin(req.body);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'Logn successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = {
  createLogin,
};
