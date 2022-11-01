import React from "react";
import Style from "./Auth.module.scss";
import Title from "./Title/Title";
import SocialBtns from "./SocialBtns/SocialBtns";
import DividerX from "./Divider/Divider";
import Form from "./Form/Form";
// import axios from "axios";
const SignUp = () => {
  // const data = {
  //   "username": "asd@new.com",
  //   "firstName": "hessslmy",
  //   "lastName": "helmoz",
  //   "password": ""
  // }

  // async function handleSignUp() {
  //   try {
  //     console.log(data)
  //     const res = await axios({
  //       method:"post",
  //       url: "http://192.168.11.42:9000/signup",
  //       data: data
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div className={Style.App}>
      <div className={Style.div}>
        <Title
          text="Sign in"
          title="Get's started"
          question="Already have an account"
          link="/Login"
        />
        <SocialBtns/>
        <DividerX />
        <Form isUp={true} link="/Login" />
      </div>
    </div>
  );
};

export default SignUp;
