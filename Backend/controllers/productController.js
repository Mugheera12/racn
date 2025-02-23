const handler = require("express-async-handler");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");

const addProduct = handler(async (req, res) => {
  // are we getting data from the frontend
  const user_id = req.user._id;
  const {
    product_name,
    product_description,
    product_base_price,
    product_stock,
    product_images,
    product_category,
  } = req.body;

  if (
    !product_name ||
    !product_description ||
    !product_base_price ||
    !product_stock ||
    !product_images ||
    !product_category
  ) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  //   add the datra into the database

  const createdProduct = await productModel.create({
    product_name,
    product_description,
    product_base_price,
    product_stock,
    product_images,
    product_category,
    user: user_id,
  });

  res.send(createdProduct);
});

const getAllProduct = handler(async (req, res) => {
  let allProducts = await productModel.find();
  res.send(allProducts);
});

const deleteAllProducts = async (req, res) => {
  try {
    await productModel.deleteMany({}); // Correct method
    res.send("All products deleted successfully");
  } catch (error) {
    res.status(500).json({ message: "Error deleting products", error });
  }
};

const addToCart = handler(async (req, res) => {
  const prod_id = req.params.prod_id;
  const user_id = req.user._id;
  const itemExist = await cartModel.findOne({ product_id: prod_id, user_id });

  if (itemExist) {
    itemExist.quantity += 1;
    await itemExist.save();
  } else {
    await cartModel.create({
      user_id: user_id,
      product_id: prod_id,
      quantity: 1,
    });
  }

  const findCart = await cartModel.find({ user_id });
  res.send(findCart);
});

// const removeFromCart = handler(async (req, res) => {
//   const prod_id = req.params.prod_id;
//   const user_id = req.user._id;
//   const itemExist = await cartModel.findOne({ product_id: prod_id, user_id });

//   if (itemExist) {
//     itemExist.quantity -= 1;
//     await itemExist.save();
//   } else {
//     res.status(400);
//     throw new Error('Invalid');
//   }

//   const findCart = await cartModel.find({ user_id });
//   res.send(findCart);
// });

const removeFromCart = handler(async (req, res) => {
  const prod_id = req.params.prod_id;
  const user_id = req.user._id;
  const itemExist = await cartModel.findOne({ product_id: prod_id, user_id });

  if (!itemExist) {
    res.status(400);
    throw new Error("Item not found in cart");
  }

  if (itemExist.quantity > 1) {
    itemExist.quantity -= 1;
    await itemExist.save();
  } else {
    await cartModel.deleteOne({ product_id: prod_id, user_id });
  }

  const updatedCart = await cartModel.find({ user_id });
  res.send(updatedCart);
});

const getMyCart = handler(async (req, res) => {
  let user_id = req.user._id;
  let myCart = await cartModel.find({ user_id });
  res.send(myCart);
});

const getDataCategories = handler(async (req, res) => {
  const { category_name } = req.body;
  const findRelevantProduct = await productModel.find({
    category: category_name,
  });
  res.send(findRelevantProduct);
});

module.exports = {
  addProduct,
  getAllProduct,
  addToCart,
  deleteAllProducts,
  getMyCart,
  removeFromCart,
  getDataCategories,
};
