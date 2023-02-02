const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const productOption = new mongoose.Schema(
  {
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategory",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

productOption.plugin(toJSON);
productOption.plugin(paginate);
module.exports = ProductOption = mongoose.model("ProductOption", productOption);
