import React from "react";
import Style from "./Booking.module.scss";
import car from "../svg/car2.svg";
import CarDisplayCard from "../CarDisplayCard/CarDisplayCard";

const Booking = () => {
  return (
    <div className={Style.BookingDiv}>
      <div className={Style.title}>Booking</div>
      <div className={Style.Row}>
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E1DFA4" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E3ECF1" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#F4E3E5" />
      </div>
      <div className={Style.Row}>
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E1DFA4" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E3ECF1" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#F4E3E5" />
      </div>
      <div className={Style.Row}>
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E1DFA4" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E3ECF1" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#F4E3E5" />
      </div>
      <div className={Style.Row}>
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E1DFA4" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#E3ECF1" />
        <CarDisplayCard data={{ name: "Mini Cooper", kms: "132k", rate: "$32/h", percentage: "63%" }} imgSrc={car} bgColor="#F4E3E5" />
      </div>
    </div>
  );
};

export default Booking;
