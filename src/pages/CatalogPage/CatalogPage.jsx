import React, { useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import CatalogSection from "../../components/CatalogSection/CatalogSection.jsx";
import Container from "../../components/Container/Container.jsx";
import { fetchCamper } from "../../comper-api.js";

import style from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [campers, setCampers] = useState([]);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const filterCampers = (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location
        ? camper.location &&
          camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchesVehicleType = filters.vehicleType
        ? camper.form === filters.vehicleType
        : true;

      const matchesFeatures = Object.entries(filters.features).every(
        ([feature, isSelected]) => {
          return isSelected ? camper[feature] === true : true;
        }
      );

      return matchesLocation && matchesVehicleType && matchesFeatures;
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const displayedCampers = Array.isArray(filteredCampers)
    ? filteredCampers.slice(0, visibleCount)
    : [];

  const hasMore =
    Array.isArray(filteredCampers) && visibleCount < filteredCampers.length;

  useEffect(() => {
    async function getCampers() {
      try {
        const data = await fetchCamper();

        if (data && Array.isArray(data.items)) {
          setCampers(data.items);
          setFilteredCampers(data.items);
        } else {
          console.error("Fetched data does not contain items array:", data);
        }
      } catch (error) {
        console.error("Error fetching campers:", error);
      }
    }
    getCampers();
  }, []);

  const handleFilterSubmit = (filters) => {
    const filtered = filterCampers(campers, filters);

    setFilteredCampers(filtered);
    setVisibleCount(4);
  };

  return (
    <>
      <Container>
        <div className={style.catalogPage}>
          <FilterForm onSubmit={handleFilterSubmit} />
          <CatalogSection
            campers={displayedCampers}
            handleLoadMore={handleLoadMore}
            hasMore={hasMore}
          />
        </div>
      </Container>
    </>
  );
};

export default CatalogPage;
