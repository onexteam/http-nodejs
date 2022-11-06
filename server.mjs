import { createServer } from 'http';

createServer((req, res) => {
  res.write('Puta');
  res.end();
}).listen(process.env.PORT);
