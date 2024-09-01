import React from "react";
import style from "./ReviewsSection.module.css";
import ReviewsList from "../RewiewsList/RewiewsList.jsx";
import { useOutletContext } from "react-router-dom";

const ReviewsSection = () => {
  const { id } = useOutletContext();

  return (
    <section className={style.reviewsSection}>
      <ReviewsList id={id} />
    </section>
  );
};

export default ReviewsSection;
