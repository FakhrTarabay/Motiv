import React from "react";
import Avatar from "@mui/material/Avatar";
import Style from './Message.module.scss'
const Message = ({data:{img,text,time,type}}) => {
  return (
    <div className={type==="rec"?Style.msgRec:Style.msgSent}>
      <Avatar
        alt="name"
        src={img}
        sx={{ width: 48, height: 48 }}
      />
      <div className={Style.msgDiv}>
        <span className={Style.text}>
          {text}
        </span>
      </div>
      <span>{time}</span>
    </div>
  );
};

export default Message;
