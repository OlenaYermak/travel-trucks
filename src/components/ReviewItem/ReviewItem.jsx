import React from "react";
import clsx from "clsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Icon from "../Icon/Icon.jsx";
import style from "./ReviewItem.module.css";

const ReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  const initial = reviewer_name.charAt(0);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      <Icon
        className={clsx(style.star, {
          [style.iconStars]: index < reviewer_rating,
        })}
        id="icon-star"
        width="16"
        height="16"
      />
    </span>
  ));

  return (
    <div>
      <div className={style.circleReviewContentWrapper}>
        {" "}
        <div className={style.circle}>
          <p className={style.initial}>{initial}</p>
        </div>
        <div>
          <p className={style.reviewerName}>{reviewer_name}</p>
          <div>{stars}</div>
        </div>
      </div>

      <Paragraph text={comment} className={style.text} />
    </div>
  );
};

export default ReviewItem;
