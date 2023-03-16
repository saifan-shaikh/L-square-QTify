import { StyledEngineProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import {
  fetchNewAlbums,
  fetchSongGenres,
  fetchSongs,
  fetchTopAlbums,
} from "../../api/BackendApiCalls";
import QtifyAccordian from "../Accordian/QtifyAccordian";
import Header from "../Header/Header";
import HeroBackground from "../HeroBackground/HeroBackground";
import AlbumSection from "../Section/AlbumSection/AlbumSection";
import SongSection from "../Section/SongSection/SongSection";

const HomePage = (props) => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        {/* HEADER */}
        <Header />
        {/* Hero Background */}
        <HeroBackground />

        {/* Body */}
        <div style={{ margin: "0 1rem" }}>
          {/* Top Albums */}
          <AlbumSection
            sectionTitle={"Top Albums"}
            dataSource={fetchTopAlbums}
          />
          {/* New Albums */}
          <AlbumSection
            sectionTitle={"New Albums"}
            dataSource={fetchNewAlbums}
          />
          {/* New Songs */}
          <SongSection
            sectionTitle={"Songs"}
            dataSource={[fetchSongGenres, fetchSongs]}
          />
          {/* Accordian */}
          <QtifyAccordian />
        </div>
      </StyledEngineProvider>
    </div>
  );
};

export default HomePage;
