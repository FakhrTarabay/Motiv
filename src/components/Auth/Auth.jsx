import React, { useState } from "react";
import css from "./Auth.module.scss";
import Title from "./Title/Title";
import SocialBtns from "./SocialBtns/SocialBtns";
import DividerX from "./Divider/Divider";
import Form from "./Form/Form";

const Auth = () => {
  const [isUp, setIsuP] = useState(false);
  return (
    <div className={css.App}>
      <div className={css.div}>
        <Title isUp={isUp} setIsuP={setIsuP} />
        <SocialBtns isUp={isUp} />
        <DividerX />
        <Form isUp={isUp} />
      </div>
    </div>
  );
};

export default Auth;
