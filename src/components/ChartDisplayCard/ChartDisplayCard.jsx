import React from 'react'
import Card from "../General/Card/Card";
import Style from './ChartDisplayCard.module.scss'
import BarGraph from "../General/Charts/BarGraph";
import LineChart from "../General/Charts/LineChart";
import ChartBtns from "./ChartBtns/ChartBtns";


const ChartDisplayCard = ({type,title,data}) => {
    return (
        <Card color="#242731" bgColor="#242731" maxW="49%" jusC="space-between">
            <span className={Style.charText}>
                {title}
                <ChartBtns btns={["Day", "Week", "Month"]} />
            </span>
            {type === "line" ?
                <LineChart bColor="rgba(255, 118, 76, 1)" bgColor="rgba(255, 118, 76, 0.5)" dataX={data} />
                :
                <BarGraph dataX={data} />
            }
        </Card>
    )
}

export default ChartDisplayCard