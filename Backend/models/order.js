var mongoose = require('mongoose')
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const productCartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const ProductCart = mongoose.model("ProductCart", productCartSchema);

const OrderSchema = new Schema({
  products: [ProductCart],
  transactionId: {},
  amount: { type: Number },
  address: String,
  user: {
    type: ObjectId,
    ref: "User",
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { ProductCart, Order };
