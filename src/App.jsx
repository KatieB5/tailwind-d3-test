import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { WorldMap } from "./components/WorldMap";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/worldmap" element={<WorldMap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
