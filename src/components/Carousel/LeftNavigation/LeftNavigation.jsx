import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import style from "./LeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/leftNavigation.svg";
const LeftNavigation = () => {
  const swiper = useSwiper();

  const [isBegining, setIsBegining] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  });

  return (
    <div className={style.leftNavigation}>
      {!isBegining && (
        <LeftArrow onClick={() => swiper.slidePrev()}></LeftArrow>
      )}
    </div>
  );
};

export default LeftNavigation;
