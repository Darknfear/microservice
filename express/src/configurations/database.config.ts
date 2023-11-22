import { DataSource } from 'typeorm';
import { join } from 'path';
import { Configuration } from './configuration';

export class DbConfiguration extends Configuration {
  private static dataSource: DataSource;
  private static dbConfig: DbConfiguration;
  private constructor() {
    super();
  }

  static getDbConfig() {
    if (!this.dbConfig) {
      this.dbConfig = new DbConfiguration();
    }
    return this.dbConfig;
  }

  static getConfig() {
    if (!this.dataSource) {
      this.dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 5432),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ['dist/databases/entities/*.entity.{ts,js}', join(__dirname, '**', '*.entity.{ts,js}')],
        logging: true,
      });
    }
    return this.dataSource;
  }
}
