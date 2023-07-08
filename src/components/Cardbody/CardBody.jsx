import React from "react";
import style from "./CardBody.module.css";
import CardImage from "../CardImage/CardImage";
const CardBody = () => {
  return (
    <div className={style.cardBody}>
      <CardImage />
      <div className={style.cardft}>
        <button>100 Follows</button>
      </div>
    </div>
  );
};

export default CardBody;
