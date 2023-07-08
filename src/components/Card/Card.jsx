import React from "react";
import CardBody from "../Cardbody/CardBody";
import CardFooter from "../CardFooter/CardFooter";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default Card;
