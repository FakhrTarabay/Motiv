import React from "react";
import css from "./DashBoard.module.css";
import Card from "../general/card/Card";
import light from "../svg/light.svg";
import arrow from "../svg/arrow.svg";
import coin from "../svg/coin.svg";
import oil from "../svg/oil.svg";
import carIcon from "../svg/carIcon.svg";
import arrowC from "../svg/arrowC.svg";
import carSettings from "../svg/carSettings.svg";
import carBolt from "../svg/carBolt.svg";
import car from "../svg/car2.svg";
import BarGraph from "../general/Charts/BarGraph";
import Progress from "../MUI/Progress";
import LineChart from "../general/Charts/LineChart";

const DashBoard = () => {
  return (
    <div className={css.dashDiv}>
      <div className={css.firstRow}>
        <Card color="#A162F7" bgColor="#242731" aItems="center">
          <img alt="pic" src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card color="#FF7E86" bgColor="#242731" aItems="center">
          <img alt="pic" src={arrow} />
          <span className={css.cardText}>Range</span>
          <Progress value={80} color="white" />
        </Card>{" "}
        <Card color="#A16295" bgColor="#242731" aItems="center">
          <img alt="pic" src={oil} />
          <span className={css.cardText}>Fluid</span>
          <Progress value={80} />
        </Card>{" "}
        <Card color="#F6CC0D" bgColor="#242731" aItems="center">
          <img alt="pic" src={coin} />
          <span className={css.cardText}>Tire Wear</span>
          <Progress value={80} />
        </Card>
      </div>
      <div className={css.firstRow}>
        <Card color="#242731" bgColor="#242731" maxW="49%" jusC="space-between">
          <span className={css.charText}>
            Mile Statistics
            <span className={css.chartBtnRow}>
              <button className={css.chartBtn}>Day</button>
              <button className={css.chartBtn}>Week</button>
              <button className={css.chartBtn}>Month</button>
            </span>
          </span>

          <BarGraph />
        </Card>
        <Card color="#242731" bgColor="#242731" maxW="49%" jusC="space-between">
          <span className={css.charText}>
            Car Statistics
            <span className={css.chartBtnRow}>
              <button className={css.chartBtn}>Day</button>
              <button className={css.chartBtn}>Week</button>
              <button className={css.chartBtn}>Month</button>
            </span>
          </span>
          <LineChart />
        </Card>
      </div>
      <div className={css.firstRow}>
        <Card bgColor="#E1DFA4" color="#E1DFA4" aItems="flex-start">
          <span className={css.carText}>
            <img src={carIcon} alt="ico" />
            64% recommend
          </span>
          <img width="100%" alt="pic" src={car} />
          <span className={css.carTextB}>Mini Cooper</span>
          <div className={css.carText}>
            <span className={css.carText}>
              <img src={arrowC} alt="ico" />
              <span className={css.carSText}>132K</span>
              <img src={carSettings} alt="ico" />
              <img src={carBolt} alt="ico" />
            </span>
            <span className={css.carSText}>$32/h</span>
          </div>
        </Card>
        <Card bgColor="#E3ECF1" color="#E3ECF1" aItems="flex-start">
          <span className={css.carText}>
            <img src={carIcon} alt="ico" />
            64% recommend
          </span>
          <img width="100%" alt="pic" src={car} />
          <span className={css.carTextB}>Mini Cooper</span>
          <div className={css.carText}>
            <span className={css.carText}>
              <img src={arrowC} alt="ico" />
              <span className={css.carSText}>132K</span>
              <img src={carSettings} alt="ico" />
              <img src={carBolt} alt="ico" />
            </span>
            <span className={css.carSText}>$32/h</span>
          </div>
        </Card>

        <Card bgColor="#F4E3E5" color="#F4E3E5" aItems="flex-start">
          <span className={css.carText}>
            <img src={carIcon} alt="ico" />
            64% recommend
          </span>
          <img width="100%" alt="pic" src={car} />
          <span className={css.carTextB}>Mini Cooper</span>
          <div className={css.carText}>
            <span className={css.carText}>
              <img src={arrowC} alt="ico" />
              <span className={css.carSText}>132K</span>
              <img src={carSettings} alt="ico" />
              <img src={carBolt} alt="ico" />
            </span>
            <span className={css.carSText}>$32/h</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
