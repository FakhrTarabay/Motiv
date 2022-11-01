import React from "react";
import Style from "./SellCars.module.scss";
import Card from "../General/Card/Card";
import car from "../svg/selling.svg";
import smallCar from "../svg/smallCar.svg";
import redA from "../svg/redA.svg";
import sArrow from "../svg/sArrow.svg";
import pCash from "../svg/pCash.svg";
import ChartDisplayCard from "../ChartDisplayCard/ChartDisplayCard";
import { useSelector } from "react-redux";
import Progress from "../MUI/Progress";
import { DoughnutX } from "../General/Charts/Doughnut";

const SellCars = () => {
  const data = useSelector((state) => state.userData);
  return (
    <div className={Style.SellingDiv}>
      <div className={Style.title}>Sell Cars</div>
      <div className={Style.Row}>
        <Card
          bgColor="#242731"
          color="#242731"
          aItems="flex-start"
          jusC="flex-start"
        >
          <span className={Style.carName}>Audi</span>
          <img width="100%" alt="pic" src={car} />
        </Card>
        <ChartDisplayCard
          data={data.barChartData}
          type="bar"
          title="Tracking History"
          maxW="40%"
        />
      </div>
      <div className={Style.title}>Offers</div>
      <Card bgColor="#242731" color="#242731" type="row" aItems="center">
        <div className={Style.offerCol}>
          <span className={Style.cTextW}>Killian James</span>
          <span className={Style.cTextG}>
            <span className={Style.cText2}>$16,605</span> average price
          </span>
          <span className={Style.text}>market avarage is $16,224</span>
          <span>
            <button className={Style.btn}>
              <img src={sArrow} alt="arrow"/>
            </button>
          </span>
        </div>
        <div className={Style.offerCol}>
          <Progress value={30} />
          <span className={Style.textP}>Impression Share</span>
        </div>
        <div
          className={Style.offerCol}
          style={{ width: "100px", height: "100px", alignItems: "center" }}
        >
          <DoughnutX />
        </div>
        <div className={Style.offerCol}>
          <img src={smallCar} alt="car" width="42px" />
          <span className={Style.cText1}>$111</span>
          <span className={Style.text}>Model Spend</span>
        </div>
        <div className={Style.offerCol}>
          {" "}
          <img src={redA} alt="car" width="42px" />
          <span className={Style.cText2}>$8111</span>
          <span className={Style.text}>Model Spend</span>
        </div>
        <div className={Style.offerCol}>
          {" "}
          <img src={pCash} alt="car" width="42px" />
          <span className={Style.cText3}>$811</span>
          <span className={Style.text}>Spend per Unit Turned</span>
        </div>
      </Card>
      <Card bgColor="#242731" color="#242731" type="row">
        <div className={Style.offerCol}>
          <span className={Style.cTextW}>Killian James</span>
          <span className={Style.cTextG}>
            <span className={Style.cText2}>$16,605</span> average price
          </span>
          <span className={Style.text}>market avarage is $16,224</span>
          <span>
            <button className={Style.btn}>
              <img src={sArrow} alt="arrow"/>
            </button>
          </span>
        </div>
        <div className={Style.offerCol}>
          <Progress value={30} />
          <span className={Style.textP}>Impression Share</span>
        </div>
        <div
          className={Style.offerCol}
          style={{ width: "100px", height: "100px" }}
        >
          <DoughnutX />
        </div>
        <div className={Style.offerCol}>
          <img src={smallCar} alt="car" width="42px" />
          <span className={Style.cText1}>$111</span>
          <span className={Style.text}>Model Spend</span>
        </div>
        <div className={Style.offerCol}>
          {" "}
          <img src={redA} alt="car" width="42px" />
          <span className={Style.cText2}>$8111</span>
          <span className={Style.text}>Model Spend</span>
        </div>
        <div className={Style.offerCol}>
          {" "}
          <img src={pCash} alt="car" width="42px" />
          <span className={Style.cText3}>$811</span>
          <span className={Style.text}>Spend per Unit Turned</span>
        </div>
      </Card>
    </div>
  );
};

export default SellCars;
