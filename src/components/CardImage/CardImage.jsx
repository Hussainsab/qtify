import React from "react";
import style from "./CardImage.module.css";

const CardImage = ({ image }) => {
  return <img className={style.cardImage} src={image} alt="albums" />;
};

export default CardImage;
