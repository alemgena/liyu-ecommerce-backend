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
      type: Double,
      required: true,
      trim: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      required: true,
    },
    options: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductOption",
          required: true,
        },
        values: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OptionValue",
            required: true,
          },
        ],
      },
    ],
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
    toJSON: { virtuals: true },
  }
);

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

// productSchema.virtual("variants", {
//   ref: "ProductVariant",
//   localField: "_id",
//   foreignField: "product",
//   match: { deleted: false },
// });
const Product = mongoose.model("Product", productSchema);

Product.collection.createIndex(
  { name: "text", description: "text" },
  { collation: { locale: "en", strength: 2 } }
);

module.exports = Product;
