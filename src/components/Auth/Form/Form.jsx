import React,{useState} from "react";
import Style from "./Form.module.scss";
import Input from "./InputField/Input";
import AfterForm from "./AfterForm/AfterForm";
import {Navigate} from "react-router-dom";

const Form = ({ isUp,link,fun }) => {
  const [routing, setRouting] = useState(false)
  if(routing){
    return <Navigate push to={link} />
  }
  return (
    <form
      className={Style.formDiv}
      onSubmit={(e) => {
        e.preventDefault();
        fun();
        setRouting(true);
      }}
    >
      <Input isUp={isUp}/>
      <AfterForm />
      <button className={Style.sub} type={"submit"}>
        {isUp ? "Sign up" : "Sign in"}
      </button>
    </form>
  );
};

export default Form;
