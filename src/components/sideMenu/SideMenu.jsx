import React from "react";
import Style from "./SideMenu.module.scss";
import Logo from "../Logo/Logo";
import db from "../svg/db.svg";
import assets from "../svg/assets.svg";
import car from "../svg/car.svg";
import calen from "../svg/calen.svg";
import msg from "../svg/msg.svg";
import settings from "../svg/settings.svg";
import fencing from "../svg/fencing.svg";
import bag from "../svg/bag.svg";
import signout from "../svg/signout.svg";
import SideMenuBtn from "./SideMenuBtn/SideMenuBtn";
const SideMenu = () => {
  return (
    <div className={Style.SideMenu}>
      <div>
        <Logo />
        <SideMenuBtn imgSrc={db} text={"Dashboard"} link="/Dashboard" />
        <SideMenuBtn imgSrc={assets} text={"Assets"} link="/Assets" />
        <SideMenuBtn imgSrc={car} text={"Booking"} link="/Booking" />
        <SideMenuBtn imgSrc={bag} text={"Sell Cars"} link="/Selling" />
        <SideMenuBtn imgSrc={fencing} text={"Services"} />
        <SideMenuBtn imgSrc={calen} text={"Calender"} link="/Calendar" />
        <SideMenuBtn imgSrc={msg} text={"Messages"} />
      </div>
      <span>
        <SideMenuBtn imgSrc={settings} text={"Settings"} link="/Settings" />
        <SideMenuBtn imgSrc={signout} text={"Logout"}/>
      </span>
    </div>
  );
};

export default SideMenu;
