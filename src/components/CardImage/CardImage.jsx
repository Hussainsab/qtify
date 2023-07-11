import React from "react";
import style from "./CardImage.module.css";
import cardImage from "../../assets/arijit.webp";

const CardImage = ({ image }) => {
  return <img className={style.cardImage} src={image} alt="albums" />;
};

export default CardImage;
