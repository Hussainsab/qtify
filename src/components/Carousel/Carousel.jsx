import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import style from "./Carousel.module.css";
import RightNvigation from "./RightNvigation/RightNvigation";
import LeftNavigation from "./LeftNavigation/LeftNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 0, true);
  }, [data]);
};

const Carousel = ({ data, component }) => {
  console.log(data);
  return (
    <div className={style.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNavigation />
        <RightNvigation />
        {data.map((item) => {
          return (
            <SwiperSlide className={style.cardSwipe} key={item.id}>
              {component(item)}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
