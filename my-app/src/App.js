import React from "react";
import Navbar from "./components/Navbar";

import {Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import Method from "./components/Method";
import Creation from "./components/Creation";
import Favorite from "./components/Favorite";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="method" element={<Method />} />
        <Route path="creation" element={<Creation />} />
        <Route path="favorite" element={<Favorite />} />
     
      </Routes>
     
    
    </>
    
     
  );
}

export default App;

