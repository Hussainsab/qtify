import React from "react";
import CardBody from "../Cardbody/CardBody";
import CardFooter from "../CardFooter/CardFooter";
import style from "./Card.module.css";

const Card = ({ image, follows }) => {
  return (
    <div className={style.card}>
      <CardBody image={image} follows={follows} />
      <CardFooter />
    </div>
  );
};

export default Card;
