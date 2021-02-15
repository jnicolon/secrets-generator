const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const secretSchema = new Schema(
  {
    secret: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlenght: 50,
    },
    userName: {
      type: String,
      required: false,
      trim: true,
      minlength: 3,
      maxlenght: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Secret = mongoose.model("Secret", secretSchema);

module.exports = Secret;
