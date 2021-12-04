/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const mongoose = require('mongoose');
const dbConnection = require('../config/dbConnection');
const Balloon = require('../models/balloon.model');
const BALLOONS = require('../__Mock__/balloons');
const app = require('../app');

describe('Given the balloon routes', () => {
  let initialCount;
  let initialId;

  beforeEach(async () => {
    await dbConnection();
    await Balloon.deleteMany({});

    const response = await Balloon.insertMany(BALLOONS);
    initialCount = response.length;
    initialId = response[0]._id;
  });
  afterEach(async () => {
    await mongoose.disconnect();
  });
  describe('When the GET /api/balloons is atacked', () => {
    test('Then should return all balloons', async () => {
      const response = await request(app).get('/api/balloons');
      expect(response.body).toHaveLength(initialCount);
      expect(response.status).toBe(200);
    });
  });
  describe('When the GET /api/balloons/:id is atacked', () => {
    test('Then should return the product', async () => {
      const response = await request(app).get(`/api/balloons/${initialId}`);
      expect(response.body.color).toBe('white');
      expect(response.status).toBe(200);
    });
  });
});
