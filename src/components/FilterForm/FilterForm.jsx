import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Downshift from "downshift";
import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";
import TitleH3 from "../TitleH3/TitleH3.jsx";
import FilterItem from "../FilterItem/FilterItem.jsx";
import style from "./FilterForm.module.css";

const locations = [
  "Ukraine, Lviv",
  "Ukraine, Kyiv",
  "Ukraine, Odesa",
  "Ukraine, Kharkiv",
  "Ukraine, Dnipro",
  "Ukraine, Poltava",
  "Ukraine, Sumy",
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : locations.filter((location) =>
        location.toLowerCase().includes(inputValue)
      );
};

const validationSchema = Yup.object({
  location: Yup.string(),
  vehicleType: Yup.string(),
  features: Yup.object({
    AC: Yup.boolean(),
    bathroom: Yup.boolean(),
    kitchen: Yup.boolean(),
    TV: Yup.boolean(),
    transmission: Yup.string().oneOf(["", "automatic", "manual"]),
  }),
});

const FilterForm = ({ onSubmit }) => {
  const [suggestions, setSuggestions] = useState([]);

  const initialValues = {
    location: "",
    vehicleType: "",
    features: {
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
      transmission: "",
    },
  };

  const transmissionOptions = [
    { value: "", text: "All" },
    { value: "automatic", text: "Automatic" },
    { value: "manual", text: "Manual" },
  ];

  const filterItems = [
    { key: "AC", text: "AC", icon: "icon-wind" },
    { key: "bathroom", text: "Bathroom", icon: "icon-bi_droplet" },
    { key: "kitchen", text: "Kitchen", icon: "icon-cup-hot" },
    { key: "TV", text: "TV", icon: "icon-tv" },
    { key: "transmission", text: "Transmission", icon: "icon-diagram" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const flatFeatures = {
          ...values.features,
          transmission: values.features.transmission || "",
        };

        onSubmit({ ...values, features: flatFeatures });
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <label className={style.label} htmlFor="location">
              Location
            </label>
            <div className={style.locationWrapper}>
              <Downshift
                onInputValueChange={(value) => {
                  setSuggestions(getSuggestions(value || ""));
                }}
                onSelect={(selectedItem) => {
                  setFieldValue("location", selectedItem);
                }}
                itemToString={(item) => (item ? item : "")}
              >
                {({
                  getInputProps,
                  getItemProps,
                  getMenuProps,
                  isOpen,
                  highlightedIndex,
                  inputValue,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "City",
                        className: style.input,
                        id: "location",
                      })}
                    />
                    <Icon
                      id="icon-Map"
                      width="20"
                      height="20"
                      className={style.iconLocation}
                    />
                    <ul
                      {...getMenuProps()}
                      className={style.suggestionsList}
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {isOpen &&
                        suggestions
                          .filter((item) =>
                            item
                              .toLowerCase()
                              .includes(inputValue.toLowerCase())
                          )
                          .map((suggestion, index) => (
                            <li
                              key={suggestion}
                              {...getItemProps({
                                index,
                                item: suggestion,
                                style: {
                                  backgroundColor:
                                    highlightedIndex === index
                                      ? "#d84343"
                                      : "white",
                                  color:
                                    highlightedIndex === index
                                      ? "white"
                                      : "#101828",
                                  cursor: "pointer",
                                },
                              })}
                              className={style.suggestionItem}
                            >
                              {suggestion}
                            </li>
                          ))}
                    </ul>
                  </div>
                )}
              </Downshift>
            </div>
          </div>

          <p className={style.filtersText}>Filters</p>
          <div>
            <label className={style.labelType}>
              <TitleH3 text={"Vehicle equipment"} />
            </label>

            <div className={style.equipmentTypeWrapper}>
              {filterItems.map(({ key, text, icon }) => (
                <div
                  key={key}
                  onClick={() =>
                    setFieldValue(
                      key === "transmission"
                        ? "features.transmission"
                        : `features.${key}`,
                      key === "transmission"
                        ? values.features.transmission === "automatic"
                          ? ""
                          : "automatic"
                        : !values.features[key]
                    )
                  }
                >
                  <FilterItem
                    idIcon={icon}
                    width={32}
                    height={32}
                    text={text}
                    isSelected={
                      key === "transmission"
                        ? values.features.transmission === "automatic"
                        : values.features[key]
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className={style.labelType}>
              <TitleH3 text={"Vehicle Type"} />
            </label>
            <div className={style.vehicleTypeWrapper}>
              <div
                onClick={() =>
                  setFieldValue(
                    "vehicleType",
                    values.vehicleType === "panelTruck" ? "" : "panelTruck"
                  )
                }
              >
                <FilterItem
                  idIcon={"icon-bi_grid-1x2"}
                  width={32}
                  height={32}
                  text={"Van"}
                  isSelected={values.vehicleType === "panelTruck"}
                />
              </div>
              <div
                onClick={() =>
                  setFieldValue(
                    "vehicleType",
                    values.vehicleType === "fullyIntegrated"
                      ? ""
                      : "fullyIntegrated"
                  )
                }
              >
                <FilterItem
                  idIcon={"icon-bi_grid"}
                  width={32}
                  height={32}
                  text={"Fully Integrated"}
                  isSelected={values.vehicleType === "fullyIntegrated"}
                />
              </div>
              <div
                onClick={() =>
                  setFieldValue(
                    "vehicleType",
                    values.vehicleType === "alcove" ? "" : "alcove"
                  )
                }
              >
                <FilterItem
                  idIcon={"icon-bi_grid-3x3-gap"}
                  width={32}
                  height={32}
                  text={"Alcove"}
                  isSelected={values.vehicleType === "alcove"}
                />
              </div>
            </div>
          </div>

          <Button text={"Search"} type={"submit"} />
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
