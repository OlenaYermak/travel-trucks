import React from "react";
import style from "./Image.module.css";
import fallbackImage from "../../images/imageNo.jpg";

const Image = ({
  src,
  alt,
  className = "",
  fallbackSrc = fallbackImage,
  onClick,
}) => {
  return (
    <div className={style.imageWrapper}>
      <img
        src={src}
        alt={alt}
        className={`${style.image} ${className}`}
        onError={(e) => {
          e.target.src = fallbackSrc;
        }}
        onClick={onClick ? onClick : undefined}
      />
    </div>
  );
};

export default Image;
