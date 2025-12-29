const request = require('supertest');
const app = require('./server');

describe('Server Routes', () => {
  
  // Test the Health Endpoint
  it('GET /health should return 200 and status message', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('OK. Deployed via Travis CI!');
  });

  // Test the Landing Page
  it('GET / should serve the HTML landing page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    // Check if the response contains standard HTML tags
    expect(res.text).toContain('<!DOCTYPE html>');
    expect(res.text).toContain('Huzaifa'); 
  });

  // Test Static Assets
  it('GET /styles.css should serve the CSS file', async () => {
    const res = await request(app).get('/styles.css');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('body {'); // Checks for valid CSS content
  });

});