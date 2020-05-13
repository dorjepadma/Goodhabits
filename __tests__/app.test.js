const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

describe('Goodhabits routes', () => {
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
});
