import React, { useEffect } from "react";
import useWindowSize from "./Size";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../features/products/productSlice";
import { Link } from "react-router-dom";

const Cards = () => {
  const dispatch = useDispatch();
  const { productLoading, products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const size = useWindowSize();

  return (
    <div className="container-fluid black">
      <div className="container p-3">
        <h4 className="text-white fs-3 fw-bold">Deals</h4>
        <div className="row">
          {products
            ?.filter((item) => item.product_category === "deals")
            .map((item, index) => (
              <div className="col-lg-4 col-6 mb-4" key={index}>
                <Link
                  to={`product/${item._id}`}
                  className="card my-2 border-0 bg-grey"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item?.product_images[0]}
                    alt=""
                    className="w-100 object-fit-cover"
                    // height={400}
                  />
                  <div className="px-3 p-2" style={{ height: "160px" }}>
                    <h5 className="fw-bold text-yellow">
                      {item?.product_name}
                    </h5>
                    <div
                      className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: item?.product_description,
                      }}
                    ></div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${
                        size < 1023 ? "flex-column" : "flex-row"
                      }`}
                    >
                      <h3 className="fw-bold text-yellow">
                        Rs.{item?.product_base_price}
                      </h3>
                      <button
                        className="btn bg-red text-white fw-bold px-3 p-2"
                        style={{ width: size < 1023 ? "100%" : "auto" }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <div className="container p-3">
        <h4 className="text-white fs-3 fw-bold">Chicken Burgers</h4>
        <div className="row">
          {products
            ?.filter((item) => item.product_category === "burger")
            .map((item, index) => (
              <div className="col-lg-4 col-6 mb-4" key={index}>
                <Link
                  to={`product/${item._id}`}
                  className="card my-2 border-0 bg-grey"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item?.product_images[0]}
                    alt=""
                    className="w-100 object-fit-cover"
                  />
                  <div className="px-3 p-2" style={{ height: "180px" }}>
                    <h5 className="fw-bold text-yellow">
                      {item?.product_name}
                    </h5>
                    <div
                      className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: item?.product_description,
                      }}
                    ></div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${
                        size < 1023 ? "flex-column" : "flex-row"
                      }`}
                    >
                      <h3 className="fw-bold text-yellow">
                        Rs.{item?.product_base_price}
                      </h3>
                      <button
                        className="btn bg-red text-white fw-bold px-3 p-2"
                        style={{ width: size < 1023 ? "100%" : "auto" }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <div className="container p-3">
        <h4 className="text-white fs-3 fw-bold">Pizza</h4>
        <div className="row">
          {products
            ?.filter((item) => item.product_category === "pizza")
            .map((item, index) => (
              <div className="col-lg-4 col-6 mb-4" key={index}>
                <Link
                  to={`product/${item._id}`}
                  className="card my-2 border-0 bg-grey"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item?.product_images[0]}
                    alt=""
                    className="w-100 object-fit-cover"
                  />
                  <div className="px-3 p-2">
                    <h5 className="fw-bold text-yellow">
                      {item?.product_name}
                    </h5>
                    <div
                      className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: item?.product_description,
                      }}
                    ></div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${
                        size < 1023 ? "flex-column" : "flex-row"
                      }`}
                    >
                      <h3 className="fw-bold text-yellow">
                        Rs.{item?.product_base_price}
                      </h3>
                      <button
                        className="btn bg-red text-white fw-bold px-3 p-2"
                        style={{ width: size < 1023 ? "100%" : "auto" }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <div className="container p-3">
        <h4 className="text-white fs-3 fw-bold">Quick Bites</h4>
        <div className="row">
          {products
            ?.filter((item) => item.product_category === "bites")
            .map((item, index) => (
              <div className="col-lg-4 col-6 mb-4" key={index}>
                <Link
                  to={`product/${item._id}`}
                  className="card my-2 border-0 bg-grey"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item?.product_images[0]}
                    alt=""
                    className="w-100 object-fit-cover"
                  />
                  <div className="px-3 p-2">
                    <h5 className="fw-bold text-yellow">
                      {item?.product_name}
                    </h5>
                    <div
                      className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: item?.product_description,
                      }}
                    ></div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${
                        size < 1023 ? "flex-column" : "flex-row"
                      }`}
                    >
                      <h3 className="fw-bold text-yellow">
                        Rs.{item?.product_base_price}
                      </h3>
                      <button
                        className="btn bg-red text-white fw-bold px-3 p-2"
                        style={{ width: size < 1023 ? "100%" : "auto" }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <div className="container p-3">
        <h4 className="text-white fs-3 fw-bold">fries</h4>
        <div className="row">
          {products
            ?.filter((item) => item.product_category === "fries")
            .map((item, index) => (
              <div className="col-lg-4 col-6 mb-4" key={index}>
                <Link
                  to={`product/${item._id}`}
                  className="card my-2 border-0 bg-grey"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item?.product_images[0]}
                    alt=""
                    className="w-100 object-fit-cover"
                  />
                  <div className="px-3 p-2">
                    <h5 className="fw-bold text-yellow">
                      {item?.product_name}
                    </h5>
                    <div
                      className="text-white"
                      dangerouslySetInnerHTML={{
                        __html: item?.product_description,
                      }}
                    ></div>
                    <div
                      className={`d-flex align-items-center justify-content-between ${
                        size < 1023 ? "flex-column" : "flex-row"
                      }`}
                    >
                      <h3 className="fw-bold text-yellow">
                        Rs.{item?.product_base_price}
                      </h3>
                      <button
                        className="btn bg-red text-white fw-bold px-3 p-2"
                        style={{ width: size < 1023 ? "100%" : "auto" }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
