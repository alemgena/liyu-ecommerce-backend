const mongoose = require("mongoose");
const { paginate, toJSON } = require("./plugins");
const Double = require("@mongoosejs/double");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
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
      autopopulate: { maxDepth: 1 },
    },
    options: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductOption",
          required: true,
          autopopulate: { maxDepth: 1 },
        },
        values: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OptionValue",
            required: true,
            autopopulate: { maxDepth: 1 },
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
    // collation: { locale: "en", strength: 2 },
  }
);

productSchema.plugin(require(`mongoose-autopopulate`));
productSchema.plugin(toJSON);
productSchema.plugin(paginate);
productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

const Product = mongoose.model("Product", productSchema);
Product.collection.createIndex({ name: "text" });

module.exports = Product;
