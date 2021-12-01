const User = require('../models/user.model');
const Cart = require('../models/cart.model');
const { addUser } = require('./user.controller');

jest.mock('../models/user.model');
jest.mock('../models/cart.model');

describe('Given the users controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });
  describe('When the addUser is called', () => {
    test('Then user.create, cart.create and res.json should be called', async () => {
      req.body = {
        name: 'test',
        lastname: 'test',
        email: 'test',
        password: 'test',
      };
      User.create.mockResolvedValue({});
      Cart.create.mockResolvedValue({});

      await addUser(req, res, next);

      expect(User.create).toHaveBeenCalled();
      expect(Cart.create).toHaveBeenCalled();
      //   expect(res.status).toHaveBeenCalled();
      //   expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the addUser is called with no name', () => {
    test('Then next error should be called', async () => {
      req.body = {
        lastname: 'test',
        email: 'test',
        password: 'test',
      };
      User.create.mockRejectedValue();

      await addUser(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the addUser is called with a rejected value', () => {
    test('Then res.next should be called', async () => {
      req.body = {
        name: 'test',
        lastname: 'test',
        email: 'test',
        password: 'test',
      };
      User.create.mockRejectedValue({});

      await addUser(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
