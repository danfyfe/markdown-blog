const expressMod = require('express');
import { Request, Response } from 'express';
const router = expressMod.Router();

router.get('/', (req: Request, res: Response) => {
  const articles = [{
    title: 'Test article',
    createdAt: new Date(),
    description: 'Test description',
    markdown: 'Test markdown'
  }]
  res.render('./articles/index', { articles: articles });
});

router.get('/new', (req: Request, res: Response) => {
  res.render('./articles/new')
});

router.post('/', (req: Request, res: Response) => {
  
});

module.exports = router;
