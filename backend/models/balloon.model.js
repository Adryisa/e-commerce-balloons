const mongoose = require('mongoose');

const balloonSchema = new mongoose.Schema({
  model_num: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    require: true,
  },
  type_img_url: {
    type: String,
    require: false,
  },
  size: {
    type: String,
    enum: ['13cm', '26cm', '30cm', '48cm', '80cm', '100cm'],
    default: '13cm',
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  img_url: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  package: {
    type: String,
    enum: ['50 und', '100 und', '150 und'],
    default: '50und',
    require: true,
  },
});

const Balloon = mongoose.model('Balloon', balloonSchema);

module.exports = Balloon;
