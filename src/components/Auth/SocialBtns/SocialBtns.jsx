import React from "react";
import css from "./SocialBtns.module.scss";
import LogoG from "../../svg/LogoG.svg";
import LogoFB from "../../svg/LogoFB.svg";


const SocialBtns = () => {
  return (
    <div className={css.btns}>
      <button className={css.google}>
        <img src={LogoG} alt="google logo" />
        <span>Sign in with google</span>
      </button>
      <button className={css.fb}>
        <img src={LogoFB} alt="google logo" />
        <span>Sign in with Facebook</span>
      </button>
    </div>
  );
};

export default SocialBtns;
