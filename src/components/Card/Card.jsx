import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  switch (type) {
    case "album": {
      const { id, image, title, follows, songs } = data;

      return (
        <Tooltip title={songs.length + " Songs"} placement="top" arrow key={id}>
          <div className={style.wrapper}>
            <div className={style.card}>
              <img src={image} alt={type}></img>
              <div className={style.banner}>
                <Chip
                  label={follows + " follows"}
                  size="small"
                  className={style.chip}
                ></Chip>
              </div>
            </div>
            <div className={style.cardtitle}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }

    case "songs": {
      const { id, image, title, likes } = data;
      return (
        <div className={style.wrapper} key={id}>
          <div className={style.card}>
            <img src={image} alt={type}></img>
            <div className={style.banner}>
              <Chip
                label={likes + " Likes"}
                size="small"
                className={style.chip}
              ></Chip>
            </div>
          </div>
          <div className={style.cardtitle}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return <></>;
  }
};

export default Card;
