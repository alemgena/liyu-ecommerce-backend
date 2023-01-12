const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const productOption =new mongoose.Schema(
  {
    subCategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategory",
    },
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
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

productOption.index(
  { name: 1 },
  { unique: true, partialFilterExpression: { deletedAt: { $eq: null } } }
);

productOption.plugin(toJSON);
productOption.plugin(paginate);
module.exports = ProductOption = mongoose.model("ProductOption", productOption);
