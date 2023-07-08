import React from "react";
import style from "./CardImage.module.css";
import cardImage from "../../assets/arijit.webp";

const CardImage = () => {
  return <img className={style.cardImage} src={cardImage} alt="arijit song" />;
};

export default CardImage;
