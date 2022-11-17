import React from "react";
import { useGlobalContext } from "../../context";
import Anime from "../AnimeList/Anime";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./Anime.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const AnimeList = () => {
  const { animes, loading, resultTitle } = useGlobalContext();
  const animesWithCovers = animes.map((singleAnime) => {
    return {
      ...singleAnime,
      // removing /works/ to get only id
      id: singleAnime.id,
      cover_img: singleAnime.cover_id ? `${singleAnime.cover_id}` : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="animelist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="animelist-content grid">
          {animesWithCovers.slice(0, 30).map((item, index) => {
            return <Anime key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimeList;
