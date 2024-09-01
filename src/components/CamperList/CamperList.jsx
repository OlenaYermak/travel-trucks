import React from "react";
import CamperCard from "../CamperCard/CamperCard";
import styles from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  const camperItems = campers || [];

  if (!Array.isArray(camperItems) || camperItems.length === 0) {
    return <p>No campers available</p>;
  }

  return (
    <div className={styles.camperList}>
      <ul className={styles.camperList}>
        {camperItems.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperList;
