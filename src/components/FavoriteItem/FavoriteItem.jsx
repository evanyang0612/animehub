import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import useHover from "../../hooks/useHover";
import "./FavoriteItem.css";

export default function FavoriteItem({ anime }) {
  const [hovered, ref] = useHover();
  const { removeFromFavorite, addToFavorite, favoriteItems } =
    useGlobalContext();

  function heartIcon() {
    const alreadyFavorited = favoriteItems.some((item) => item.id === anime.id);
    if (alreadyFavorited) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => removeFromFavorite(anime.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => addToFavorite(anime)}
        ></i>
      );
    }
  }

  return (
    <div className="anime-item flex flex-column flex-sb" ref={ref}>
      <Link to={`/anime/${anime.id}`} {...anime}>
        <div className="anime-item-img">
          <img src={anime.cover_img} alt="cover" />
        </div>
      </Link>
      {heartIcon()}
      <div className="anime-item-info text-center">
        <Link to={`/anime/${anime.id}`} {...anime}>
          <div className="anime-item-info-item title fw-7 fs-18">
            <span>{anime.title}</span>
          </div>
        </Link>

        <div className="anime-item-info-item rank fs-15">
          <span className="text-capitalize fw-7">Rank: </span>
          <span>
            {anime.rank === 0 || anime.rank === null ? " - " : anime.rank}
          </span>
        </div>

        <div className="anime-item-info-item score fs-15">
          <span className="text-capitalize fw-7">Score: </span>
          <span>{anime.score === null ? " - " : anime.score}</span>
        </div>

        <div className="anime-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">First Publish: </span>
          <span>
            {anime.first_publish_year === null
              ? " - "
              : anime.first_publish_year}
          </span>
        </div>
      </div>
    </div>
  );
}
