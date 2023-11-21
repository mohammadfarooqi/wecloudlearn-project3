import dotenv from 'dotenv';
import knex from 'knex';
import knexConfig from '../knexfile.js';

dotenv.config();

const env = process.env.ENV || 'development';

const db = knex(knexConfig[env]);

export default db;
