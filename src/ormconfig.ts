import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
const isProduction = process.env.NODE_ENV === 'production';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'acquire',
  entities: [],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: !isProduction,
  migrationsRun: isProduction,
  dropSchema: !isProduction && false,
  namingStrategy: new SnakeNamingStrategy(),
} as TypeOrmModuleOptions;
