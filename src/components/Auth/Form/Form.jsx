import React from "react";
import Style from "./Form.module.scss";
import Input from "./InputField/Input";
import AfterForm from "./AfterForm/AfterForm";

const Form = ({ isUp }) => {
  return (
    <form
      className={Style.formDiv}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input isUp={isUp} />
      <AfterForm />
      <button className={Style.sub} type={"submit"}>
        {isUp ? "Sign up" : "Sign in"}
      </button>
    </form>
  );
};

export default Form;
