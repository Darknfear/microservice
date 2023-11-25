import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 400).json({
    message: error.message
  });
};