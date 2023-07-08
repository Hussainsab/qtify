import React from "react";
import { ReactComponent as HeroImage } from "../../assets/heroImage.svg";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <main className={style.mainSection}>
      <HeroImage />
    </main>
  );
};

export default Hero;
