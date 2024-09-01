import Icon from "../Icon/Icon.jsx";
import FeaturesText from "../FeaturesText/FeaturesText.jsx";

import style from "./FilterItem.module.css";

const FilterItem = ({ idIcon, width, height, text, isSelected }) => {
  return (
    <div className={`${style.container} ${isSelected ? style.selected : ""}`}>
      <div className={style.wrapper}>
        <Icon id={idIcon} width={width} height={height} />
        <FeaturesText text={text} />
      </div>
    </div>
  );
};

export default FilterItem;
