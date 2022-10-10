import React from "react";
import Style from "./Services.module.scss";
import Card from "../General/Card/Card";
import ServicesBot from "./ServicesBot/ServicesBot";
import serv1 from "../svg/serv1.svg";
import serv2 from "../svg/serv2.svg";
import serv3 from "../svg/serv3.svg";
import gc from "../svg/greenC.svg";
import rc from "../svg/redC.svg";
import pc from "../svg/purpC.svg";
import t from "../svg/t.svg";
import Checkbox from "@mui/material/Checkbox";
import { DoughnutX } from "../General/Charts/Doughnut";

const Services = () => {
  return (
    <div className={Style.ServicesDiv}>
      <Card pad="0px" bShadow="none">
        <Card type="row" pad="0px" bShadow="none">
          <Card pad="20px" maxW="fit-content" bShadow="none">
            <div className={Style.title}>Services</div>
            <Card gap="7px" pad="20px 0px" bShadow="none" maxH="200px">
              <div className={Style.cardRow}>
                {Array.apply(null, Array(10)).map((elem, index) => {
                  return (
                    <span key={index} className={Style.smallCard}>{`A${
                      index + 1
                    }`}</span>
                  );
                })}
              </div>
              <div className={Style.cardRow}>
                {Array.apply(null, Array(10)).map((elem, index) => {
                  return (
                    <span key={index} className={Style.smallCard}>{`B${
                      index + 1
                    }`}</span>
                  );
                })}
              </div>
            </Card>
            <Card bShadow="none" pad="0px" type="row">
              <Card
                jusC="flex-start"
                aItems="center"
                gap="20px"
                pad="20px 0px"
              >
                <div className={Style.title}>Services</div>
                <span style={{ width: "155px" }}>
                  <DoughnutX />
                </span>
                <span className={Style.sTextWS} style={{ textAlign: "center" }}>
                  Total service time 5:20H
                </span>
              </Card>
              <Card maxW={"fit-content"} pad="10px">
                <div className={Style.servRow}>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <img src={gc} alt="s" />
                    <span className={Style.fText}>Brake fluid change</span>
                  </span>
                  <span className={Style.zh2t}>$32</span>
                </div>
                <div className={Style.servRow}>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <img src={rc} alt="s" />
                    <span className={Style.fText}>Diagnostics</span>
                  </span>
                  <span className={Style.zh2t}>$32</span>
                </div>
                <div className={Style.servRow}>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <img src={pc} alt="s" />
                    <span className={Style.fText}>External Washing</span>
                  </span>
                  <span className={Style.zh2t}>$32</span>
                </div>
              </Card>
            </Card>
            <button className={Style.btn}>Pay $86</button>
          </Card>
          <Card bShadow="none" pad="30px">
            <div className={Style.title}>Service Required</div>
            <Card>
              <span className={Style.rowA}>
                <img alt="ico" src={serv1} />
                <span className={Style.col}>
                  <span className={Style.sTextW}>Monday, 6th Apirl 2020</span>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className={Style.sTextWS}>Price : $48</span>
                    <span className={Style.sTextG}>Processing : 1 hours</span>
                  </span>
                </span>
              </span>
              <span className={Style.rowA}>
                <img
                  alt="ico"
                  src={t}
                  height="30px"
                  style={{ marginLeft: "23px" }}
                />
              </span>

              <span className={Style.rowA}>
                <img alt="ico" src={serv2} />
                <span className={Style.col}>
                  <span className={Style.sTextW}>Monday, 6th Apirl 2020</span>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className={Style.sTextWS}>Price : $48</span>
                    <span className={Style.sTextG}>Processing : 1 hours</span>
                  </span>
                </span>
              </span>
              <span className={Style.rowA}>
                <img
                  alt="ico"
                  src={t}
                  height="30px"
                  style={{ marginLeft: "23px" }}
                />
              </span>
              <span className={Style.rowA}>
                <img alt="ico" src={serv3} />
                <span className={Style.col}>
                  <span className={Style.sTextW}>Monday, 6th Apirl 2020</span>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className={Style.sTextWS}>Price : $48</span>
                    <span className={Style.sTextG}>Processing : 1 hours</span>
                  </span>
                </span>
              </span>
            </Card>
            <div className={Style.title}>Service Schedule</div>
            <Card>
              <span className={Style.rowA}>
                <Checkbox
                  sx={{
                    color: "#FF6370",
                    "&.Mui-checked": {
                      color: "#FF6370",
                    },
                  }}
                />
                <span className={Style.col}>
                  <span className={Style.sTextWQ}>Buy spare parts for</span>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className={Style.sTextG}>Price : $48</span>
                    <span className={Style.sTextG}>Processing : 1 hours</span>
                  </span>
                </span>
              </span>{" "}
              <span className={Style.rowA}>
                <Checkbox
                  sx={{
                    color: "#FF6370",
                    "&.Mui-checked": {
                      color: "#FF6370",
                    },
                  }}
                />
                <span className={Style.col}>
                  <span className={Style.sTextWQ}>
                    Upgrade your favorite car periodically
                  </span>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className={Style.sTextG}>Price : $48</span>
                    <span className={Style.sTextG}>Processing : 1 hours</span>
                  </span>
                </span>
              </span>
            </Card>
          </Card>
        </Card>
        <ServicesBot />
      </Card>
    </div>
  );
};

export default Services;
