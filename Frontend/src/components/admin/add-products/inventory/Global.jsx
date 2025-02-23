import { Radio, TextField, Typography } from "@mui/material";
import React from "react";

const Global = () => {
  return (
    <>
      <Typography className="text-secondary">Global Delivery</Typography>
      <div className="d-flex my-2">
        <Radio />
        <div className="d-flex flex-column mt-2">
          <Typography>Worldwide delivery</Typography>
          <Typography className="text-sm text-secondary">
            Only available with Shipping method: Fulfilled by Company name
          </Typography>
        </div>
      </div>
      <div className="d-flex">
        <Radio />
        <div className="d-flex flex-column mt-2">
          <Typography>Selected Countries</Typography>
          <Typography className="text-sm text-secondary">
            <TextField size="small" placeholder="USA" label="USA" />
          </Typography>
        </div>
      </div>
      <div className="d-flex my-2">
        <Radio />
        <div className="d-flex flex-column mt-2">
          <Typography>Local delivery</Typography>
          <Typography className="text-sm text-secondary">
            Deliver to your company of residence Change profile views
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Global;
