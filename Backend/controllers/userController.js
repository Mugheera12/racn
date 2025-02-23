const handler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = handler(async (req, res) => {
  // Get data from frontend
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // Check if email already exists
  const findUser = await userModel.findOne({ email });
  if (findUser) {
    res.status(401);
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPass = await bcrypt.hash(password, 10);

  // Add user to database
  const createdUser = await userModel.create({
    username,
    email,
    password: hashedPass,
  });

  res.send({
    _id: createdUser._id,
    username: createdUser.username,
    email: createdUser.email,
    token: generateToken(createdUser._id),
  });
});

const loginUser = handler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    res.status(404);
    throw new Error("Invalid email");
  }

  const isPasswordValid = await bcrypt.compare(password, findUser.password);
  if (!isPasswordValid) {
    res.status(401);
    throw new Error("Invalid password");
  }

  res.send({
    _id: findUser._id,
    username: findUser.username,
    email: findUser.email,
    token: generateToken(findUser._id),
  });
});

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
