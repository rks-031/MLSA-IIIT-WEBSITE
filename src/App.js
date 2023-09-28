import "./App.css";
import Zero from "./components/Zero.js";
import React from "react";
import Title from "./components/Title.js";
import Application from "./pages/Application.js";
import Milestones from "./pages/Milestones.js";
import Chapter from "./pages/Chapter.js";

// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Zero />} />
          <Route path="/home" element={<Title />} />
          <Route path="/application" element={<Application />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/chapter" element={<Chapter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
