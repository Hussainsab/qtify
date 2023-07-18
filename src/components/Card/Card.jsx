import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  switch (type) {
    case "album": {
      const { id, image, title, follows, slug, songs } = data;

      return (
        <Tooltip title={songs.length + "Songs"} placement="top" arrow key={id}>
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
      return <Tooltip title={likes}></Tooltip>;
    }

    default:
      return <></>;
  }
};

export default Card;
