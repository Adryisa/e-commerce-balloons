const express = require('express');
const {
  getAllBalloons,
  getBallonById,
} = require('../controller/balloon.controller');

const router = express.Router();

router.route('/').get(getAllBalloons);

router.route('/:id').get(getBallonById);

module.exports = router;
