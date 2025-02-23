import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/home/Login";
import Sign from "./components/home/Sign";
import Register from "./pages/admin/Register";
import { Toaster } from "react-hot-toast";
import AddProduct from "./pages/dashboard/AddProduct";
import SingleProduct from "./pages/user/SingleProduct";
import Cart from "./pages/user/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Toaster></Toaster>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin">
            <Route path="register" element={<Register />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
          <Route path="*" element="Not Found" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
