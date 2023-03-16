import React, { useEffect, useState } from "react";
// import { fetchSongs } from "../../../api/BackendApiCalls";
import Card from "../../Card/Card";
import Carousal from "../../Carousal/Carousal";
import SongGenre from "./SongGenre";
import styles from "./SongSection.module.css";

const SongSection = ({ sectionTitle, dataSource }) => {
  const [cardsData, setCardsData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState("All");

  const setCurrentGenre = (val) => {
    setGenre(val);
  };

  const [fetchSongGenres, fetchSongs] = dataSource;

  const setSongsData = (val) => {
    if (val === "All") {
      fetchSongs().then((song) => {
        setCardsData(song);
      });
    } else {
      fetchSongs(val).then((song) => {
        setCardsData(song);
      });
    }
  };

  useEffect(() => {
    fetchSongGenres().then((genre) => {
      setGenres(genre);
    });

    fetchSongs().then((song) => {
      setCardsData(song);
    });
  }, []);
  console.log("genres: ", genres);

  return (
    <div>
      <div>
        {/* Section Header */}

        <div className={styles.songSectionHeader}>
          {/* Title */}
          <h4 className={styles.songSectionTitle}>{sectionTitle}</h4>
          {/* Collapse/ShowAll */}
        </div>

        {/* Genres Section */}
        <div>
          <SongGenre
            genres={genres}
            currentGenre={genre}
            setCurrentGenre={setCurrentGenre}
            setSongsData={setSongsData}
          />
        </div>

        {/* Cards  Carousal */}
        <div>
          <Carousal
            data={cardsData}
            renderReturn={(data) => <Card data={data} type="song" />}
          />
        </div>
      </div>
    </div>
  );
};

export default SongSection;
