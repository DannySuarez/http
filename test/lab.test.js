const request = require('supertest');
const app = require ('../lab/app');
const fs = require('fs');
const { join } = require('path');

describe('read a file', () => {
  it('will read index file', done => {
    fs.readFile(join(__dirname, '../index.html'), 'utf8', (err, data) => {
      expect(data).toEqual(expect.stringContaining('Read me'));

      done();
    });
  });
});

