const express = require('express');
const {
  getCartById,
  addBalloonToCart,
  deleteBalloonCart,
} = require('../controller/cart.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router
  .route('/:cartId/balloon/:balloonId')
  .post(auth, addBalloonToCart)
  .delete(auth, deleteBalloonCart);

router.route('/:id').get(getCartById);

module.exports = router;
