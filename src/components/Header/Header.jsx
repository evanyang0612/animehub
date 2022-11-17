import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your anime of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Animehub uses Jikan which is an API developed from MyAnimeList,
            allowing our user to search anime they're interested in, and get
            detail of animes.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
