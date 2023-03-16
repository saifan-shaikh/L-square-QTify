import React, { useRef, useState } from "react";
import "./SongGenre.module.css";
import styles from "./SongGenre.module.css";

const SongGenre = ({
  genres,
  currentGenre = "All",
  setCurrentGenre,
  setSongsData,
}) => {
  console.log("current Genre: ", currentGenre);

  return (
    <div>
      {genres ? (
        <div className={styles.songGenresContainer}>
          <button
            value={"All"}
            className={
              currentGenre === "All"
                ? styles.genreSelected
                : styles.genreNotSelected
            }
            onClick={(e) => {
              setCurrentGenre(e.target.value);
              setSongsData("All");
            }}
          >
            All
          </button>
          {genres.map((ele) => {
            return (
              <button
                value={ele.label}
                className={
                  currentGenre === ele.label
                    ? styles.genreSelected
                    : styles.genreNotSelected
                }
                onClick={(e) => {
                  setCurrentGenre(e.target.value);
                  setSongsData(e.target.value);
                }}
              >
                {ele.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SongGenre;
