import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import DetBook from "./components/DetBook";
import DetHouse from "./components/DetHouse";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/detbook/:id" element={<DetBook />} />
        <Route path="/dethouse/:id" element={<DetHouse />} />
      </Routes>
    </Router>
  );
}

export default App;
