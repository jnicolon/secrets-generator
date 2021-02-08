const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const secretSchema = new Schema(
  {
    design: {
      type: Object,
      required: true,
    },
    secret: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlenght:50
    },
  },
  {
    timestamps: true,
  }
);

const Secret = mongoose.model("Secret", secretSchema);

module.exports = Secret;
