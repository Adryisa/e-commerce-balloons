const Balloon = require('../models/balloon.model');

async function getAllBalloons(req, res, next) {
  try {
    const balloons = await Balloon.find({});
    res.status(200).json(balloons);
  } catch (err) {
    next(err);
  }
}

async function getBallonById(req, res, next) {
  try {
    const balloon = await Balloon.findById(req.params.id);
    res.status(200).json(balloon);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllBalloons,
  getBallonById,
};
