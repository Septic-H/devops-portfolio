const request = require('supertest');
const app = require('./server');

describe('Backend API', () => {
  
  // Test the Health Endpoint
  it('GET /health should return 200 and uptime', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('uptime');
  });

  // Test 404
  it('GET / should return 404', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(404);
  });
});