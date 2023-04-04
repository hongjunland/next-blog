import { NextApiHandler, NextApiResponse } from "next";

export default function handler(req: NextApiHandler, res: NextApiResponse) {
    res.status(200).json({ text: 'Hello' });
}