import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import ProductInformation from "./add-products/ProductInformation";
import ProductPricing from "./add-products/ProductPricing";
import Image from "./add-products/Image";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductData,
  productReset,
} from "../../features/products/productSlice";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const ProductSection = ({ onModeChange, darkMode }) => {
  const [formFields, setFormFields] = useState({
    product_name: "",
    product_category: "",
    product_description: "",
    product_base_price: "",
    product_stock: true,
    product_images: [],
  });

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { productError, productSuccess, productLoading, productMessage } =
    useSelector((state) => state.items);

  useEffect(() => {
    if (productError) {
      toast.error(productMessage);
    }

    if (productSuccess) {
      toast.success("Product Uploaded", {
        icon: "📦",
      });
    }

    dispatch(productReset());
  }, [productError, productSuccess, dispatch]);

  const publishProduct = () => {
    if (!user || !user._id) {
      toast.error("User not authenticated");
      return;
    }

    const productData = {
      ...formFields,
      user: user._id,
    };

    dispatch(addProductData(productData));
  };

  return (
    <>
      <div className="d-flex justify-content-between add-new align-items-center p-4">
        <div className="d-flex flex-column">
          <Typography variant="h5">Add a new product</Typography>
          <Typography className="text-white" variant="p">
            Orders placed across your store
          </Typography>
        </div>
        <div className="d-flex add-btn gap-2">
          <Button
            className="fw-semibold text-capitalize"
            style={{ color: "#8A8D93", border: "1px solid #8A8D93" }}
            variant="outlined"
          >
            Discard
          </Button>
          <Button
            className={`fw-semibold text-capitalize ${
              productLoading ? "bg-secondary" : "bg-purple"
            }`}
            style={{ color: "#7E4EE5", border: "1px solid #7E4EE5" }}
            variant="outlined"
          >
            Save Draft
          </Button>
          <Button
            disabled={productLoading}
            onClick={publishProduct}
            className="fw-semibold text-capitalize"
            style={{ color: "white", background: " #7E4EE5" }}
            variant="contained"
          >
            {productLoading ? <ClipLoader /> : "Publish Product"}
          </Button>
        </div>
      </div>
      <div className="p-4 row">
        <div className="col-md-8">
          <ProductInformation
            formFields={formFields}
            setFormFields={setFormFields}
            handleChange={handleChange}
          />
        </div>
        <div className="col-md-4 my-4">
          <ProductPricing
            {...formFields}
            setFormFields={setFormFields}
            handleChange={handleChange}
          />
        </div>
        <div className="col-md-8 my-4">
          <Image
            {...formFields}
            setFormFields={setFormFields}
            handleChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
