const express = require('express');
const {
  getCartById,
  addBalloonToCart,
  updateBalloonAmountCart,
  deleteBalloonCart,
} = require('../controller/cart.controller');
const auth = require('../middlewares/auth');
const router = express.Router();

router
  .route('/:cartId/balloon/:balloonId')
  .post(auth, addBalloonToCart)
  .patch(updateBalloonAmountCart)
  .delete(deleteBalloonCart);

router.route('/:id').get(getCartById);

module.exports = router;
