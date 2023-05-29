import { Application } from 'express';
import express from 'express';
import cors from 'cors';
import router from './Controller/router'


const app: Application = express();
const port:string = process.env.DEV_PORT
app.use(cors());
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use(router)
