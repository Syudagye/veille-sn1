import { Request, Response } from 'express';
import { News } from '../models/news';

export function GET(req: Request, res: Response) {
    console.log(`${req.ip} requested the news`);
    // exemple de news envoyé
    let example: News = {title: "test"};
    res.send(example)
}

export function POST(req: Request, res: Response) {
    console.log(`${req.ip} is posting news`);
    let example: News = req.body;
    console.log("new news: %O", example);
    res.send("ok")
}
