import { Request, Response } from 'express';
import { News } from '../models/news';
import * as database from '../database';

export async function GET(req: Request, res: Response) {
    console.log(`${req.ip} requested the news`);

    const conn = await database.getPool().getConnection();
    const rows: News[] = await conn.query("SELECT * FROM Info;");
    console.log(rows);

    res.send(rows)
}

export async function POST(req: Request, res: Response) {
    console.log(`${req.ip} is posting news`);

    let data: News[] = req.body;

    // Creation de la requette d'insertion
    let rows: string[] = [];

    for (let i = 0; i < data.length; i++) {
        let row = "(";

        row += `"${data[i].title}",`;
        row += `"${data[i].author}",`;
        let summary = data[i].summary;
        row += summary == null ? "NULL," : `"${summary}",`;
        row += `"${data[i].post_link}",`;
        let image_link = data[i].image_link;
        row += image_link == null ? "NULL," : `"${image_link}",`;
        row += `"${data[i].date_published}"`;
        row += ")";

        rows.push(row);
    }

    let request = `INSERT INTO Info(title, author, summary, post_link, image_link, date_published) VALUES ${rows.join(",")};`;

    // Execute the request
    const conn = await database.getPool().getConnection();
    const result = await conn.query(request);

    // TODO: Verifier le resultat de la requête

    res.sendStatus(200)
}
