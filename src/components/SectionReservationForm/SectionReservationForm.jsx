import React from "react";
import TitleH3 from "../TitleH3/TitleH3.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import ReservationForm from "../ReservationForm/ReservationForm.jsx";
import style from "./SectionReservationForm.module.css";

const SectionReservationForm = () => {
  return (
    <section className={style.sectionReservForm}>
      <div className={style.wpapperText}>
        <TitleH3 className={style.title} text={"Book your campervan now"} />
        <Paragraph text={"Stay connected! We are always ready to help you"} />
      </div>
      <ReservationForm />
    </section>
  );
};

export default SectionReservationForm;
