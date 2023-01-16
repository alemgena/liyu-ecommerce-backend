const mongoose = require("mongoose");
const { paginate, toJSON } = require("./plugins");
const Double = require("@mongoosejs/double");

const productSchema = mongoose.Schema(
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
    imagesURL: [
      {
        type: String,
      },
    ],
    price: {
      type: mongoose.Schema.Types.Double,
      required: true,
      trim: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategory",
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    premium: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: "ACTIVE",
      enum: ["ACTIVE", "DRAFT", "DELETED", "SUSPENDED", "BLOCKED", "SOLD"],
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index(
  { name: "text", description: "text" },
  { collation: { locale: "en", strength: 2 } }
);

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

module.exports = Product = mongoose.model("Product", productSchema);
