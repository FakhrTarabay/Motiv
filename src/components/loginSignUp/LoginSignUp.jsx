import React, { useState } from "react";
import css from "./LoginSignUp.module.css";
import Title from "./title/Title";
import SocialBtns from "./socialBtns/SocialBtns";
import DividerX from "./divider/Divider";
import Form from "./form/Form";

const LoginSignUp = () => {
  const [isUp, setIsuP] = useState(false);
  return (
    <div className={css.div}>
      <Title isUp={isUp}   setIsuP={setIsuP} />
      <SocialBtns isUp={isUp} />
      <DividerX />
      <Form isUp={isUp}/>
    </div>
  );
};

export default LoginSignUp;
