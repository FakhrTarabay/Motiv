import React from "react";
import Divider from "@mui/material/Divider";
import css from './Divider.module.scss'
const DividerX = () => {
  return (
    <Divider
      sx={{
        width: "100%",
        "&::before, &::after": {
          borderColor: "#323745",
        },
      }}
    >
      <span className={css.dividerOr}>or</span>
    </Divider>
  );
};

export default DividerX;
