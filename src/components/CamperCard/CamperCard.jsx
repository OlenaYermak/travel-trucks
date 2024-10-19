import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon.jsx";
import Image from "../Image/Image.jsx";
import CamperName from "../CamperName/CamperName.jsx";
import CamperPrice from "../CamperPrice/CamperPrice.jsx";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import CategoryList from "../CategoryList/CategoryList.jsx";
import Button from "../Button/Button.jsx";
import style from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const {
    price,
    rating,
    location,
    description = "",
    gallery = [],
    reviews,
    ...features
  } = camper;

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((fav) => fav.id === camper.id);
  });

  const navigate = useNavigate();

  const imageUrl = gallery[0]?.original;

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== camper.id);
    } else {
      favorites = [...favorites, camper];
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const handleShowMoreClick = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <div className={style.cardContainer}>
      <Image src={imageUrl} alt={camper.name} />
      <div className={style.contentWrapper}>
        <div className={style.namePriceWrapper}>
          <CamperName name={camper.name} />
          <div className={style.priceIconWrapper}>
            <CamperPrice price={price} />
            <button
              type="button"
              className={`${style.favoriteButton} ${
                isFavorite ? style.favorite : ""
              }`}
              onClick={toggleFavorite}
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Icon
                id="icon-heart"
                width="26"
                height="24"
                className={style.favoriteIcon}
              />
            </button>
          </div>
        </div>
        <CamperDetails
          rating={rating}
          reviewsLength={reviews.length}
          location={location}
        />

        <Paragraph className={style.textDescription} text={description} />
        <CategoryList categories={features} />

        <Button
          text={"Show more"}
          type={"button"}
          onClick={handleShowMoreClick}
        />
      </div>
    </div>
  );
};

export default CamperCard;
