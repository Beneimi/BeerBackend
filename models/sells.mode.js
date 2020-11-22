const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sellsSchema = new Schema({
  beerId: { type: mongoose.SchemaTypes.ObjectId, required: true },
  pubId: { type: mongoose.SchemaTypes.ObjectId, required: true }
});

const Sells = mongoose.model('Sells', sellsSchema);

module.exports = Sells;