import { config } from 'dotenv';
import { join } from 'path';

export class Configuration {
  constructor() {
    const path = join(__dirname, '**', `.env.${process.env.NODE_ENV || 'development'}`);
    config({ path: path });
  }
}