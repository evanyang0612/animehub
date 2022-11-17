import React from "react";
import "./Favorite.css";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { useGlobalContext } from "../../context";

const Favorite = () => {
  const { favoriteItems } = useGlobalContext();
  const favoriteItemElements = favoriteItems.map((anime) => (
    <FavoriteItem key={anime.id} anime={anime} />
  ));

  return (
    <section className="animelist">
      <div className="container">
        <div className="section-title">
          <h2>Favorite List</h2>
        </div>
        <div className="animelist-content grid">{favoriteItemElements}</div>
      </div>
    </section>
  );
};

export default Favorite;
