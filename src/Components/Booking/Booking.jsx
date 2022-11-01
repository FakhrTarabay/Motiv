import React from "react";
import Style from "./Booking.module.scss";
import carImg from "../svg/car2.svg";
import CarDisplayCard from "../CarDisplayCard/CarDisplayCard";
import { useSelector } from "react-redux";

const Booking = () => {
  const data = useSelector((state) => state.userData);
  return (
    <div className={Style.BookingDiv}>
      <div className={Style.title}>Booking</div>
      <div className={Style.Row}>
        {data.cars.map((car, index) => {
          return (
            <CarDisplayCard
              key={index}
              cond={false}
              data={{
                name: car.name,
                kms: car.kms,
                rate: car.rate,
                percentage: car.percentage,
                type: car.type,
                classX: car.classX,
                passengers: car.passengers,
              }}
              imgSrc={carImg}
              bgColor="#242731"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
