const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_base_price: {
      type: Number,
      required: true,
    },
    product_stock: {
      type: Boolean,
      required: true,
      default: true,
    },
    product_images: {
      type: Array,
      required: true,
      default: [],
    },
    product_category:{
      type : String,
      default:'burger',
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
