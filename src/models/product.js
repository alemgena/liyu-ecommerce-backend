const mongoose = require("mongoose");

// FIXME: for chooseing the right data models for product
// const { paginate } = require("./plugins");
// const Double = require("@mongoosejs/double");

// const productSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       minlength: 3,
//       trim: true,
//     },
//     description: {
//       type: String,
//       trim: true,
//     },
//     featured: {
//       type: Boolean,
//       default: false,
//     },
//     premium: {
//       type: Boolean,
//       default: false,
//     },
//     state: {
//       type: String,
//       default: "ACTIVE",
//       enum: ["ACTIVE", "DRAFT", "DELETED", "SUSPENDED", "BLOCKED", "SOLD"],
//     },
//     price: {
//       type: Double,
//     },
//     allergies: [
//       {
//         type: String,
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// productSchema.index(
//   { name: "text", description: "text" },
//   { collation: { locale: "en", strength: 2 } }
// );

// productSchema.plugin(paginate);

const validator = require("validator");
const { toJSON, paginate } = require("./plugins");

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
    imagesUri: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
    },
    featured: {
      type: Boolean,
    },
    premium: {
      type: Boolean,
    },
    countInStock: {
      type: Number,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      default: "ACTIVE",
      enum: ["ACTIVE", "INACTIVE", "OUTOFSTOCK"],
    },
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

module.exports = Product = mongoose.model("Product", productSchema);
