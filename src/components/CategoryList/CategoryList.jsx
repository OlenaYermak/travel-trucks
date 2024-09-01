import React from "react";
import Icon from "../Icon/Icon.jsx";
import FeaturesText from "../FeaturesText/FeaturesText.jsx";
import style from "./CategoryList.module.css";

const categoryIcons = {
  AC: { iconId: "icon-wind", text: "AC" },
  bathroom: { iconId: "icon-bi_droplet", text: "Bathroom" },
  kitchen: { iconId: "icon-cup-hot", text: "Kitchen" },
  TV: { iconId: "icon-tv", text: "TV" },
  radio: { iconId: "icon-ui-radios", text: "Radio" },
  refrigerator: { iconId: "icon-refrigerator", text: "Refrigerator" },
  microwave: { iconId: "icon-microwave", text: "Microwave" },
  gas: { iconId: "icon-gas", text: "Gas" },
  water: { iconId: "icon-water", text: "Water" },
  transmission: { iconId: "icon-diagram", text: "Transmission" },
  engine: { iconId: "icon-fuel-pump", text: "Engine" },
};

const CategoryList = ({ categories }) => {
  return (
    <ul className={style.wrapper}>
      {Object.entries(categories).map(([key, value]) => {
        if (value && categoryIcons[key]) {
          const { iconId, text } = categoryIcons[key];

          const title =
            key === "transmission" || key === "engine" ? value : text;

          return (
            <li key={key} className={style.item}>
              <Icon id={iconId} width="16" height="16" className={style.icon} />
              <FeaturesText text={title} />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default CategoryList;
