const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const url = parse(req.url);
  console.log(url.pathname);
  console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>node</title>
  </head>
  <body>
    <h1>spot</h1>
  
    <ul>
      <li>Dog</li>
      <li>cat</li>
    </ul>
    
  </body>
  </html>`);
});

module.exports = app;
