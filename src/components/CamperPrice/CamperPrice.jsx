import React from "react";
import style from "./CamperPrice.module.css";

const CamperPrice = ({ price, className = "" }) => {
  const formattedPrice = Number(price).toFixed(2);
  return <h2 className={`${style.price} ${className}`}>€{formattedPrice}</h2>;
};

export default CamperPrice;
