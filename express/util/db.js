import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    dialect: 'postgres',
    host: process.env.PGHOST,
    port: process.env.EXPRESS_DB_PORT
  }
);
