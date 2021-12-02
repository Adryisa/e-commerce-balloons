const Cart = require('../models/cart.model');
const Ballon = require('../models/balloon.model');

async function getCartById(req, res, next) {
  const { cartId } = req.params;

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
