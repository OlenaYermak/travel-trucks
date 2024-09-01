import React from "react";
import style from "./FeaturesText.module.css";

const FeaturesText = ({ text }) => {
  return <p className={style.text}>{text}</p>;
};

export default FeaturesText;
