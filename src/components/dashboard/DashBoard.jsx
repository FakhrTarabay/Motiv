import React from "react";
import css from "./DashBoard.module.css";
import Card from "../general/card/Card";
import light from "../svg/light.svg";
import Progress from "../MUI/Progress";
const DashBoard = () => {
  return (
    <div className={css.dashDiv}>
      <div className={css.firstRow}>
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>
      </div>
      <div className={css.firstRow}>
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>
      </div>
      <div className={css.firstRow}>
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>
      </div>
      <div className={css.firstRow}>
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>{" "}
        <Card>
          <img src={light} />
          <span className={css.cardText}>Energy</span>
          <Progress value={80} />
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
