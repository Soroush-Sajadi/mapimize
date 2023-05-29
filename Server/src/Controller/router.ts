import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router: Express = express();

router.get('/', (req: Request , res: Response) => {
  res.json('Payload router node express');
});

export default router