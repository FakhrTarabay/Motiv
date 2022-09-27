import React from "react";
import Style from "./SideMenu.module.scss";
import Logo from '../Logo/Logo'
import db from "../svg/db.svg";
import assets from "../svg/assets.svg";
import car from "../svg/car.svg";
import calen from "../svg/calen.svg";
import msg from "../svg/msg.svg";
import fencing from "../svg/fencing.svg";
import cart from "../svg/cart.svg";
import bag from "../svg/bag.svg";
import SideMenuBtn from './SideMenuBtn/SideMenuBtn'
const SideMenu = () => {
  return (
    <div className={Style.SideMenu}>
      <Logo/>
      <SideMenuBtn imgSrc={db} text={"Dashboard"} link="/STD"/>
      <SideMenuBtn imgSrc={assets} text={"Assets"} link="/STA"/>
      <SideMenuBtn imgSrc={car} text={"Booking"}/>
      <SideMenuBtn imgSrc={bag} text={"Sell Cars"}/>
      <SideMenuBtn imgSrc={cart} text={"Buy Cars"}/>
      <SideMenuBtn imgSrc={fencing} text={"Services"}/>
      <SideMenuBtn imgSrc={calen} text={"Calender"}/>
      <SideMenuBtn imgSrc={msg} text={"Messages"}/>
    </div>
  );
};

export default SideMenu;
