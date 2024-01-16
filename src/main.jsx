import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Pages/Landing/index.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Landing />
    </Router>
  </React.StrictMode>
);
