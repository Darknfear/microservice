import { Request, Response, NextFunction } from 'express';

export const catchAsync = (callback: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    callback(req, res, next);
  } catch (error) {
    next(error);
  }
}
