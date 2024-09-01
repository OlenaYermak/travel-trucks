import React from "react";
import style from "./NotFoundPage.module.css";
import PageNotFound from "../../images/pageNotFound.jpg";

const NotFoundPage = () => {
  return (
    <div className={style.notFoundPage}>
      <img src={PageNotFound} alt="Page Not Found" className={style.image} />
    </div>
  );
};

export default NotFoundPage;
