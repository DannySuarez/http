const request = require('supertest');
const app = require ('../lab/app');
const fs = require('fs');
const { join } = require('path');
const { getFilePath } = require ('../lab/util/filePath');

describe('app routes static server', () => {
  it('gets file path from url pathname', () => {
    const filePath = getFilePath('/index.html');
    expect(filePath).toEqual(expect.stringContaining('public/index.html'));
  });

  it('gets an index.html if we request it', () => {
    return request(app)
      .get('/index.html')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('<h1>Success</h1>'));
      });
  });
});

describe('read a file', () => {
  it('will read index file', done => {
    fs.readFile(join(__dirname, '../index.html'), 'utf8', (err, data) => {
      expect(data).toEqual(expect.stringContaining('Read me'));

      done();
    });
  });
});

