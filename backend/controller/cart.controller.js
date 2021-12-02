/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const Cart = require('../models/cart.model');
const Balloon = require('../models/balloon.model');

async function getCartById(req, res, next) {
  const cartId = req.params.id;

  try {
    const cart = await Cart.findById(cartId).populate({
      path: 'balloons',
      populate: {
        path: 'balloonId',
        select: [
          'model_num',
          'type',
          'size',
          'color',
          'img_url',
          'price',
          'package',
        ],
      },
    });
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
}

async function addBalloonToCart(req, res, next) {
  try {
    const { balloonId, cartId } = req.params;

    const balloon = await Balloon.findById(balloonId);
    const cart = await Cart.findById(cartId);

    cart.balloons = [
      ...cart.balloons,
      {
        balloonId: balloon._id,
        amount: 1,
      },
    ];

    cart.save();

    res.status(201).json(cart);
  } catch (err) {
    next(err);
  }
}

async function updateBalloonAmountCart(req, res, next) {
  try {
    const { balloonId, cartId } = req.params;

    const balloon = await Balloon.findById(balloonId);
    const cart = await Cart.findById(cartId);
    cart.balloons = cart.balloons.map((item) => {
      if (item.balloonId.toString() === balloon._id.toString()) {
        item.amount += 1;
        return item;
      }
      return item;
    });

    cart.save();

    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
}

async function deleteBalloonCart(req, res, next) {
  try {
    const { balloonId, cartId } = req.params;

    const balloon = await Balloon.findById(balloonId);
    const cart = await Cart.findById(cartId);

    cart.balloons = cart.balloons.filter(
      (item) => item.balloonId.toString() !== balloon._id.toString()
    );

    cart.save();

    res.status(204).json(cart);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  getCartById,
  addBalloonToCart,
  updateBalloonAmountCart,
  deleteBalloonCart,
};
