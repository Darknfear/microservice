import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { Configuration } from './configuration';
import { join } from 'path';
config({ path: `../../.env.${process.env.NODE_ENV || 'development'}` });
class TypeORMConfig extends Configuration {
  constructor() {
    console.log(process.cwd());
    super();
    config({ path: `${process.cwd()}/.env.${process.env.NODE_ENV || 'development'}` });
    
  }
  get connectionSource() {
    return new DataSource({
      migrationsTableName: 'migrations',
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: false,
      synchronize: false,
      name: 'default',
      entities: ['src/databases/entities/**.entity{.ts,.js}'],
      migrations: ['src/databases/migrations/**/*{.ts,.js}'],
      subscribers: ['src/databases/subscriber/**/*{.ts,.js}'],
    });
  }
}

export default new TypeORMConfig().connectionSource;
