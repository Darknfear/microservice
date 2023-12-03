import { config } from 'dotenv';
import { join } from 'path';

export class Configuration {
  constructor(envPath?: string) {
    const path = envPath || join(__dirname, '**', `.env.${process.env.NODE_ENV || 'development'}`);
    config({ path: path });
  }
}