import React from "react";
import Card from "../../General/Card/Card";
import servOne from "../../svg/servOne.svg";
import servTwo from "../../svg/servTwo.svg";
import servThree from "../../svg/servThree.svg";
import servFour from "../../svg/servFour.svg";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Style from './ServicesBot.module.scss'
const ServicesBot = () => {
  const theme = createTheme({
    palette: {
      one: {
        main: "#A162F7",
      },
      two: {
        main: "#70CF97",
      },
      three: {
        main: "#F6CC0D",
      },
      four: {
        main: "#FF764C",
      },
    },
  });
  return (
    <Card bgColor="#242731" color="#242731" type="row" bShadow="none">
      <div className={Style.offerCol}>
        <img src={servOne} alt="car" width="58px" />
        <span className={Style.cText1}>Oil Level</span>
        <span className={Style.Row}>
          <span className={Style.cTextG}>Engine</span>
          <span className={Style.cTextG}>Don’t Replace</span>
        </span>
        <ThemeProvider theme={theme}>
          <LinearProgress variant="determinate" value={90} color="one" />
        </ThemeProvider>
      </div>
      <div className={Style.offerCol}>
        <img src={servTwo} alt="car" width="58px" />
        <span className={Style.cText2}>Brake Pads</span>
        <span className={Style.Row}>
          <span className={Style.cTextG}>Wheels</span>
          <span className={Style.cTextG}>Still Good</span>
        </span>
        <ThemeProvider theme={theme}>
          <LinearProgress variant="determinate" value={90} color="two" />
        </ThemeProvider>
      </div>
      <div className={Style.offerCol}>
        {" "}
        <img src={servThree} alt="car" width="58px" />
        <span className={Style.cText3}>Steering</span>
        <span className={Style.Row}>
          <span className={Style.cTextG}>Drivetrain</span>
          <span className={Style.cTextG}>Need Change</span>
        </span>
        <ThemeProvider theme={theme}>
          <LinearProgress variant="determinate" value={90} color="three" />
        </ThemeProvider>
      </div>
      <div className={Style.offerCol}>
        {" "}
        <img src={servFour} alt="car" width="58px" />
        <span className={Style.cText4}>Oil Level</span>
        <span className={Style.Row}>
          <span className={Style.cTextG}>Engine</span>
          <span className={Style.cTextG}>Don’t Replace</span>
        </span>
        <ThemeProvider theme={theme}>
          <LinearProgress variant="determinate" value={90} color="four" />
        </ThemeProvider>
      </div>
    </Card>
  );
};

export default ServicesBot;
