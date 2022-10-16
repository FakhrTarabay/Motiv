import React, { useState } from "react";
import Style from "./SensorsCard.module.scss";
import SensorsRow from "./SensorsRow/SensorsRow";
import Card from "../../General/Card/Card";
import Divider from "@mui/material/Divider";
import analyze from "../../svg/analyze.svg";

const SensorsCard = () => {
  const [conds, setconds] = useState({
    ten: false,
    km: false,
    kmm: false,
    hr: false,
    c: false,
  });

  return (
    <Card
      color="#242731"
      bgColor="#242731"
      maxW="49%"
      jusC="space-between"
      bShadow="none"
    >
      <span className={Style.Text}>
        Available Sensors
        <button className={Style.Btn}>Assets</button>
      </span>
      <Divider
        orientation="horizontal"
        sx={{ backgroundColor: "#333642", borderWidth: "2px" }}
      />
      <SensorsRow
        setconds={setconds}
        conds={conds}
        text="Asset - Fuel Consumed (10)"
        imgSrc={analyze}
      />
      <SensorsRow
        setconds={setconds}
        conds={conds}
        text="Asset - Odometer (km)"
        imgSrc={analyze}
      />
      <SensorsRow
        setconds={setconds}
        conds={conds}
        text="Asset - Runtime (km)"
        imgSrc={analyze}
      />
      <SensorsRow
        setconds={setconds}
        conds={conds}
        text="Asset - Speed (hr)"
        imgSrc={analyze}
      />
      <SensorsRow
        setconds={setconds}
        conds={conds}
        text="Engine Temperature (deg C)"
        imgSrc={analyze}
      />
      <button
        className={Style.Btn}
        style={{ textAlign: "left", color: "#FF6370" }}
      >
        See All
      </button>
    </Card>
  );
};

export default SensorsCard;
