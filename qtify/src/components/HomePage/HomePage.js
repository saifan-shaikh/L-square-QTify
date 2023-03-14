import React, { useEffect, useState } from "react";
import { fetchNewAlbums, fetchTopAlbums } from "../../api/BackendApiCalls";
import Card from "../Card/Card";
import Header from "../Header/Header";
import HeroBackground from "../HeroBackground/HeroBackground";
import Section from "../Section/Section";

const HomePage = (props) => {
  return (
    <div>
      {/* HEADER */}
      <Header />
      {/* Hero Background */}
      <HeroBackground />

      {/* Body */}
      <div style={{ margin: "0 1rem" }}>
        {/* Top Albums */}
        <Section sectionTitle={"Top Albums"} dataSource={fetchTopAlbums} />
        {/* New Albums */}
        <Section sectionTitle={"New Albums"} dataSource={fetchNewAlbums} />
      </div>
    </div>
  );
};

export default HomePage;
