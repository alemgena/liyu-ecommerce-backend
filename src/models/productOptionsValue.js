const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const optionValue = new mongoose.Schema(
  {
    option: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Option",
      required: true,
    },
    value: { type: String, required: true },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

optionValue.plugin(toJSON);
optionValue.plugin(paginate);
module.exports = OptionValue = mongoose.model("OptionValue", optionValue);
