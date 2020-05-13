const mongoose = require('mongoose');
const request = require ('supertest');
const app = require('../lib/app');

describe('good habits routes'), () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  it('creates a good habit goal via POST request', () => {
    return request(app)
      .post('api/v1/habits')
      .send({
        title: 'writing fullstack react a[[s',
        date: 'May 13 2020',
        description: 'every time you do it you learn',
        goal: 21,
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'writing fullstack react apps',
          date: 'May 13 2020',
          description: 'every time you do it you learn',
          goal: 21,
          progress: 2,
          __v: 1
        });
      });
  });
};
