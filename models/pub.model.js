const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pubSchema = new Schema({
  address: { type: String, required: true },
  rating: { type: Number, required: true },
  open: { type: Number, required: false },
  close: { type: Number, required: false }
});

const Pub = mongoose.model('Pub', pubSchema);

module.exports = Pub;