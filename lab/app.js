const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');


const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  console.log(pathname);

  if(pathname === '/index.html') {
  
    res.statusCode = 200;
    fs.readFile('public/index.html', (err, data) => {
      if(err) throw err;
      res.end(data);
      console.log('TCL: app -> data', data);
    });
  } else {
    res.statusCode = 404;
    res.end('No File');
  }
});

module.exports = app;
