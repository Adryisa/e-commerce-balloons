const Balloon = require('../models/balloon.model');
const { getAllBalloons } = require('./balloon.controller');

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
});
