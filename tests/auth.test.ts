import supertest from 'supertest';
import app from './../src/app.js';

describe('auth test suite', () => {

  it('should signup with success', async () => {
    const body = {
      email: 'teste199@teste.com',
      password: '0123456789'
    };
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toBe(201);
  });

  it('should not signup invalid password', async () => {
    const body = {
      email: 'teste198@teste.com',
      password: '12345678'
    };
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toBe(422);
  });

  it('should not signup invalid email', async () => {
    const body = {
      email: 'novoemailnovoemail',
      password: '0123456789'
    };
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toBe(422);
  });

  it('should not signup conflict', async () => {
    const body = {
      email: 'teste199@teste.com',
      password: '0123456789'
    };
    const result = await supertest(app).post("/signup").send(body);
    const status = result.status;
    expect(status).toBe(409);
  });

})