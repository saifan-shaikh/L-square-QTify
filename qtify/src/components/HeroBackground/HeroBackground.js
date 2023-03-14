import React from "react";
import styles from "./HeroBackground.module.css";
import headphone from "./heroheadphone.png";

const HeroBackground = () => {
  return (
    <div className={styles.heroBackgroundContainer}>
      <div className={styles.heroBackgroundText}>
        <div>100 thousand songs ad-free</div>
        <div>Over thousands Podcast episodes</div>
      </div>
      <div>
        <img className={styles.heroheadphone} src={headphone} alt="headphone" />
      </div>
    </div>
  );
};

export default HeroBackground;
