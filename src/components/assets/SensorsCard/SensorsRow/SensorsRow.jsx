import React from "react";
import Style from "./SensorsRow.module.scss";
import Checkbox from "@mui/material/Checkbox";

const SensorsRow = ({ setconds, conds, imgSrc, text }) => {
  return (
    <span className={Style.row}>
      <span>
        <Checkbox
          onChange={() => setconds({ ...conds, ten: !conds.ten })}
          sx={{
            color: "#FF6370",
            "&.Mui-checked": {
              color: "#FF6370",
            },
          }}
        />
        <span
          className={Style.text}
          style={conds.ten ? { color: "#FF6370" } : {}}
        >
          {text}
        </span>
      </span>
      <img
        alt="ico"
        src={imgSrc}
        style={
          conds.ten
            ? {
                filter:
                  "invert(51%) sepia(88%) saturate(2008%) hue-rotate(319deg) brightness(104%) contrast(101%)",
              }
            : {}
        }
      />
    </span>
  );
};

export default SensorsRow;
