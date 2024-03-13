require('dotenv').config({ path: "./.env"})
import { Request, Response } from 'express';
const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();
app.set('view engine', 'ejs');


app.use('/articles', articleRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('GET OUTTA HERE!')
});

app.listen(process.env.PORT, () => {
  console.log('server is running on port: ', process.env.PORT);
});

module.exports = express;
