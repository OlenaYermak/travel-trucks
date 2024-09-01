// import React from "react";
// import style from "./TitleH3.module.css";

// const TitleH3 = ({ text, className = "" }) => {
//   return{
//   <div>
//     <h3 className={`${style.title} ${className}`}>{text}</h3>;
//   </div>}
// };

// export default TitleH3;
import React from "react";
import clsx from "clsx";
import style from "./TitleH3.module.css";

const TitleH3 = ({ text, className = "" }) => {
 
  const hasKeyword =
    text.toLowerCase().includes("vehicle") ||
    text.toLowerCase().includes("features");

  return (
    <div
      className={clsx(style.wrapper, className, {
        [style.highlighted]: hasKeyword,
      })}
    >
      <h3 className={style.title}>{text}</h3>
    </div>
  );
};

export default TitleH3;
