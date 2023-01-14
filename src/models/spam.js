const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("./plugins");

const spamSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },

    reporterId: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
      },
  
  },
  {
    timestamps: true,
  }
);

spamSchema.plugin(toJSON);
spamSchema.plugin(paginate);
module.exports = Category = mongoose.model("Spam", spamSchema);
