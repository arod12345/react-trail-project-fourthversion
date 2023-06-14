import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Documents, Home, Welcome } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/search" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
