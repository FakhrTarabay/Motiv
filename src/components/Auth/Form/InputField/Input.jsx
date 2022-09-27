import React from "react";
import css from "./Input.module.scss";

const Input = ({ isUp }) => {
  return (
    <div className={css.bg}>
      {isUp && (
        <>
          <label htmlFor="fName">First Name</label>
          <input id="fName" type="text" required></input>
          <label htmlFor="lName">Last Name</label>
          <input id="lName" type="text" required></input>
        </>
      )}
      <label htmlFor="email">Email</label>
      <input id="email" type="email" required></input>
      <label htmlFor="pass">Password</label>
      <input id="pass" type="password" required></input>
    </div>
  );
};

export default Input;
