const Balloon = require('../models/balloon.model');

async function getAllBalloons({ query }, res, next) {
  try {
    const balloons = await Balloon.find(query);
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

async function addBalloon(req, res, next) {
  const balloon = req.body;
  if (Balloon.find({ model_num: balloon.model_num, type: balloon.type })) {
    next(new Error('Repetido'));
  }
  try {
    const newBalloon = await Balloon.create(balloon);
    res.status(201).json(newBalloon);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllBalloons,
  getBallonById,
  addBalloon,
};
