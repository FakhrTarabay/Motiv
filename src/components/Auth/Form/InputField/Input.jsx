import React,{useState} from "react";
import Style from "./Input.module.scss";

const Input = ({ isUp,setdata }) => {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [username, setusername] = useState("")
  const [pass, setpass] = useState("")
  return (
    <div className={Style.bg}>
      {isUp && (
        <>
          <label htmlFor="fName">First Name</label>
          <input id="fName" type="text" required value={firstName} onChange={(e) => setfirstName(e.target.value)}></input>
          <label htmlFor="lName">Last Name</label>
          <input id="lName" type="text" required value={lastName} onChange={(e) => setlastName(e.target.value)}></input>
        </>
      )}
      <label htmlFor="email">Email</label>
      <input id="email" type="email" required value={username} onChange={(e) => setusername(e.target.value)}></input>
      <label htmlFor="pass">Password</label>
      <input id="pass" type="password" required value={pass} onChange={(e) => setpass(e.target.value)}></input>
    </div>
  );
};

export default Input;
