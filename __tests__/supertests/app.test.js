const request = require('supertest');
const makeApp = require('../../server/app')

const addUser = jest.fn();
const getUser = jest.fn();

const app = makeApp({
  addUser, 
  getUser,
})

describe("POST /users", () => {

  describe('given a username and password', () => {
    test('should save the username and password to the database', async () => {
      const bodyArr = [
        { username: 'username', household: 'smith', password: 'password' },
        { username: 'username1', household: 'smith', password: 'password1' },
        { username: 'username2', household: 'jefferson', password: 'password2' },
        { username: 'username3', household: 'jefferson', password: 'password3' },
      ]
      
      for (const body of bodyArr){
        addUser.mockReset();
        await request(app).post('/users').send(body);
        expect(addUser.mock.calls.length).toBe(1);
        expect(addUser.mock.calls[0][0]).toBe(body.username);
        expect(addUser.mock.calls[0][1]).toBe(body.household);
        expect(addUser.mock.calls[0][1]).toBe(body.password);
      }
      
    })



    test('should respond with a json object containing the user id', async () => {
      
      for (let i = 0; i < 10; i++){
        const userObj = {
          "id": i,
          "email": null,
          "username": "username",
          "password": "password",
          "household": "smith",
          "is_parent": null,
          "balance": null,
          "active_goal": null,
          "created_at": "2021-06-10T00:29:53.276Z"
      }

        addUser.mockResolvedValue(userObj);
        const response =  await request(app).post('/users').send({
          username: 'username',
          household: 'smith',
          password: 'password',
        });
        expect(response.body.user).toBeDefined();
        expect(response.body.user).toBe(userObj);
      }
    })

    test('should respond with a 200 status code', async () => {
      const response =  await request(app).post('/users').send({
        username: 'username',
        household: 'smith',
        password: 'password',
      });
      expect(response.statusCode).toBe(200);
    });

    test('should specify json in the content type header', async () => {
      const response =  await request(app).post('/users').send({
        username: 'username',
        household: 'smith',
        password: 'password',
      });
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });
  });

  describe('when the username or password is missing', () => {
    test('should respond with a status code 400', async () => {
      const bodyArr = [
        { username: "username" },
        { password: "password" },
        { household: "smith"},
        {},
      ];
      
      for (const body of bodyArr){
        const response = await request(app).post('/users').send(body);
        expect(response.statusCode).toBe(400);
      }

  });

  
  })

})