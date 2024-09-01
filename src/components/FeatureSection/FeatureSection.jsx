import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailsCamper } from "../../comper-api.js";
import CategoryList from "../CategoryList/CategoryList.jsx";
import Features from "../Features/Features.jsx";
import style from "./FeatureSection.module.css";

const FeatureSection = () => {
  const { id } = useParams();

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

  const categories = {
    AC: camper.AC,
    bathroom: camper.bathroom,
    kitchen: camper.kitchen,
    TV: camper.TV,
    radio: camper.radio,
    refrigerator: camper.refrigerator,
    microwave: camper.microwave,
    gas: camper.gas,
    water: camper.water,
  };

  return (
    <section className={style.featuresSection}>
      <CategoryList categories={categories} />

      <Features id={id} />
    </section>
  );
};

export default FeatureSection;
