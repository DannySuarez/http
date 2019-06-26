const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');


const app = createServer((req, res) => {
  const url = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(url.pathname === '/') {
    res.statusCode = 200;
    res.end('test');
  }
});


module.exports = app;
