import React from 'react'
import Card from "../../General/Card/Card";
import Style from './DataCard.module.scss'
import Progress from "../../MUI/Progress";


const DataCard = ({color,bgColor,aItems,imgSrc,text,data}) => {
    return (
        <Card color={color} bgColor={bgColor} aItems={aItems}>
            <img alt="pic" src={imgSrc} />
            <span className={Style.cardText}>{text}</span>
            <Progress value={data} />
        </Card>
  )
}

export default DataCard