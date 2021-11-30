const Balloon = require('../models/balloon.model');

async function getAllBalloons(req, res, next) {
  try {
    const balloons = await Balloon.find({});
    res.status(200).json(balloons);
  } catch (err) {
    next(err);
  }
}
