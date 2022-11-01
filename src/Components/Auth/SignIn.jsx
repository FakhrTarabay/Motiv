import React, { useState } from "react";
import Style from "./Auth.module.scss";
import Title from "./Title/Title";
import SocialBtns from "./SocialBtns/SocialBtns";
import DividerX from "./Divider/Divider";
import Form from "./Form/Form";
import Notif from "../MUI/Snackbar";
const SignIn = () => {
  // eslint-disable-next-line
  const handleClick = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  return (
    <div className={Style.App}>
      <div className={Style.div}>
        <Title
          text="Sign up"
          title="Get's started"
          question="Don't have an account?"
          link="/"
        />
        <SocialBtns />
        <DividerX />
        <Form isUp={false} link="/Dashboard" />
      </div>
      <Notif open={open}  setOpen={setOpen} msg={"hello"}/>
    </div>
  );
};

export default SignIn;
