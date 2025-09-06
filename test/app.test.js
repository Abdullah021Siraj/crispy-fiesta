const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.json({ message: "Hello, World!" }));
app.get('/health', (req, res) => res.json({ status: "UP" }));

describe('GET /', () => {
  it('responds with JSON', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello, World!");
  });
});

describe('GET /health', () => {
  it('responds with status UP', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });
});
