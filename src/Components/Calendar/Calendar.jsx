import React, { useState } from "react";
import Style from "./Calendar.module.scss";
import Card from "../General/Card/Card";
import { CalendarX } from "../General/Calendar/Calendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalendarS = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className={Style.CalendarDiv}>
      <div className={Style.title}>Calendar</div>
      <div className={Style.Row}>
        <div className={Style.col1}>
          <div className={Style.Row}>
            <Card>
              <Calendar
                onChange={onChange}
                value={value}
                className={Style.rCal}
              />
            </Card>
          </div>
        </div>
        <div className={Style.col2}>
          <Card>
            <CalendarX />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendarS;
