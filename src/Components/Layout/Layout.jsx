import React from "react";
import Styles from "./Layout.module.scss";
import Top from "../Top/Top";
import SideMenu from "../SideMenu/SideMenu";
const CalendarP = ({ children }) => {
  return (
    <div className={Styles.App}>
      <SideMenu />
      <div className={Styles.rest}>
        <Top />
        {children}
      </div>
    </div>
  );
};

export default CalendarP;
