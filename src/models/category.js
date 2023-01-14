const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("./plugins");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageURL: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


categorySchema.index(
  { name: "text", description: "text" },
  { collation: { locale: "en", strength: 2 } }
);

categorySchema.index(
  { name: 1 },
  { unique: true, partialFilterExpression: { deletedAt: { $eq: null } } }
);

categorySchema.statics.isNameTaken = async function (
  name,
  excludecategoryId
) {
  const data = await this.findOne({ name, _id: { $ne: excludecategoryId } });
  return !!data;
};

categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);
module.exports = Category = mongoose.model("Category", categorySchema);
