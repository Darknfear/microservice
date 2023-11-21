import { Application } from 'express';
import cors, { CorsOptions } from "cors";
import bodyParser from 'body-parser';

export class App {
  static appServer: App | undefined;
  private constructor(app: Application) {
    this.config(app);
  }

 private config(app: Application) {
  // body parser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  // cors
  const corsOptions: CorsOptions = {
    origin: "*",
  };
  app.use(cors(corsOptions));

  // listen
  app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}...`);
  });
 }
 static initApp(app: Application): App {
  if (!this.appServer) {
    this.appServer = new App(app);
  }
  return this.appServer;
 }
}