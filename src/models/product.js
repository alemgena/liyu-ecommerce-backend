const mongoose = require("mongoose");
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
