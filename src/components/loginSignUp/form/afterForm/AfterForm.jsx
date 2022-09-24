import React from "react";
import css from "./AfterForm.module.css";
import Checkbox from "@mui/material/Checkbox";

const AfterForm = () => {
  return (
    <div className={css.afterForm}>
      <div className={css.rem}>
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
