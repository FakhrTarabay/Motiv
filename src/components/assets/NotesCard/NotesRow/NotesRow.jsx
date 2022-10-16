import React from "react";
import Style from "./NotesRow.module.scss";

const NotesRow = ({imgSrc,text1,text2}) => {
  return (
    <span className={Style.row}>
      <img alt="ico" src={imgSrc} />
      <span className={Style.col}>
        <span className={Style.text1}>{text1}</span>
        <span className={Style.text2}>{text2}</span>
      </span>
    </span>
  );
};

export default NotesRow;
