import express, { Express, Request, Response , Application } from 'express';

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});