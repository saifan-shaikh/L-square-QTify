import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousal from "../Carousal/Carousal";
import styles from "./Section.module.css";

const Section = ({ sectionTitle, dataSource }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    dataSource().then(async (data) => {
      setCardsData(data);
    });
  }, []);

  return (
    <div>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        {/* Title */}
        <h4 className={styles.sectionTitle}>{sectionTitle}</h4>
        {/* isCollapse */}
        <h4
          className={styles.collapseButton}
          onClick={() => {
            setIsCollapse((prevState) => !prevState);
          }}
        >
          {isCollapse ? "Show all" : "Collapse"}
        </h4>
      </div>

      {/* Section Body */}
      {!isCollapse ? (
        // Cards Show All
        <div className={styles.cardListShowAll}>
          {cardsData.map((card) => (
            <Card data={card} type="album" />
          ))}
        </div>
      ) : (
        //Cards Collapsed - Carousal
        <div style={{ color: "white" }}>
          <Carousal
            data={cardsData}
            renderReturn={(data) => <Card data={data} type="album" />}
          />
        </div>
      )}
    </div>
  );
};

export default Section;
