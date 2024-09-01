import React from "react";
import style from "./CamperName.module.css";

const CamperName = ({ name, className = "" }) => {
  return <h2 className={`${style.name} ${className}`}>{name}</h2>;
};

export default CamperName;
