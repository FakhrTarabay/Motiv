import React, { useState } from "react";
import css from "./Assets.module.css";
import Card from "../general/card/Card";
import car from "../svg/car3.svg";
import Divider from "@mui/material/Divider";
import LineChart from "../general/Charts/LineChart";
import caution from "../svg/caution.svg";
import wrench from "../svg/wrench.svg";
import msg from "../svg/msg2.svg";
import analyze from "../svg/analyze.svg";

import Checkbox from "@mui/material/Checkbox";

const Assets = () => {
  const [conds, setconds] = useState({
    ten: false,
    km: false,
    kmm: false,
    hr: false,
    c: false,
  });
  return (
    <div className={css.assetsDiv}>
      <div className={css.title}>Assets</div>
      <div className={css.row}>
        <Card
          bgColor="#242731"
          color="#242731"
          grow={0}
          maxH="800px"
          pad="45px"
        >
          <div className={css.rowS}>
            <span className={css.col}>
              <span className={css.sTextG}>Fuel Usage</span>
              <span className={css.sTextW}>2903.89 Ltr</span>
            </span>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#333642" }}
            />
            <span className={css.col}>
              <span className={css.sTextG}>KM Driven</span>
              <span className={css.sTextW}>2903.89 Ltr</span>
            </span>
          </div>
          <div className={css.rowS} style={{ gap: "21.3%" }}>
            <span className={css.col}>
              <span className={css.sTextG}>Total Cost</span>
              <span className={css.sTextW}>$3,00,290.00</span>
            </span>
            <Divider
              orientation="vertical"
              sx={{ backgroundColor: "#333642" }}
            />
            <span className={css.col}>
              <span className={css.sTextG}>Top Speed</span>
              <span className={css.sTextW}>$5.2K</span>
            </span>
          </div>
          <img className={css.carPic} src={car} />
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
            <span className={css.charText}>
              Activity
              <button className={css.chartBtn}>View All</button>
            </span>
            <LineChart bColor="#8668E1" bgColor="#8668E126" />
          </Card>
          <div className={css.firstRow}>
            <Card color="#242731" bgColor="#242731" maxW="49%" bShadow="none">
              <span className={css.charText}>Noties</span>
              <Divider
                orientation="horizontal"
                sx={{ backgroundColor: "#333642", borderWidth: "2px" }}
              />
              <span className={css.rowA}>
                <img src={msg} />
                <span className={css.col}>
                  <span className={css.sTextW}>Monday, 6th Apirl 2020</span>
                  <span className={css.sTextG}>Book for General Service</span>
                </span>
              </span>
              <span className={css.rowA}>
                <img src={caution} />
                <span className={css.col}>
                  <span className={css.sTextW}>
                    Thursday, 24th October 2021
                  </span>
                  <span className={css.sTextG}>
                    Vehicle LV 001 has been marked for recall.
                  </span>
                </span>
              </span>
              <span className={css.rowA}>
                <img src={wrench} />
                <span className={css.col}>
                  <span className={css.sTextW}>Monday, 13th August 2018</span>
                  <span className={css.sTextG}>
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
              <span className={css.charText}>
                Available Sensors
                <button className={css.chartBtn}>Assets</button>
              </span>
              <Divider
                orientation="horizontal"
                sx={{ backgroundColor: "#333642", borderWidth: "2px" }}
              />
              <span className={css.rowA}>
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
                    className={css.sTextW}
                    style={conds.ten ? { color: "#FF6370" } : {}}
                  >
                    Asset - Fuel Consumed (10)
                  </span>
                </span>
                <img
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
              <span className={css.rowA}>
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
                    className={css.sTextW}
                    style={conds.km ? { color: "#FF6370" } : {}}
                  >
                    Asset - Odometer (km)
                  </span>
                </span>
                <img
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
              <span className={css.rowA}>
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
                    className={css.sTextW}
                    style={conds.kmm ? { color: "#FF6370" } : {}}
                  >
                    Asset - Runtime (km)
                  </span>
                </span>
                <img
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
              <span className={css.rowA}>
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
                    className={css.sTextW}
                    style={conds.hr ? { color: "#FF6370" } : {}}
                  >
                    Asset - Speed (hr)
                  </span>
                </span>
                <img
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
              <span className={css.rowA}>
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
                    className={css.sTextW}
                    style={conds.c ? { color: "#FF6370" } : {}}
                  >
                    Engine Temperature (deg C)
                  </span>
                </span>
                <img
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
              <button className={css.chartBtn} style={{textAlign:"left",color:"#FF6370"}}>See All</button>
            </Card>
          </div>
          <Card bgColor="#242731" color="#242731" bShadow="none">
              <span className={css.charText}>Reminder</span>
                  
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default Assets;
