const request = require('supertest');
const app = require ('../lib/app');

describe('something', () => {
  it('returns a list of dogs', done => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('spot'));
        done();
      });
  });

  it('returns red', done => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('red'));
        done();
      });
  });

});
