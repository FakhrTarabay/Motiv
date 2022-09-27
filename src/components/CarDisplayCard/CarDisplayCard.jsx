import React from 'react'
import Style from './CarDisplayCard.module.scss'
import Card from "../General/Card/Card";
import arrowC from "../svg/arrowC.svg";
import carSettings from "../svg/carSettings.svg";
import carBolt from "../svg/carBolt.svg";
import carIcon from "../svg/carIcon.svg";

const CarDisplayCard = ({ data: { name, kms, rate, percentage }, imgSrc, bgColor }) => {
    return (
        <Card bgColor={bgColor} color={bgColor} aItems="flex-start">
            <span className={Style.carText}>
                <img src={carIcon} alt="ico" />
                {percentage} recommend
            </span>
            <img width="100%" alt="pic" src={imgSrc} />
            <span className={Style.carTextB}>{name}</span>
            <div className={Style.carText}>
                <span className={Style.carText}>
                    <img src={arrowC} alt="ico" />
                    <span className={Style.carSText}>{kms}</span>
                    <img src={carSettings} alt="ico" />
                    <img src={carBolt} alt="ico" />
                </span>
                <span className={Style.carSText}>{rate}</span>
            </div>
        </Card>
    )
}

export default CarDisplayCard