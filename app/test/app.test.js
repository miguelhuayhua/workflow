const request = require('supertest');
const { app, mongoose } = require('../app');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.disconnect();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('API básico', () => {
  test('GET / debe responder correctamente', async () => {
    const resp = await request(app).get('/');
    expect(resp.status).toBe(200);
  });
});
