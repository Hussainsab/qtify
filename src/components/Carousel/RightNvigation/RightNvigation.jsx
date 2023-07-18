import React from "react";
import style from "./RightNvigation.module.css";
import { ReactComponent as RightArraow } from "../../../assets/rightNavigation.svg";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import { useEffect } from "react";
const RightNvigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  });
  return (
    <div className={style.rightNavigation}>
      {!isEnd && <RightArraow onClick={() => swiper.slideNext()}></RightArraow>}
    </div>
  );
};

export default RightNvigation;
