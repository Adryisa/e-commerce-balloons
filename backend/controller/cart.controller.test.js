const Cart = require('../models/cart.model');
const Balloon = require('../models/balloon.model');
const {
  getCartById,
  addBalloonToCart,
  deleteBalloonCart,
} = require('./cart.controller');

jest.mock('../models/cart.model');
jest.mock('../models/balloon.model');

describe('Given the cart controller', () => {
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
  describe('When the getCartById is called', () => {
    test('Then the cart.findById and res.json should have been called', async () => {
      Cart.findById.mockReturnValue({
        populate: jest.fn(),
      });

      await getCartById(req, res, next);

      expect(Cart.findById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the getCartById is called with a rejected value', () => {
    test('Then the res.next should have been called', async () => {
      Cart.findById.mockReturnValue({
        populate: () => Promise.reject(),
      });

      await getCartById(req, res, next);

      expect(Cart.findById).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the addBalloonToCart is called', () => {
    test('Then Balloon.findById, Cart.findById and res.json should be called', async () => {
      Balloon.findById.mockResolvedValue({
        _id: 'test',
        model_num: 'test',
        type: 'test',
        size: 'test',
        color: 'test',
        img_url: 'test',
        price: 1,
        package: 'test',
      });
      Cart.findById.mockResolvedValue({
        balloons: [
          {
            balloonId: 'test',
          },
          {
            balloonId: 'holi',
          },
        ],
        user: 'test',
        save: jest.fn(),
      });

      await addBalloonToCart(req, res, next);

      expect(Balloon.findById).toHaveBeenCalled();
      expect(Cart.findById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the addBalloonToCart is called with a rejected value', () => {
    test('Then next is called', async () => {
      Cart.findById.mockRejectedValue();

      await addBalloonToCart(req, res, next);

      expect(Balloon.findById).toHaveBeenCalled();
      expect(Cart.findById).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the deleteBalloonCart is called', () => {
    test('Then Balloon.findById, Cart.findById and res.json should be called', async () => {
      Balloon.findById.mockResolvedValue({
        _id: 'test',
        model_num: 'test',
        type: 'test',
        size: 'test',
        color: 'test',
        img_url: 'test',
        price: 1,
        package: 'test',
      });
      Cart.findById.mockResolvedValue({
        balloons: [
          {
            balloonId: 'test',
            amount: 1,
          },
          {
            balloonId: 'testaaar',
            amount: 3,
          },
        ],
        user: 'test',
        save: jest.fn(),
      });

      await deleteBalloonCart(req, res, next);

      expect(Balloon.findById).toHaveBeenCalled();
      expect(Cart.findById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the deleteBalloonCart is called with a rejected value', () => {
    test('Then the next should be called', async () => {
      Balloon.findById.mockRejectedValue();

      await deleteBalloonCart(req, res, next);

      expect(Balloon.findById).toHaveBeenCalled();
      expect(Cart.findById).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
});
