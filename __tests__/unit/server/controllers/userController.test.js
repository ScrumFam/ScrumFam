const userController = require('../../../../server/controllers/userController')

/** functional requirements: 
 * username is unqiue
 * password is valid (num, upper, lower, len 8+)
 * required fields are present
 * user is added to the DB
 * user id is passed to the response object
 * */
const next = jest.fn()

describe('testing creating a new user', () => {

  beforeEach(() => {
    const req = {
      body,
      params,
    }
    const res = {
      locals
    }
  })
  
  
  it('test getUser valid', () => {
      
  })
})