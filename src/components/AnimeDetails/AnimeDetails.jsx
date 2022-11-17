import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./AnimeDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// const URL = "https://openlibrary.org/works/";
// https://api.jikan.moe/v4/anime/{id}/full
const AnimeDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getAnimeDetails() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        const animeData = await response.json();
        const { data } = animeData;

        if (data) {
          const {
            synopsis,
            title,
            images,
            episodes,
            rank,
            score,
            source,
            aired,
            popularity,
          } = data;
          console.log(data);
          const newAnime = {
            description: synopsis
              ? synopsis.split("[Written by MAL Rewrite]")[0]
              : "No description found",
            title: title,
            cover_img: images.webp.large_image_url
              ? images.webp.large_image_url
              : coverImg,
            episodes: episodes ? episodes : "No episode found",
            rank: rank ? rank : "No rank found",
            score: score ? score : "No score found",
            popularity: popularity ? popularity : "No popularity found",
            source: source ? source : "No source found",
            aired: aired ? aired.string : "No aired found",
          };
          setAnime(newAnime);
        } else {
          setAnime(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAnimeDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="anime-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="anime-details-content grid">
          <div className="anime-details-img">
            <img src={anime?.cover_img} alt="cover img" />
          </div>
          <div className="anime-details-info">
            <div className="anime-details-item title">
              <span className="fw-6 fs-24">{anime?.title}</span>
            </div>
            <div className="anime-details-item description">
              <span>{anime?.description}</span>
            </div>
            <div className="anime-details-item">
              <span className="fw-6">Episodes: </span>
              <span className="text-italic">{anime?.episodes}</span>
            </div>
            <div className="anime-details-item">
              <span className="fw-6">Rank: </span>
              <span className="text-italic">{anime?.rank}</span>
            </div>
            <div className="anime-details-item">
              <span className="fw-6">Score: </span>
              <span>{anime?.score}</span>
            </div>
            <div className="anime-details-item">
              <span className="fw-6">Popularity: </span>
              <span>{anime?.popularity}</span>
            </div>
            <div className="anime-details-item">
              <span className="fw-6">Source: </span>
              <span>{anime?.source}</span>
            </div>
            <div className="anime-details-item">
              <span className="fw-6">Aired: </span>
              <span>{anime?.aired.replace("to", " - ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetails;

// {anime.airing === true ? "Air: " : "Aired: "}
