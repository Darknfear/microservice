import { config } from 'dotenv';
import { join } from 'path';

export class Configuration {
  constructor() {
    config({ path: join(__dirname, '**', '.env.development') })
  }
}