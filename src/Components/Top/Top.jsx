import React from "react";
import Style from "./Top.module.scss";
import Avatar from "@mui/material/Avatar";
import notif from "../svg/notification.svg";
import search from "../svg/search.svg";
import rect from "../svg/rect.svg";

const Top = () => {
  return (
    <div className={Style.divTop}>
      <div className={Style.begin}>
        <a href="#temp" className={Style.search}>
          <img alt="ico" src={search} />
        </a>
        <a href="#temp" className={Style.search}>
          <img alt="ico" src={rect} />
        </a>
        <input
          className={Style.searchBar}
          type={"search"}
          placeholder="search or type..."
        ></input>
      </div>
      <div className={Style.end}>
        <a href="#temp" className={Style.notif}>
          <img src={notif} alt="notif"/>
        </a>
        <a href="#temp" className={Style.avatar}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 48, height: 48 }}
          />
        </a>
      </div>
    </div>
  );
};

export default Top;
