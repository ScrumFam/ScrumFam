const request = require('supertest');
const makeApp = require('../../server/app')

const createUser = jest.fn();
const getUser = jest.fn();

const app = makeApp({
  createUser, 
  getUser,
})

describe("POST /users", () => {

  describe('given a username and password', () => {
    test('should save the username and password to the database', async () => {
      const bodyArr = [
        { username: 'username', password: 'password' },
        { username: 'username1', password: 'password1' },
        { username: 'username2', password: 'password2' },
        { username: 'username3', password: 'password3' },
      ]
      
      for (const body of bodyArr){
        createUser.mockReset();
        await request(app).post('/users').send(body);
        expect(createUser.mock.calls.length).toBe(1);
        expect(createUser.mock.calls[0][0]).toBe(body.username);
        expect(createUser.mock.calls[0][1]).toBe(body.password);
      }
      
    })



    test('should respond with a json object containing the user id', async () => {
      
      for (let i = 0; i < 10; i++){
        createUser.mockResolvedValue(i);
        const response =  await request(app).post('/users').send({
          username: 'username',
          password: 'password'
        });
        expect(response.body.userId).toBeDefined();
        expect(response.body.userId).toBe(i);
      }
    })

    test('should respond with a 200 status code', async () => {
      const response =  await request(app).post('/users').send({
        username: 'username',
        password: 'password'
      });
      expect(response.statusCode).toBe(200);
    });

    test('should specify json in the content type header', async () => {
      const response =  await request(app).post('/users').send({
        username: 'username',
        password: 'password'
      });
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });
  });

  describe('when the username or password is missing', () => {
    test('should respond with a status code 400', async () => {
      const bodyArr = [
        { username: "username" },
        { password: "password" },
        {},
      ];
      
      for (const body of bodyArr){
        const response = await request(app).post('/users').send(body);
        expect(response.statusCode).toBe(400);
      }

  });

  
  })

})