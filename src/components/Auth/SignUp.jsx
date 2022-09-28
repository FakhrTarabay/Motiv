import React from "react";
import Style from "./Auth.module.scss";
import Title from "./Title/Title";
import SocialBtns from "./SocialBtns/SocialBtns";
import DividerX from "./Divider/Divider";
import Form from "./Form/Form";

const SignUp = () => {
  return (
    <div className={Style.App}>
      <div className={Style.div}>
        <Title
          text="Sign up"
          title="Get's started"
          question="Don't have an account?"
          link="/Login"
        />
        <SocialBtns />
        <DividerX />
        <Form isUp={true} link="/Login"/>
      </div>
    </div>
  );
};

export default SignUp;
