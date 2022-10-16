import React from "react";
import Style from "./CarCard.module.scss";
import Card from "../../General/Card/Card";
import car from "../../svg/car3.svg";
import CarCardCol from "./CarCardCol/CarCardCol";

const CarCard = () => {
  return (
    <Card bgColor="#242731" color="#242731" grow={0} maxH="800px" pad="45px">
      <div className={Style.row}>
        <CarCardCol text1="Fuel Usage" text2="2903.89 Ltr" />
        <CarCardCol text1="KM Driven" text2="2903.89 Ltr" />
      </div>
      <div className={Style.row}>
        <CarCardCol text1="Total Cost" text2="$3,00,290.00" />
        <CarCardCol text1="Top Speed" text2="$5.2K" />
      </div>
      <img alt="ico" className={Style.carPic} src={car} />
    </Card>
  );
};

export default CarCard;
