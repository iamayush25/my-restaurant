import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import AboutMe from "./Components/About/About";
import ContactPage from "./Components/ContactUs/ContactUs";
import DisplayItems from "./Components/DisplayItems/DisplayItems";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/items/:category" element={<DisplayItems />} />
      </Routes>
    </Router>
  );
}

export default App;
