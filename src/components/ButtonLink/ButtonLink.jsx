import React from "react";
import styles from "./ButtonLink.module.css";

const ButtonLink = ({ text, href }) => {
  return (
    <a href={href} className={styles.buttonLink}>
      {text}
    </a>
  );
};

export default ButtonLink;
