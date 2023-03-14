import React, { useEffect, useState } from "react";
import { fetchTopSongs } from "../../api/BackendApiCalls";
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
        {/* Card */}
        <Section sectionTitle={"Top Albums"} dataSource={fetchTopSongs} />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
