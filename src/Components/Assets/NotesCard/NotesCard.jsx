import React from "react";
import Style from "./NotesCard.module.scss";
import NotesRow from "./NotesRow/NotesRow";
import Card from "../../General/Card/Card";
import Divider from "@mui/material/Divider";
import caution from "../../svg/caution.svg";
import wrench from "../../svg/wrench.svg";
import msg from "../../svg/msg2.svg";

const NotesCard = () => {
  return (
    <Card color="#242731" bgColor="#242731" maxW="49%" bShadow="none">
      <span className={Style.Text}>Noties</span>
      <Divider
        orientation="horizontal"
        sx={{ backgroundColor: "#333642", borderWidth: "2px" }}
      />
      <NotesRow
        imgSrc={msg}
        text1="Monday, 6th Apirl 2020"
        text2="Book for General Service"
      />
      <NotesRow
        imgSrc={caution}
        text1="Thursday, 24th October 2021"
        text2="Vehicle LV 001 has been marked for recall."
      />
      <NotesRow
        imgSrc={wrench}
        text1="Monday, 13th August 2018"
        text2="Maintenance Completed, Collect"
      />
    </Card>
  );
};

export default NotesCard;
