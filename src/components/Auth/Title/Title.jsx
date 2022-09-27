import React from "react";
import Style from "./Title.module.scss";

const Title = ({ isUp, setIsuP }) => {
  return (
    <div className={Style.title}>
      <h1>Get's started.</h1>
      {isUp ? (
        <span className={Style.reg}>
          Already have an account?
          <span className={Style.med}>
            <a href="#temp" className={Style.a} onClick={() => setIsuP(!isUp)}>
              {" "}
              Sign in
            </a>
          </span>
        </span>
      ) : (
        <span className={Style.reg}>
          Don't have an account?
          <span className={Style.med}>
            <a href="#temp" className={Style.a} onClick={() => setIsuP(!isUp)}>
              {" "}
              Sign up
            </a>
          </span>
        </span>
      )}
    </div>
  );
};

export default Title;
