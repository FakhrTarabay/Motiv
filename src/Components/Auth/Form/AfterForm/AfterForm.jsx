import React from "react";
import Style from "./AfterForm.module.scss";
import Checkbox from "@mui/material/Checkbox";

const AfterForm = () => {
  return (
    <div className={Style.afterForm}>
      <div className={Style.rem}>
        <Checkbox
          id="remember"
          sx={{
            color: "#7C7C8D",
            "&.Mui-checked": {
              color: "#7C7C8D",
            },
          }}
        />
        <label htmlFor="remember">Remember me</label>
      </div>
      <a href="#temp">Forgot your password?</a>
    </div>
  );
};

export default AfterForm;
