import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AnimeList from "./components/AnimeList/AnimeList";
import AnimeDetails from "./components/AnimeDetails/AnimeDetails";
import Favorite from "./pages/Favorite/Favorite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="anime" element={<AnimeList />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
