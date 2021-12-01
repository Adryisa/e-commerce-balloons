const Balloon = require('../models/balloon.model');
const {
  getAllBalloons,
  getBallonById,
  addBalloon,
} = require('./balloon.controller');

jest.mock('../models/balloon.model');

describe('Given the balloon controller', () => {
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
  describe('When the getAllBallons is called', () => {
    test('Then Balloon.find and res.json should be called', async () => {
      Balloon.find.mockResolvedValue([]);

      await getAllBalloons(req, res, next);

      expect(Balloon.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the getAllBalloons is called wit ha rejected value', () => {
    test('Then res.next should be called', async () => {
      Balloon.find.mockRejectedValue();

      await getAllBalloons(req, res, next);

      expect(Balloon.find).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the getBallonById is called', () => {
    test('Then Balloon.findById and res.json should be called', async () => {
      Balloon.findById.mockResolvedValue([]);

      await getBallonById(req, res, next);

      expect(Balloon.findById).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the getBallonById is called wit ha rejected value', () => {
    test('Then res.next should be called', async () => {
      Balloon.findById.mockRejectedValue();

      await getBallonById(req, res, next);

      expect(Balloon.findById).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
  //   describe('When the addBallon is called', () => {
  //     test('Then Balloon.create and res.json should be called', async () => {
  //       const balloon = req.body;
  //       Balloon.find = jest.fn({
  //         model_num: balloon.model_num,
  //         type: 'Standard',
  //       });
  //       Balloon.create.mockResolvedValue({});

  //       await addBalloon(req, res, next);

  //       expect(Balloon.create).toHaveBeenCalled();
  //     });
  //   });
});
