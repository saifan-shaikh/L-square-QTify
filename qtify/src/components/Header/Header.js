import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import FeedbackButton from "./FeedbackButton/FeedbackButton";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./logo.svg";
import SearchBar from "./SearchBar/SearchBar";

import { BsList } from "react-icons/bs";

const Header = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const [navState, setNavState] = useState(false);

  const showNavbar = () => {
    setNavState((prevState) => !prevState);
  };
  return (
    <div>
      {!isTabletOrMobile ? (
        // For Desktop
        <div className={styles.desktopContainer}>
          <div className={styles.logo}>
            {/* Logo */}
            <Logo />
          </div>
          <div>
            {/* Search Bar */}
            <SearchBar />
          </div>
          <div>
            {/* Feedback Button */}
            <FeedbackButton />
          </div>
        </div>
      ) : (
        // For mobile and Tablet devices
        <div className={styles.TabletMobileContainer}>
          <div className={styles.navbar}>
            <div onClick={showNavbar}>
              <BsList className={styles.navList} />
            </div>
            <div className={styles.logo}>
              {/* Logo */}
              <Logo />
            </div>
          </div>
          {navState ? (
            <nav className={styles.navDropdown}>
              {/* Search Bar */}
              <SearchBar />
              {/* Feedback Button */}
              <FeedbackButton />
            </nav>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Header;
