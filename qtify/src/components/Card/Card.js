import Tooltip from "@mui/material/Tooltip";
import React from "react";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  return (
    <>
      {data ? (
        <Tooltip
          title={type === "album" && `${data.songs.length} songs`}
          placement={"top"}
        >
          <div className={styles.albumCardContainer}>
            <div className={styles.albumCard}>
              <img src={data.image} alt={`${type}img`} loading="lazy" />
              <div className={styles.albumBody}>
                {type === "album" ? (
                  <div className={styles.albumPill}>{data.follows} Follows</div>
                ) : (
                  <div className={styles.albumPill}>{data.likes} Likes</div>
                )}
              </div>
            </div>
            <div className={styles.albumCardTitle}>{data.title}</div>
          </div>
        </Tooltip>
      ) : null}
    </>
  );
};

export default Card;
