import logo from './logo.svg';
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./frontend/Pages/Homepage/Homepage";
import Login from './frontend/Pages/Login/Login';
import Signup from './frontend/Pages/Signup/Signup';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      );
};

export default App;




