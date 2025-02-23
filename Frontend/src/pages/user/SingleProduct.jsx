import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCartData,
  getProductData,
} from "../../features/products/productSlice";
import Nav from "../../components/home/Nav";
import ChatBox from "./ChatBox";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const SingleProduct = () => {
  const [selectedDrink, setSelectedDrink] = useState("Mirinda");
  const { id } = useParams();

  const { products } = useSelector((state) => state.items);

  const myProduct = products?.find((item) => {
    return item?._id == id;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <>
      <Nav />
      <div
        className="container-fluid p-5 bg-purple"
        style={{ backgroundColor: "" }}
      >
        <Container
          className="p-5 text-white text-light rounded"
          style={{ backgroundColor: "black" }}
        >
          <div className="d-flex justify-content-end">
            <RxCross1 color="yellow" size={25} />
          </div>
          <Row>
            {/* Image Section */}
            <Col md={6}>
              <img
                src={myProduct?.product_images[0]}
                //   src="https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2Fcrown.webp&w=828&q=75"
                alt="Bronco Chicken Burger"
                className="img-fluid rounded"
                height={300}
              />
            </Col>

            {/* Info Section */}
            <Col md={6} className="d-flex flex-column justify-content-center">
              <h2 className="fw-bold text-warning">
                {myProduct?.product_name}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: myProduct?.product_description,
                }}
              ></div>

              <h3 className="fw-bold text-warning"></h3>
              <p>
                ⭐⭐⭐⭐ <span className="fw-bold">4.7k</span>
              </p>

              <h5 className="mt-3">Select Drink</h5>
              <div className="d-flex gap-3">
                {["Mirinda", "Dew", "Pepsi", "7up"].map((drink) => (
                  <Form.Check
                    key={drink}
                    type="radio"
                    label={drink}
                    name="drink"
                    checked={selectedDrink === drink}
                    onChange={() => setSelectedDrink(drink)}
                  />
                ))}
              </div>

              <Button
                onClick={() => dispatch(addCartData(myProduct?._id))}
                className="btn fw-bold text-black bg-orange mt-2 w-75"
                style={{
                  fontSize: "18px",
                }}
              >
                Add To Cart
              </Button>
              <ChatBox socket={socket} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleProduct;
