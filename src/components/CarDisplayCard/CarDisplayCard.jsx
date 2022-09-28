import React , {useState} from "react";
import Style from "./CarDisplayCard.module.scss";
import Card from "../General/Card/Card";
import arrowC from "../svg/arrowC.svg";
import per from "../svg/per.svg";
import love from "../svg/love.svg";
import loveF from "../svg/LoveF.svg";
import typeImg from "../svg/type.svg";
import carSettings from "../svg/carSettings.svg";
import carBolt from "../svg/carBolt.svg";
import carIcon from "../svg/carIcon.svg";

const CarDisplayCard = ({
  data: { name, kms, rate, percentage, type, classX, passengers },
  imgSrc,
  bgColor,
  cond = true,
}) => {
  const [filter, setFilter] = useState(true);
  return (
    <Card
      bgColor={bgColor}
      color={bgColor}
      aItems={"flex-start"}
      jusC={cond ? "flex-start" : "space-between"}
    >
      {cond ? (
        <span className={Style.carText}>
          <img src={carIcon} alt="ico" />
          <span>{percentage} recommend</span>
        </span>
      ) : (
        <span className={Style.carTextBooking}>
          <span>{name}</span>
          <a href="#test" onClick={()=>setFilter(!filter)}>
            <img width="24px" height="24px" src={filter?love:loveF} alt="ico" />
          </a>
        </span>
      )}

      {!cond && <span className={Style.carTextBBooking}>{classX}</span>}
      <img width="100%" alt="pic" src={imgSrc} />
      {cond && <span className={Style.carTextB}>{name}</span>}
      {cond ? (
        <div className={Style.carText}>
          <span className={Style.carText}>
            <img src={arrowC} alt="ico" />
            <span className={Style.carSText}>{kms}</span>
            <img src={carSettings} alt="ico" />
            <img src={carBolt} alt="ico" />
          </span>
          <span className={Style.carSTextBooking}>{rate}</span>
        </div>
      ) : (
        <div className={Style.carTextBookingBot}>
          <span className={Style.carTextBookingBot}>
            <img src={per} alt="ico" />
            <span className={Style.carSTextBooking}>{passengers}</span>
            <img src={typeImg} alt="ico" />
            <span className={Style.carSTextBooking}>{type}</span>
            <img src={carBolt} alt="ico" />
          </span>
          <span className={Style.carSTextBooking}>{rate}</span>
        </div>
      )}
    </Card>
  );
};

export default CarDisplayCard;
