import React from "react";
import Style from "./CarCardCol.module.scss";

const CarCardCol = ({text1,text2}) => {
  return (
    <span className={Style.col}>
      <span className={Style.text1}>{text1}</span>
      <span className={Style.text2}>{text2}</span>
    </span>
  );
};

export default CarCardCol;
