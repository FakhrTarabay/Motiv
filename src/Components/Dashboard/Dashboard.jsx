import React from "react";
import Style from "./Dashboard.module.scss";
import light from "../svg/light.svg";
import arrow from "../svg/arrow.svg";
import coin from "../svg/coin.svg";
import oil from "../svg/oil.svg";
import car from "../svg/car2.svg";
import { useSelector } from 'react-redux'
import DataCard from "./DataCards/DataCard";
import CarDisplayCard from "../CarDisplayCard/CarDisplayCard";
import ChartDisplayCard from "../ChartDisplayCard/ChartDisplayCard";
const DashBoard = () => {
  const data = useSelector((state) => state.userData)
  return (
    <div className={Style.dashDiv}>
      <div className={Style.title}>Dashboard</div>
      <div className={Style.Row}>
        <DataCard color="#A162F7" bgColor="#242731" aItems="center" text="Energy" data={data.energy} imgSrc={light} />
        <DataCard color="#FF7E86" bgColor="#242731" aItems="center" text="Range" data={data.range} imgSrc={arrow} />
        <DataCard color="#A16295" bgColor="#242731" aItems="center" text="Fluid" data={data.fluid} imgSrc={oil} />
        <DataCard color="#F6CC0D" bgColor="#242731" aItems="center" text="Tire Wear" data={data.tireWear} imgSrc={coin} />
      </div>
      <div className={Style.Row}>
        <ChartDisplayCard data={data.barChartData} type="bar" title="Mile Statistics" />
        <ChartDisplayCard data={data.lineChartData} type="line" title="Car Statistics" />
      </div>
      <div className={Style.Row}>
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E1DFA4" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E3ECF1" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#F4E3E5" />
      </div>
    </div>
  );
};

export default DashBoard;
