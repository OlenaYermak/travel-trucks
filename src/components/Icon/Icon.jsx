import React from "react";
import Icons from "../../icons/icons.svg";

const Icon = ({ id, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${Icons}#${id}`} />
    </svg>
  );
};

export default Icon;
