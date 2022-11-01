import React from "react";
import Style from "./Title.module.scss";
import {Link } from "react-router-dom";

const Title = ({title,text,question,link}) => {
  return (
    <div className={Style.title}>
      <h1>{title}</h1>
      <span className={Style.reg}>
        {question}
        <span className={Style.med}>
          <Link className={Style.a} to={link}>
            {" "}
            {text}
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Title;
