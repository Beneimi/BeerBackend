const { strict } = require('assert');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: { type: String, required: true },
  type: {type: String, required:true},
  brewery: {type: String, required:true},
  abv: {type: Number, required:true},
  description: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;