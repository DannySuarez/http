const { createServer } = require('http');
const { getFilePath } = require('../lab/util/filePath');
const { parse } = require('url');
const fs = require('fs');

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');

  res.statusCode = 200;
  fs.readFile(getFilePath(pathname), { encoding: 'utf8' }, (err, data) => {
    if(err && err.code === 'ENOENT') {
      res.statusCode = 404;
      res.end('No File');
    }
    res.end(data);
  });
  
});

module.exports = app;
