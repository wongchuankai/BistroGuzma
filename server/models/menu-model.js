const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menu_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const menuModel = mongoose.model('menu', menuSchema, "menu");

module.exports = menuModel;