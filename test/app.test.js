const request = require('supertest');
const app = require ('../lib/app');

describe('something', () => {
  it('returns a list of dogs', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('spot'));
      });
  });
});
