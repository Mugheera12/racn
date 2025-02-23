import { FormGroup, TextField, Typography } from "@mui/material";
import { Input } from "reactstrap";
import React from "react";
import TextEditor from "./TextEditor";

const ProductInformation = ({
  product_name,
  product_description,
  product_category,
  handleChange,
  formFields,
  setFormFields,
}) => {
  return (
    <>
      <div className="card shadow border-0 p-3">
        <Typography variant="h6">Product Information</Typography>
        <TextField
          value={product_name}
          onChange={handleChange}
          placeholder="iPhone14"
          variant="outlined"
          className="my-2"
          label="Product Name"
          name="product_name"
          sx={{
            "& label": {
              // color: "#8C57FF", // Label color
            },
            "& label.Mui-focused": {
              color: "#8C57FF", // Label color when focused
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                //   borderColor: "#8C57FF", // Default border color
              },
              "&:hover fieldset": {
                //   borderColor: "#8C57FF", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#8C57FF", // Border color when focused
              },
            },
          }}
        />
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <Input
            type="select"
            name="product_category"
            value={product_category}
            onChange={handleChange}
          >
            <option value="deals">deals</option>
            <option value="burger">burger</option>
            <option value="pizza">pizza</option>
            <option value="bites">bites</option>
            <option value="fries">fries</option>
          </Input>
        </FormGroup>
        {/* <div className="row">
          <div className="col-sm-6">
            <TextField
              placeholder="FX123SKU"
              variant="outlined"
              className="my-2 w-100"
              label="SKU"
              name="product_sku"
              sx={{
                "& label": {
                  // color: "#8C57FF", // Label color
                },
                "& label.Mui-focused": {
                  color: "#8C57FF", // Label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    //   borderColor: "#8C57FF", // Default border color
                  },
                  "&:hover fieldset": {
                    //   borderColor: "#8C57FF", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8C57FF", // Border color when focused
                  },
                },
              }}
            />
          </div>
          <div className="col-sm-6">
            <TextField
              placeholder="0123-45678"
              variant="outlined"
              className="my-2 w-100"
              label="Barcode"
              name="product_barcode"
              sx={{
                "& label": {
                  // color: "#8C57FF", // Label color
                },
                "& label.Mui-focused": {
                  color: "#8C57FF", // Label color when focused
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    //   borderColor: "#8C57FF", // Default border color
                  },
                  "&:hover fieldset": {
                    //   borderColor: "#8C57FF", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#8C57FF", // Border color when focused
                  },
                },
              }}
            />
          </div>
        </div> */}
        <Typography variant="p" className="text-gray my-2">
          Description (Optional)
        </Typography>
        {/* <TextEditor product_description={product_description} handleChange={handleChange}/> */}
        <TextEditor
          formFields={formFields}
          setFormFields={setFormFields}
          product_description={product_description}
          // handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default ProductInformation;
