const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const secretSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    secret: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Secret = mongoose.model("Secret", secretSchema);

module.exports = Secret;
