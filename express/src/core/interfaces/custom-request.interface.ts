import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
interface UserJwtPayload extends JwtPayload {
  user: {
    id?: string;
    email?: string;
    role?: any;
  };
}
export interface ICustomRequest extends Request {
  jwt: UserJwtPayload;
}
