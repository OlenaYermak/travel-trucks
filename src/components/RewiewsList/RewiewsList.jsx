import React, { useEffect, useState } from "react";
import ReviewItem from "../ReviewItem/ReviewItem.jsx";
import { detailsCamper } from "../../comper-api.js";
import style from "./RewiewsList.module.css";

const ReviewsList = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadCamper() {
      try {
        const data = await detailsCamper(id);

        setReviews(data.reviews);
      } catch (error) {
        console.error(`Error loading camper with ID ${id}:`, error);
      }
    }

    loadCamper();
  }, [id]);

  return (
    <ul>
      {reviews.map((review, index) => (
        <li className={style.listItem} key={index}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
