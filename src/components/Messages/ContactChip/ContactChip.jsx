import React from "react";
import Style from "./ContactChip.module.scss";
import Avatar from "@mui/material/Avatar";
const ContactChip = ({dis}) => {
  return (
    <div className={Style.ContactChip}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 48, height: 48 }}
      />
      <div className={Style.col}>
        <div className={Style.row}>
          <span className={Style.name}>Omar Khas</span>
          <span className={Style.time} style={{display:dis}}>4:30</span>
        </div>
        <div className={Style.row}>
          <span className={Style.status}>Online</span>
          <span className={Style.notif} style={{display:dis}}>1</span>
        </div>
      </div>
    </div>
  );
};

export default ContactChip;
