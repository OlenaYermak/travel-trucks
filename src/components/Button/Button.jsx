import React from "react";
import clsx from "clsx";
import style from "./Button.module.css";

const Button = ({ text, onClick, type }) => {
  return (
    <button
      className={clsx(style.btn, {
        [style.loadMoreBtn]: text === "Load more",
        [style.otherBtn]: text !== "Load more",
      })}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
