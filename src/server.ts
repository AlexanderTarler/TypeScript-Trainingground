import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const PORT = 4000;

// app.get is a request to the server that gives a response
// in this case, as long as the client is on "localhost:4000/",
// they get greeted with the index.html-file
app.use(express.static('/public'));
console.log(__dirname + '/css');

app.get('/', function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
);
