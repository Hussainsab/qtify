import React from "react";
import style from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, type, data }) => {
  const [toggle, setToggle] = useState(false);
  const hangleToggle = (e) => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className={style.header}>
        <h3>{title}</h3>
        <h4 className={style.toggleText} onClick={hangleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <div className={style.cardWrapper}>
          {toggle ? (
            <div className={style.wrapper}>
              {data.map((album) => {
                return <Card data={album} type={type} key={album.id}></Card>;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(item) => <Card data={item} type={type}></Card>}
            ></Carousel>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
