import { Router } from 'express';
import userRoute from './user.route';

const v1Route = Router();

v1Route.use('v1', userRoute);

export default v1Route;
