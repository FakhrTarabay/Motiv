import React from "react";
import Style from "./ContactChip.module.scss";
import Avatar from "@mui/material/Avatar";
const ContactChip = ({dis,data:{name,time,status,notif,img}}) => {
  return (
    <button className={Style.ContactChip}>
      <Avatar
        alt={name}
        src={img}
        sx={{ width: 48, height: 48 }}
      />
      <div className={Style.col}>
        <div className={Style.row}>
          <span className={Style.name}>{name}</span>
          <span className={Style.time} style={{display:dis}}>{time}</span>
        </div>
        <div className={Style.row}>
          <span className={Style.status}>{status}</span>
          <span className={Style.notif} style={{display:dis}}>{notif}</span>
        </div>
      </div>
    </button>
  );
};

export default ContactChip;
