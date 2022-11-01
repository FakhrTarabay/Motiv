import React from "react";
import { Divider } from "@mui/material";
import Style from "./Account.module.scss";
const Account = () => {
  function HandleClick() {
    return 0;
  }
  return (
    <>
      <span className={Style.text1}>Account</span>
      <span className={Style.text2}>Update your email and password here.</span>
      <Divider sx={{ background: "#323745" }} />
      <div className={Style.Row2}>
        <div className={Style.col}>
          <span className={Style.text}>Email</span>
          <div className={Style.begin}>
            <input
              className={Style.searchBar}
              type={"text"}
              placeholder="..."
            ></input>
          </div>
        </div>{" "}
        <div className={Style.col}>
          <span className={Style.text}>Password</span>
          <div className={Style.begin}>
            <input
              className={Style.searchBar}
              type={"password"}
              placeholder="p@ssw0rd"
            ></input>
          </div>
        </div>
        <button onClick={HandleClick} className={Style.btn}>
          <span className={Style.text3}>Update</span>
        </button>
      </div>
    </>
  );
};

export default Account;
