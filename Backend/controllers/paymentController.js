const stripe = require("stripe")(
  "sk_test_51QuIFrBiZAY8XDEoV4i2omwTykEg8F6GPOTGTiU5l9HxeAXcbE5ExzQpDNVug7Z0nd2twDmb58HCKLfnEYdmkfp800kVTI3nvN"
);

const productModel = require("../models/productModel");

const handler = require("express-async-handler");

const payment = handler(async (req, res) => {
  const { products } = req.body;
  let myItems = await Promise.all(
    products.map(async (item) => {
      let myProduct = await productModel.findOne({ _id: item.product_id });

      return {
        price_data: {
          currency: "USD",
          product_data: {
            name: myProduct.product_name,
            images: myProduct.product_iamges,
          },
          unit_amount: myProduct.product_base_price * 100,
        },
        quantity: item.quantity,
      };
    })
  );

  // stripe session

  const stripeSession = await stripe.checkout.sessions.create({
    line_items: myItems,
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });
  res.send(JSON.stringify(stripeSession));
});

module.exports = payment;
