import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";
import Carousal from "../../Carousal/Carousal";
import styles from "./AlbumSection.module.css";

const AlbumSection = ({ sectionTitle, dataSource }) => {
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
      <div className={styles.albumSectionHeader}>
        {/* Title */}
        <h4 className={styles.albumSectionTitle}>{sectionTitle}</h4>
        {/* Collapse/ShowAll */}
        <h4
          className={styles.albumCollapseButton}
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
            <Card key={card.id} data={card} type="album" />
          ))}
        </div>
      ) : (
        //Cards Collapsed - Carousal
        <div>
          <Carousal
            data={cardsData}
            renderReturn={(data) => <Card data={data} type="album" />}
          />
        </div>
      )}
    </div>
  );
};

export default AlbumSection;
