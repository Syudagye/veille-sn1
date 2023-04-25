import * as dotenv from 'dotenv';
import { VeilleAPI } from './src/api';
import { createPool } from 'mariadb';

// load .env variables
dotenv.config()

// Mariadb connection
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'veille_sn1',
});
// Start connection
pool.getConnection()
    .then(conn => {
        let api = new VeilleAPI(conn);
        api.start();
    })
    .catch(e => {
        console.error(`an error occured ${e}`);
        process.exit();
    });
