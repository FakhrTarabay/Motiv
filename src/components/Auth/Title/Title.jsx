import React from "react";
import css from "./Title.module.scss";

const Title = ({ isUp, setIsuP }) => {
  return (
    <div className={css.title}>
      <h1>Get's started.</h1>
      {isUp ? (
        <span className={css.reg}>
          Already have an account?
          <span className={css.med}>
            <a href="#temp" className={css.a} onClick={() => setIsuP(!isUp)}>
              {" "}
              Sign in
            </a>
          </span>
        </span>
      ) : (
        <span className={css.reg}>
          Don't have an account?
          <span className={css.med}>
            <a href="#temp" className={css.a} onClick={() => setIsuP(!isUp)}>
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
