import React, { useEffect, useState } from "react";
import TitleH3 from "../TitleH3/TitleH3.jsx";
import FeaturesText from "../FeaturesText/FeaturesText.jsx";
import { detailsCamper } from "../../comper-api.js";

import style from "./Features.module.css";
const Features = ({ id }) => {
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    async function loadCamper() {
      try {
        const data = await detailsCamper(id);

        setCamper(data);
      } catch (error) {
        console.error(`Error loading camper with ID ${id}:`, error);
      }
    }

    loadCamper();
  }, [id]);

  if (!camper) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.camperFeatures}>
      <TitleH3 text={"Vehicle details"} className={style.title} />
      <ul className={style.featuresList}>
        <li className={style.featuresListItem}>
          <FeaturesText text={"Form:"} /> <FeaturesText text={camper.form} />
        </li>
        <li className={style.featuresListItem}>
          <FeaturesText text={"Length:"} />{" "}
          <FeaturesText text={camper.length} />
        </li>
        <li className={style.featuresListItem}>
          <FeaturesText text={"Width:"} /> <FeaturesText text={camper.width} />
        </li>
        <li className={style.featuresListItem}>
          <FeaturesText text={"Height:"} />{" "}
          <FeaturesText text={camper.height} />
        </li>
        <li className={style.featuresListItem}>
          <FeaturesText text={"Tank:"} /> <FeaturesText text={camper.tank} />
        </li>
        <li className={style.featuresListItem}>
          <FeaturesText text={"Consumption:"} />
          <FeaturesText text={camper.consumption} />
        </li>
      </ul>
    </div>
  );
};

export default Features;
