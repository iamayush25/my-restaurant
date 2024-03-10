import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Invoice from "./Components/Invoice";
import SearchItem from "./Components/SearchItem";
import Home from "./Components/Home";

function App() {
  return (
    <>
    <SearchItem/>
    <Home/>
    </>
  )
} 

export default App;

