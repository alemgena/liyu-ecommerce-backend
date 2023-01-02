const mongoose = require("mongoose");
const { paginate } = require("./plugins");

const subCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    deletedAt: {
      type: Date,
    },
    imageURL: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

subCategorySchema.index(
  { name: "text", description: "text" },
  { collation: { locale: "en", strength: 2 } }
);

subCategorySchema.plugin(paginate);

module.exports = Subcategory = mongoose.model("Subcategory", subCategorySchema);
