import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import JokiTugas from "./JokiTugas.tsx";
import Undangan from "./Undangan.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/">
      {" "}
      {/* Replace with your actual GitHub repo name */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/joki-tugas" element={<JokiTugas />} />
        <Route path="/undangan" element={<Undangan />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
