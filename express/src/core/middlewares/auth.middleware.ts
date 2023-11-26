import { JwtConfig } from '@configs/jwt.config';
import { HttpStatus } from '@core/constants/enum';
import { ICustomRequest } from '@core/interfaces/custom-request.interface';
import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import { verify, decode } from 'jsonwebtoken';

const extractTokenFromHeader = (request: ICustomRequest): string | undefined => {
  const [type, token] = request.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
};

export const auth = async (req: ICustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = extractTokenFromHeader(req);
    if (!token) {
      next(createHttpError(HttpStatus.UNAUTHORIZED, 'Unauthorized!'));
    }

    const jwtConfig = JwtConfig.getJwtConfig();

    const user = verify(token, jwtConfig.secret);
    if (!user) {
      next(createHttpError(HttpStatus.BAD_REQUEST, 'Token invalid!'));
    }
    req.user = user;
    next();

  } catch (error) {
    next(error);
  }
}
