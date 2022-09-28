import React from "react";
import Style from "./Auth.module.scss";
import Title from "./Title/Title";
import SocialBtns from "./SocialBtns/SocialBtns";
import DividerX from "./Divider/Divider";
import Form from "./Form/Form";

const SignIn = () => {
  return (
    <div className={Style.App}>
      <div className={Style.div}>
        <Title
          text="Sign in"
          title="Get's started"
          question="Already have an account"
          link = "/"
        />
        <SocialBtns />
        <DividerX />
        <Form isUp={false} link="/Dashboard"/>
      </div>
    </div>
  );
};

export default SignIn;