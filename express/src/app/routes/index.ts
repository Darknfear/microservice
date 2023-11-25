import { Router } from 'express';
import v1Route from './v1';

const rootRoute = Router();

rootRoute.use('/v1', v1Route);

export default rootRoute;
