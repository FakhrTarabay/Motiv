import React from 'react';
import Style from "./ChartCard.module.scss"
import Card from "../../General/Card/Card";
import LineChart from "../../General/Charts/LineChart";

const ChartCard = ({data}) => {
    return (
        <Card
            color="#242731"
            bgColor="#242731"
            jusC="space-between"
            grow={0}
            bShadow="none"
          >
            <span className={Style.Text}>
              Activity
              <button className={Style.Btn}>View All</button>
            </span>
            <LineChart bColor="#8668E1" bgColor="#8668E126" dataX={data.AssetsLineChart} />
          </Card>
    );
}

export default ChartCard