import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import { FavoritesPage } from "./pages/FavoritePage/FavoritesPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="favorites" element={<FavoritesPage />}></Route>
        <Route path="comparing" element={<FavoritesPage />}></Route>
        <Route path="account" element={<FavoritesPage />}></Route>
        <Route path="cart" element={<FavoritesPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
