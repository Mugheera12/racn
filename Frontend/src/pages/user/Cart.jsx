import React, { useEffect } from "react";
import Nav from "../../components/home/Nav";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { addToCart } from "../../features/products/productService";
import {
  addCartData,
  getProductData,
  removeCartData,
} from "../../features/products/productSlice";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, products, cartLoading } = useSelector((state) => state.items);
  const calculateCost = () => {
    let sum = 0;
    cart?.map((item, index) => {
      let myProduct = products.find((item2, index2) => {
        return item2._id == item?.product_id;
      });
      let price = myProduct?.product_base_price * item.quantity;
      sum += price;
    });
    return sum;
  };
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const navigate = useNavigate();

  const handlePayment = async () => {
    let response = await axios.post(
      "http://localhost:3001/api/payment/checkout",
      {
        products: cart,
      }
    );
    window.location.assign(response.data.url);
  };

  return (
    <>
      <Nav />

      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>

        {cart?.map((item, index) => {
          let myProduct = products?.find((item2, index2) => {
            return item2?._id == item?.product_id;
          });
          return (
            <div key={index} className="cart-item">
              <img
                src={myProduct?.product_images[0]}
                alt=""
                className="cart-image"
              />
              <div className="cart-details">
                <h3 className="cart-product-title">
                  {myProduct?.product_name}
                </h3>
                <p className="cart-size">16 Inch</p>
                <p className="cart-price">
                  Rs.${myProduct?.product_base_price}{" "}
                </p>
                <p className="cart-qty">Qty:{item?.quantity}</p>
              </div>
              <div className="cart-actions">
                <IconButton
                  onClick={() => dispatch(removeCartData(myProduct?._id))}
                  className="qty-btn text-white"
                >
                  <FaMinus />
                </IconButton>
                <h6 className="qty-number">
                  {cartLoading ? (
                    <ClipLoader size={15} color="black" />
                  ) : (
                    <>{item?.quantity}</>
                  )}
                </h6>
                <IconButton
                  onClick={() => dispatch(addCartData(myProduct?._id))}
                  className="qty-btn text-white"
                >
                  <FaPlus />
                </IconButton>
                <FaTrash className="trash-icon" />
              </div>
            </div>
          );
        })}

        <button onClick={handlePayment} className="checkout-btn">
          Proceed To Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
