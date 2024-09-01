import React, { useEffect, useState } from "react";
import { detailsCamper } from "../../comper-api.js";
import CamperName from "../CamperName/CamperName.jsx";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import CamperPrice from "../CamperPrice/CamperPrice.jsx";
import ImageGalleryCamper from "../ImageGalleryCamper/ImageGalleryCamper.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";

import style from "./CamperCardMore.module.css";

const CamperCardMore = ({ id }) => {
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

  if (!camper) return <p>Loading...</p>;

  return (
    <div className={style.wrapper}>
      <div>
        <CamperName name={camper.name} className={style.name} />
        <CamperDetails
          rating={camper.rating}
          reviewsLength={camper.reviews.length}
          location={camper.location}
          className={style.detailsWrapper}
        />
        <CamperPrice price={camper.price} className={style.price} />
      </div>

      <ImageGalleryCamper gallery={camper.gallery} />
      <Paragraph text={camper.description} />
    </div>
  );
};

export default CamperCardMore;
