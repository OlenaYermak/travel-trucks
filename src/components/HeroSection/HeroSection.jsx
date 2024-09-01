import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";
import Container from "../Container/Container.jsx";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <Container>
          <h1 className={style.heroTitle}>Campers of your dreams</h1>
          <h2 className={style.heroText}>
            You can find everything you want in our catalog
          </h2>
          <ButtonLink text="View Now" href="/catalog" />
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
