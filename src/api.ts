import express, { Express } from 'express';
import * as BodyParser from 'body-parser';
import { PoolConnection } from 'mariadb';

import * as news from './routes/news';

export class VeilleAPI {
    app: Express;

    constructor() {
        this.app = express();

        // support pour le json
        this.app.use(BodyParser.json());

        // les routes
        this.app.get('/news', news.GET);
        this.app.post('/news', news.POST);
        this.app.delete('/news', news.DELETE);
    }

    start() {
        this.app.listen(process.env.API_PORT, () => {
            console.log("Api Started");
        })
    }
}
