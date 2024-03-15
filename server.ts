require('dotenv').config({ path: "./.env"})
import { Request, Response } from 'express';
import express from 'express';
import mongoose from 'mongoose';
import articleRouter from './routes/articles';
const app = express();

mongoose.connect(process.env.MONGO_DB ?? '');

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send('GET OUTTA HERE!')
});

app.listen(process.env.PORT, () => {
  console.log('server is running on port: ', process.env.PORT);
});

module.exports = express;
