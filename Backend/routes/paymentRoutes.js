const express = require("express")
const payment = require("../controllers/paymentController");
const { model } = require("mongoose");
const paymentRouter = express.Router();

paymentRouter.post("/checkout",payment);

module.exports=paymentRouter;