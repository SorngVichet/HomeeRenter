import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Categories from "./components/Categories.jsx";
import Contactpage from "./components/Contactpage.jsx";
import About from "./components/Aboutpage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/HomeeRenter/" element={<Homepage />} />
        <Route path="/HomeeRenter/categoires" element={<Categories />} />
        <Route path="/HomeeRenter/contact" element={<Contactpage />} />
        <Route path="/HomeeRenter/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
