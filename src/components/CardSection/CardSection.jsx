import React from "react";
import Card from "../Card/Card";
import style from "./CardSection.module.css";

const CardSection = ({ albums }) => {
  return (
    <div className={style.CardSection}>
      <div className={style.CardContainer}>
        <div className={style.CardSectionHeading}>
          <h1>Top Albums</h1>
          <button>Collapse</button>
        </div>
        <div className={style.CardSectionBody}>
          {albums.map((element) => {
            return (
              <Card
                key={element.id}
                image={element.image}
                follows={element.follows}
              />
            );
          })}
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
