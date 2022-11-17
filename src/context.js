import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "https://api.jikan.moe/v4/anime?q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("naruto");
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);

  function addToFavorite(newItem) {
    setFavoriteItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromFavorite(id) {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const fetchAnimes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const animeData = await response.json();

      const { data } = animeData;
      // console.log(data);
      if (data) {
        const newAnimes = data.slice(0, 20).map((animeSingle) => {
          const { mal_id, images, score, rank, episodes, year, title } =
            animeSingle;

          return {
            id: mal_id,
            episodes: episodes,
            rank: rank,
            cover_id: images.webp.large_image_url,
            score: score,
            first_publish_year: year,
            title: title,
          };
        });

        setAnimes(newAnimes);

        if (newAnimes.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setAnimes([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchAnimes();
  }, [searchTerm, fetchAnimes]);

  return (
    <AppContext.Provider
      value={{
        loading,
        animes,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
