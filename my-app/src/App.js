import React from "react";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

import Creation from "./components/Creation";
import Favorite from "./components/Favorite";
import FoodDetails from "./components/FoodDetails"
  import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="recipe/:id" element={<FoodDetails />} />
        <Route path="creation" element={<Creation />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
