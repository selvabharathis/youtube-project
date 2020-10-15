var mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    maxlength: 32,
    required: true,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0,
  },
  photo: {
    type: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
