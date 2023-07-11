import React from "react";
import style from "./CardBody.module.css";
import CardImage from "../CardImage/CardImage";
const CardBody = ({ image, follows }) => {
  return (
    <div className={style.cardBody}>
      <CardImage image={image} />
      <button>{follows} Follows</button>
    </div>
  );
};

export default CardBody;
