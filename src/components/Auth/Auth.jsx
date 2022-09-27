import React, { useState } from "react";
import Style from "./Auth.module.scss";
import Title from "./Title/Title";
import SocialBtns from "./SocialBtns/SocialBtns";
import DividerX from "./Divider/Divider";
import Form from "./Form/Form";

const Auth = () => {
  const [isUp, setIsuP] = useState(false);
  return (
    <div className={Style.App}>
      <div className={Style.div}>
        <Title isUp={isUp} setIsuP={setIsuP} />
        <SocialBtns isUp={isUp} />
        <DividerX />
        <Form isUp={isUp} />
      </div>
    </div>
  );
};

export default Auth;
