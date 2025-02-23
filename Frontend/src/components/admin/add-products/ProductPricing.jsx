import React from "react";
import { Checkbox, TextField, Typography } from "@mui/material";
import StockSwitch from "./StockSwitch";
const ProductPricing = ({
  product_base_price,
  product_stock,
  handleChange,
}) => {
  return (
    <>
      <div className="card border-0 p-3 shadow">
        <Typography variant="h6">Pricing</Typography>
        <TextField
          placeholder="Enter Base Price"
          variant="outlined"
          className="my-2 w-100"
          label="Base Price"
          name="product_base_price"
          value={product_base_price}
          onChange={handleChange}
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

        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <Typography>In Stock</Typography>
          <StockSwitch product_stock={product_stock} onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default ProductPricing;
