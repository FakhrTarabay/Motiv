import React from "react";
import css from "./SideMenu.module.css";
import motiv from "../svg/motiv.svg";
import db from "../svg/db.svg";
import assets from "../svg/assets.svg";
import car from "../svg/car.svg";
import calen from "../svg/calen.svg";
import msg from "../svg/msg.svg";
import fencing from "../svg/fencing.svg";
import cart from "../svg/cart.svg";
import bag from "../svg/bag.svg";

const SideMenu = () => {
  return (
    <div className={css.SideMenu}>
      <div className={css.logo}>
        <img src={motiv} />
        <span className={css.title}>Motiv.</span>
      </div>
      <div className={css.menuItem}>
        <img src={db} />
        <a>Dashboard</a>
      </div>
      <div className={css.menuItem}>
        <img src={assets} />
        <a>Assets</a>
      </div>
      <div className={css.menuItem}>
        <img src={car} />
        <a>Booking</a>
      </div>
      <div className={css.menuItem}>
        <img src={bag} />
        <a>Sell Cars</a>
      </div>
      <div className={css.menuItem}>
        <img src={cart} />
        <a>Buy Cars</a>
      </div>
      <div className={css.menuItem}>
        <img src={fencing} />
        <a>Services</a>
      </div>
      <div className={css.menuItem}>
        <img src={calen} />
        <a>Calender</a>
      </div>
      <div className={css.menuItem}>
        <img src={msg} />
        <a>Messages</a>
      </div>
      
    </div>
  );
};

export default SideMenu;
