require('dotenv').config();

const connect = require('../lib/utils/connect');

const mongoose = require('mongoose');
const request = require ('supertest');
const app = require('../lib/app');

describe('good habits routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a good habit goal via POST', () => {
    return request(app)
      .post('/api/v1/goodhabits')
      .send({
        title: 'writing fullstack react apps',
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
          __v: 0
        });
      });
  });
});
