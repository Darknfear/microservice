import { IJwtConfig } from '@core/interfaces/jwt-config.interface';
import { Configuration } from './configuration';
export class JwtConfig extends Configuration {
  private constructor() {
    super();
  }

  static getJwtConfig(): IJwtConfig {
    return {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRE_IN,
    };
  }
}
