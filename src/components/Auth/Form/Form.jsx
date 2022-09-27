import React from "react";
import css from "./Form.module.scss";
import Input from "./InputField/Input";
import AfterForm from "./AfterForm/AfterForm";

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
