const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const productImageSchema = new mongoose.Schema(
  {
    imageUri: {
      type: String,
    },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  },
  {
    timestamps: true,
  }
);
productImageSchema.plugin(toJSON);
productImageSchema.plugin(paginate);
module.exports = Product = mongoose.model("productImages", productImageSchema);
