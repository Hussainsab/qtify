import React from "react";
import style from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";

const Section = ({ title, type, data, filter }) => {
  const [toggle, setToggle] = useState(false);

  console.log("type = ", type + " data.length = ", data.length);
  const hangleToggle = (e) => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className={style.header}>
        <h3>{title}</h3>
        {type !== "songs" && (
          <h4 className={style.toggleText} onClick={hangleToggle}>
            {!toggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>
      {type === "songs" && (
        <Filter
          filterSong={(keys) => {
            console.log("key from section = ", keys);
            filter(keys);
          }}
        />
      )}
      {data.length === 0 ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <div className={style.cardWrapper}>
          {toggle ? (
            <div className={style.wrapper}>
              {data.map((album) => {
                console.log("i am data");
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
