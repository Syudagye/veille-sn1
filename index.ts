import * as dotenv from 'dotenv';
import { VeilleAPI } from './src/api';
import { createPool } from 'mariadb';
import * as database from './src/database';

// load .env variables
dotenv.config()

// Mariadb connection
database.setPool(createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'veille_sn1',
}));

// Start connection
let api = new VeilleAPI();
api.start();
