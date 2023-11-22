import dotenv from 'dotenv';
import express, { Application } from 'express';
import { App } from './app/app';

const main = async () => {
  const path = `.env.${process.env.NODE_ENV || 'development'}`;
  dotenv.config({ path: path });
  const app: Application = express();
  App.initApp(app);
};

main();
