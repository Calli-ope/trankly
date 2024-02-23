import express, { Express, Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import cors from 'cors';

const app: Express = express();
const port = 3000;
const rankingsFilePath = path.join(__dirname, 'rankings.json');

app.use(express.static('public'));
app.use(express.json());
app.use(cors())

let rankings: any[] = [];

fs.readFile(rankingsFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading rankings data:', err);
    return;
  }
  try {
    rankings = JSON.parse(data).rankings;
    console.log('Rankings data loaded successfully.');
  } catch (parseError) {
    console.error('Error parsing rankings JSON:', parseError);
  }
});

app.get('', (req: Request, res: Response) => {
  res.send('Hallo Welt!');
});

app.get('/ranking', (req: Request, res: Response) => {
  res.status(200).json(rankings);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});