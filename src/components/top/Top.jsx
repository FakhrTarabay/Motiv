import React from "react";
import css from "./Top.module.css";
import Avatar from "@mui/material/Avatar";
import notif from "../svg/notification.svg";
import search from "../svg/search.svg";
import rect from "../svg/rect.svg";

const Top = () => {
  return (
    <div className={css.divTop}>
      <div className={css.begin}>
        <a className={css.search}>
          <img src={search} />
        </a>
        <a className={css.search}>
          <img src={rect} />
        </a>
        <input
          className={css.searchBar}
          type={"search"}
          placeholder="search or type..."
        ></input>
      </div>
      <div className={css.end}>
        <a className={css.notif}>
          <img src={notif} alt="notif" />
        </a>
        <a className={css.avatar}>
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
