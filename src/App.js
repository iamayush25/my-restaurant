import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchItem from "./Components/SearchItem/SearchItem";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <SearchItem />
    </>
  );
}

export default App;
