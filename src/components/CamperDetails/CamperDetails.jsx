import React from "react";
import Icon from "../Icon/Icon.jsx";
import style from "./CamperDetails.module.css";

const CamperDetails = ({ rating, reviewsLength, location, className = "" }) => {
  return (
    <div className={`${style.detailsWrapper} ${className}`}>
      <div className={style.ratingWrapper}>
        <Icon
          className={style.iconStars}
          id="icon-star"
          width="16"
          height="16"
        />
        <p className={style.ratingText}>
          {rating} ({reviewsLength} Reviews)
        </p>
      </div>
      <div className={style.locationWrapper}>
        <Icon id="icon-Map" width="16" height="16" />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default CamperDetails;
