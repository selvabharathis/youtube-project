import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 1,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 8,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
