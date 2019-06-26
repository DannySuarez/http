const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const url = parse(req.url);
  console.log(url.pathname);
  console.log(req);
  res.setHeader('Content-Type', 'text/html');
  if(url.pathname === '/') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>node</title>
    </head>
    <body>
      <h1>Welcome</h1>
      <h2>spot</h2>
    </body>
    </html>`);
  } else if 
  (url.pathname === '/red') {
    res.statusCode = 200;
    res.end(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>node</title>
      </head>
      <body>
        <h1>Welcome</h1>
        <h2>red</h2>
      </body>
      </html>`);
  }
});

module.exports = app;
