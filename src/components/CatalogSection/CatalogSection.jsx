import React from "react";
import CamperList from "../CamperList/CamperList";
import Button from "../Button/Button";
import style from "./CatalogSection.module.css";

const CatalogSection = ({ campers, handleLoadMore, hasMore }) => {
 
  return (
    <section className={style.catalog}>
      <CamperList campers={campers} />
      {hasMore && (
        <Button text={"Load more"} type={"button"} onClick={handleLoadMore} />
      )}
    </section>
  );
};

export default CatalogSection;
