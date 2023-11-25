import { auth } from '@core/middlewares/auth.middleware';
import { Router } from 'express';
import { signIn } from '@controllers/user.controller'
import { catchAsync } from '@core/utils/catch-error.util';
const userRoute = Router();

userRoute.get('/sign-in', [catchAsync(auth)], catchAsync(signIn));

export default userRoute;
