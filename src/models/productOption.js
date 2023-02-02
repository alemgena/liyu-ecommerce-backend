const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

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
productOption.virtual("values", {
  ref: "OptionValue",
  localField: "_id",
  foreignField: "option",
  match: { deletedAt: null },
  autopopulate: true,
});
productOption.plugin(require(`mongoose-autopopulate`));
productOption.plugin(mongooseLeanVirtuals);
productOption.set("toJSON", { virtuals: true });
productOption.set("toObject", { virtuals: true });
productOption.plugin(toJSON);
productOption.plugin(paginate);
module.exports = ProductOption = mongoose.model("ProductOption", productOption);
