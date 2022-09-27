import React, { useState } from "react";
import css from "./Card.module.scss";
const Card = ({ children, color, maxH, bgColor, aItems, maxW, jusC, grow, pad, gap, bShadow }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={css.Card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
