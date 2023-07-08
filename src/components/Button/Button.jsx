import React from "react";
import stlyes from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={stlyes.button}>{children}</button>;
};

export default Button;
