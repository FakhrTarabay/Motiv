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
        <img alt="ico" src={motiv} />
        <span className={css.title}>Motiv.</span>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={db} />
        <button className={css.btn}>Dashboard</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={assets} />
        <button className={css.btn}>Assets</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={car} />
        <button className={css.btn}>Booking</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={bag} />
        <button className={css.btn}>Sell Cars</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={cart} />
        <button className={css.btn}>Buy Cars</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={fencing} />
        <button className={css.btn}>Services</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={calen} />
        <button className={css.btn}>Calender</button>
      </div>
      <div className={css.menuItem}>
        <img alt="ico" src={msg} />
        <button className={css.btn}>Messages</button>
      </div>
    </div>
  );
};

export default SideMenu;
