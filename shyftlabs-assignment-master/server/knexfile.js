import dotenv from 'dotenv';

dotenv.config();

const base = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './seeds',
    loadExtensions: ['.js'],
  },
  useNullAsDefault: true,
};

export default {
  development: {
    ...base,
    connection: {
      ...base.connection,
      // ssl: { rejectUnauthorized: false },
    },
    debug: true,
  },
  production: {
    ...base,
    connection: {
      ...base.connection,
      // ssl: { rejectUnauthorized: true },
      // ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    acquireConnectionTimeout: 10000,
  },
};
