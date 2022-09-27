import React, { useState } from "react";
import Style from "./Assets.module.scss";
import Card from "../General/Card/Card";
import car from "../svg/car3.svg";
import Divider from "@mui/material/Divider";
import LineChart from "../General/Charts/LineChart";
import caution from "../svg/caution.svg";
import wrench from "../svg/wrench.svg";
import msg from "../svg/msg2.svg";
import analyze from "../svg/analyze.svg";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from 'react-redux'
import BasicTable from '../MUI/Table'


const Assets = () => {
  const rows = [
    ['Urgent Safety Recall', "06/04/2022", "08/04/2022", "David Demo", "Completed"],
    ['Urgent Safety Recall', "06/04/2022", "08/04/2022", "David Demo", "Completed"],
  ];


  const cols = ["Description", "Due", "Overdue", "Notify", "Status"]
  const data = useSelector(state => state.userData)
  const [conds, setconds] = useState({
    ten: false,
    km: false,
    kmm: false,
    hr: false,
    c: false,
  });


  return (
    <div className={Style.assetsDiv}>
      <div className={Style.title}>Assets</div>
      <div className={Style.row}>
        <Card
          bgColor="#242731"
          color="#242731"
          grow={0}
          maxH="800px"
          pad="45px"
        >
          <div className={Style.rowS}>
            <span className={Style.col}>
              <span className={Style.sTextG}>Fuel Usage</span>
              <span className={Style.sTextW}>2903.89 Ltr</span>
            </span>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#333642" }}
            />
            <span className={Style.col}>
              <span className={Style.sTextG}>KM Driven</span>
              <span className={Style.sTextW}>2903.89 Ltr</span>
            </span>
          </div>
          <div className={Style.rowS} style={{ gap: "21.3%" }}>
            <span className={Style.col}>
              <span className={Style.sTextG}>Total Cost</span>
              <span className={Style.sTextW}>$3,00,290.00</span>
            </span>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#333642" }}
            />
            <span className={Style.col}>
              <span className={Style.sTextG}>Top Speed</span>
              <span className={Style.sTextW}>$5.2K</span>
            </span>
          </div>
          <img alt="ico" className={Style.carPic} src={car} />
        </Card>
        <Card
          bgColor="transparent"
          color="transparent"
          pad="0px"
          maxW="65%"
          gap="20px"
        >
          <Card
            color="#242731"
            bgColor="#242731"
            jusC="space-between"
            grow={0}
            bShadow="none"
          >
            <span className={Style.charText}>
              Activity
              <button className={Style.chartBtn}>View All</button>
            </span>
            <LineChart bColor="#8668E1" bgColor="#8668E126" dataX={data.AssetsLineChart} />
          </Card>
          <div className={Style.firstRow}>
            <Card color="#242731" bgColor="#242731" maxW="49%" bShadow="none">
              <span className={Style.charText}>Noties</span>
              <Divider
                orientation="horizontal"
                sx={{ backgroundColor: "#333642", borderWidth: "2px" }}
              />
              <span className={Style.rowA}>
                <img alt="ico" src={msg} />
                <span className={Style.col}>
                  <span className={Style.sTextW}>Monday, 6th Apirl 2020</span>
                  <span className={Style.sTextG}>Book for General Service</span>
                </span>
              </span>
              <span className={Style.rowA}>
                <img alt="ico" src={caution} />
                <span className={Style.col}>
                  <span className={Style.sTextW}>
                    Thursday, 24th October 2021
                  </span>
                  <span className={Style.sTextG}>
                    Vehicle LV 001 has been marked for recall.
                  </span>
                </span>
              </span>
              <span className={Style.rowA}>
                <img alt="ico" src={wrench} />
                <span className={Style.col}>
                  <span className={Style.sTextW}>Monday, 13th August 2018</span>
                  <span className={Style.sTextG}>
                    Maintenance Completed, Collect
                  </span>
                </span>
              </span>
            </Card>
            <Card
              color="#242731"
              bgColor="#242731"
              maxW="49%"
              jusC="space-between"
              bShadow="none"
            >
              <span className={Style.charText}>
                Available Sensors
                <button className={Style.chartBtn}>Assets</button>
              </span>
              <Divider
                orientation="horizontal"
                sx={{ backgroundColor: "#333642", borderWidth: "2px" }}
              />
              <span className={Style.rowA}>
                <span>
                  <Checkbox
                    onChange={() => setconds({ ...conds, ten: !conds.ten })}
                    sx={{
                      color: "#FF6370",
                      "&.Mui-checked": {
                        color: "#FF6370",
                      },
                    }}
                  />
                  <span
                    className={Style.sTextW}
                    style={conds.ten ? { color: "#FF6370" } : {}}
                  >
                    Asset - Fuel Consumed (10)
                  </span>
                </span>
                <img alt="ico"
                  src={analyze}
                  style={
                    conds.ten
                      ? {
                        filter:
                          "invert(51%) sepia(88%) saturate(2008%) hue-rotate(319deg) brightness(104%) contrast(101%)",
                      }
                      : {}
                  }
                />
              </span>
              <span className={Style.rowA}>
                <span>
                  <Checkbox
                    onChange={() => setconds({ ...conds, km: !conds.km })}
                    sx={{
                      color: "#FF6370",
                      "&.Mui-checked": {
                        color: "#FF6370",
                      },
                    }}
                  />
                  <span
                    className={Style.sTextW}
                    style={conds.km ? { color: "#FF6370" } : {}}
                  >
                    Asset - Odometer (km)
                  </span>
                </span>
                <img alt="ico"
                  src={analyze}
                  style={
                    conds.km
                      ? {
                        filter:
                          "invert(51%) sepia(88%) saturate(2008%) hue-rotate(319deg) brightness(104%) contrast(101%)",
                      }
                      : {}
                  }
                />
              </span>
              <span className={Style.rowA}>
                <span>
                  <Checkbox
                    onChange={() => setconds({ ...conds, kmm: !conds.kmm })}
                    sx={{
                      color: "#FF6370",
                      "&.Mui-checked": {
                        color: "#FF6370",
                      },
                    }}
                  />
                  <span
                    className={Style.sTextW}
                    style={conds.kmm ? { color: "#FF6370" } : {}}
                  >
                    Asset - Runtime (km)
                  </span>
                </span>
                <img alt="ico"
                  src={analyze}
                  style={
                    conds.kmm
                      ? {
                        filter:
                          "invert(51%) sepia(88%) saturate(2008%) hue-rotate(319deg) brightness(104%) contrast(101%)",
                      }
                      : {}
                  }
                />
              </span>
              <span className={Style.rowA}>
                <span>
                  <Checkbox
                    onChange={() => setconds({ ...conds, hr: !conds.hr })}
                    sx={{
                      color: "#FF6370",
                      "&.Mui-checked": {
                        color: "#FF6370",
                      },
                    }}
                  />
                  <span
                    className={Style.sTextW}
                    style={conds.hr ? { color: "#FF6370" } : {}}
                  >
                    Asset - Speed (hr)
                  </span>
                </span>
                <img alt="ico"
                  src={analyze}
                  style={
                    conds.hr
                      ? {
                        filter:
                          "invert(51%) sepia(88%) saturate(2008%) hue-rotate(319deg) brightness(104%) contrast(101%)",
                      }
                      : {}
                  }
                />
              </span>
              <span className={Style.rowA}>
                <span>
                  <Checkbox
                    onChange={() => setconds({ ...conds, c: !conds.c })}
                    sx={{
                      color: "#FF6370",
                      "&.Mui-checked": {
                        color: "#FF6370",
                      },
                    }}
                  />
                  <span
                    className={Style.sTextW}
                    style={conds.c ? { color: "#FF6370" } : {}}
                  >
                    Engine Temperature (deg C)
                  </span>
                </span>
                <img alt="ico"
                  src={analyze}
                  style={
                    conds.c
                      ? {
                        filter:
                          "invert(51%) sepia(88%) saturate(2008%) hue-rotate(319deg) brightness(104%) contrast(101%)",
                      }
                      : {}
                  }
                />
              </span>
              <button className={Style.chartBtn} style={{ textAlign: "left", color: "#FF6370" }}>See All</button>
            </Card>
          </div>
          <Card bgColor="#242731" color="#242731" bShadow="none">
            <span className={Style.charText}>Reminder </span>
            <BasicTable colTitles={cols} rows={rows} />
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default Assets;
