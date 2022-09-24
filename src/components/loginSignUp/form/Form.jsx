import React from "react";
import css from "./Form.module.css";
import Input from "./input/Input";
import AfterForm from "./afterForm/AfterForm";

const Form = ({ isUp }) => {
  return (
    <form
      className={css.formDiv}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input isUp={isUp} />
      <AfterForm />
      <button className={css.sub} type={"submit"}>
        {isUp ? "Sign up" : "Sign in"}
      </button>
    </form>
  );
};

export default Form;
