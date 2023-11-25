import { Request } from 'express';
interface User {
  id?: string;
  email?: string;
  role?: any;
}
export interface ICustomRequest extends Request {
  user: User;
}
