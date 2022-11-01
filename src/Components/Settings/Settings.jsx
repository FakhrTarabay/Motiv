import React, { useState } from "react";
import Style from "./Settings.module.scss";
import Card from "../General/Card/Card";
import Profile from "./Profile/Profile";
import Account from "./Account/Account";

const Settings = () => {
  const [comp, setComp] = useState(<Profile/>)
  return (
    <div className={Style.SettingsDiv}>
      <Card jusC={"normal"} gap="20px">
        <div className={Style.title}>Settings</div>
        <div className={Style.Row}>
          <button onClick={()=>setComp()} className={Style.btn}>
            <span className={Style.text3}>My details</span>
          </button>
          <button onClick={()=>setComp(<Profile/>)} className={Style.btn}>
            <span className={Style.text3}>Profile</span>
          </button>
          <button onClick={()=>setComp(<Account/>)} className={Style.btn}>
            <span className={Style.text3}>Account</span>
          </button>
          <button onClick={()=>setComp()} className={Style.btn}>
            <span className={Style.text3}>Notification</span>
          </button>
        </div>
        {comp}
      </Card>
    </div>
  );
};

export default Settings;
