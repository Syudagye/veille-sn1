import { Request, Response } from 'express';
import { News } from '../models/news';

export function GET(req: Request, res: Response) {
    console.log(`${req.ip} requested the news`);
    // exemple de news envoyé
    let example: News = {
        title: "La date de la veille numérique approche !",
        author: "Étienne",
        summary: "Alors que de nombreux élèves n'ont toujours pas commencé leur projet de veille, il ne reste qu'une semaine avant la date fatidique !!! On peut dire que c'est la sauce !!!",
        date_published: Date.now().toString(),
        id: 69,
        post_link: "http://syu.ovh"
    };
    res.send(example)
}

export function POST(req: Request, res: Response) {
    console.log(`${req.ip} is posting news`);
    let example: News = req.body;
    console.log("new news: %O", example);
    res.send("ok")
}
