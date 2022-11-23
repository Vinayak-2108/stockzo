import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Blog from "./components/Blog";
import "./App.css";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer/> */}
    </>
  );
};

export default App;
