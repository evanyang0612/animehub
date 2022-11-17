import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About AnimeHub</h2>
            <p className="fs-17">
              Hi, I am Evan Yang, I build this project using React, React
              Router. All of the anime data is coming from an API called Jikan
              which is developed with MyAnimeList. <br />
              <br />
              MyAnimeList is one of the most famous anime community website that
              you can easily search for all anime details.
            </p>
            <p className="fs-17">
              Hope you enjoy the AnimeHub WebApp, if you have any suggestion or
              you just want to say Hi, please feel free to contact me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
