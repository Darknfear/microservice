import { Router } from 'express';
import userRoute from './user.route';

const v1Route = Router();

v1Route.use('/user', userRoute);

export default v1Route;
