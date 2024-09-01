import React from "react";
import clsx from "clsx";
import style from "./Paragraph.module.css";

const Paragraph = ({ text, className }) => {
  return <p className={clsx(style.paragraph, className)}>{text}</p>;
};

export default Paragraph;
