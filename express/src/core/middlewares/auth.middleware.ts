import { HttpStatus } from '@core/constants/enum';
import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import { verify } from 'jsonwebtoken';

const extractTokenFromHeader = (request: Request): string | undefined => {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractTokenFromHeader(req);
    if (!token) {
      next(createHttpError(HttpStatus.UNAUTHORIZED, 'Unauthorized!'));
    }
  } catch (error) {
    next(error);
  }
}
