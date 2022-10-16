import React from "react";
import Style from "./Assets.module.scss";
import Card from "../General/Card/Card";
import { useSelector } from "react-redux";
import BasicTable from "../MUI/Table";
import CarCard from "./CarCard/CarCard";
import ChartCard from "./ChartCard/ChartCard";
import NotesCard from "./NotesCard/NotesCard";
import SensorsCard from "./SensorsCard/SensorsCard";

const Assets = () => {
  const cols = ["Description", "Due", "Overdue", "Notify", "Status"];
  const data = useSelector((state) => state.userData);

  return (
    <div className={Style.assetsDiv}>
      <div className={Style.title}>Assets</div>
      <div className={Style.row}>
        <CarCard />
        <Card
          bgColor="transparent"
          color="transparent"
          pad="0px"
          maxW="65%"
          gap="20px"
        >
          <ChartCard data={data} />
          <div className={Style.row}>
            <NotesCard />
            <SensorsCard />
          </div>
          <Card bgColor="#242731" color="#242731" bShadow="none">
            <span className={Style.Text}>Reminder</span>
            <BasicTable colTitles={cols} rows={data.tableRows} />
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default Assets;
