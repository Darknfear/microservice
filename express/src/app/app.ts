import 'module-alias/register';
import { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import bodyParser from 'body-parser';
import { DbConfiguration } from '@configs/database.config';
import { join } from 'path';

export class App {
  static appServer: App | undefined;
  private constructor(app: Application) {
    this.config(app);
  }

  private config(app: Application) {
    const dataSource = DbConfiguration.getConfig();
    // config database
    dataSource
      .initialize()
      .then(() => {
        console.log(`Data Source has been initialized!`);
        // body parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // cors
        const corsOptions: CorsOptions = {
          origin: '*',
        };
        app.use(cors(corsOptions));

        // listen
        app.listen(process.env.PORT, () => {
          console.log(`Server is running in port ${process.env.PORT}...`);
        });
      })
      .catch((err) => {
        console.error(`Error during Data Source initialization: ${err}`);
      });
  }
  static initApp(app: Application): App {
    if (!this.appServer) {
      this.appServer = new App(app);
    }
    return this.appServer;
  }
}
