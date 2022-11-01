import React, { useState } from "react";
import Style from "./Card.module.scss";
const Card = ({ children, color, maxH, bgColor, aItems, maxW, jusC, grow, pad, gap, bShadow, type="column" }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={Style.Card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flexDirection:type,
        gap:gap,
        padding:pad,
        backgroundColor: hover ? color : bgColor,
        maxHeight: maxH,
        maxWidth: maxW,
        alignItems: aItems,
        justifyContent: jusC,
        flexGrow:grow,
        boxShadow:bShadow
      }}
    >
      {children}
    </div>
  );
};

export default Card;
