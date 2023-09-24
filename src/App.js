import "./App.css";
import Zero from "./components/Zero";
import React from "react";
import Title from "./components/Title";
import Application from "./pages/Application";
import Milestones from "./pages/Milestones";
import Chapter from "./pages/Chapter";

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
