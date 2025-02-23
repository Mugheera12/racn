import { Checkbox, TextField, Typography } from "@mui/material";
import React from "react";

const Attributes = () => {
  return (
    <>
      <Typography className="text-secondary">Arributes</Typography>
      <div className="d-flex my-2">
        <Checkbox />
        <Typography>Fragile Product</Typography>
      </div>
      <div className="d-flex my-2">
        <Checkbox />
        <Typography>BioDegradabled</Typography>
      </div>
      <div className="d-flex my-2">
        <Checkbox />
        <div className="">
          <Typography>Frozen Product</Typography>
          <TextField size="small" label="40C" />
        </div>
      </div>
      <div className="d-flex my-2">
        <Checkbox />
        <div className="">
          <Typography>Expiry Date of Product</Typography>
          <TextField size="small" label="MM/DD/YYYY" />
        </div>
      </div>
    </>
  );
};

export default Attributes;
