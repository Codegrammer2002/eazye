import logo from './logo.svg';
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./frontendAtrr/Pages/Homepage/Homepage";
import Login from './frontendAtrr/Pages/Login/Login';
import Signup from './frontendAtrr/Pages/Signup/Signup';
import TeacherProfile from './frontendAtrr/Pages/TeacherProfile/TeacherProfile.js';
import CourseDetail from './frontendAtrr/Pages/CourseDetail/CourseDetail.js';
import StudentDashboard from './frontendAtrr/Pages/StudentDashboard.js';
import CourseOverview from './frontendAtrr/Pages/CourseOverview/CourseOverview.js';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="coursedetail" element={<CourseDetail />} />
        <Route path="/teacher" element={<TeacherProfile />} />
        <Route path="/teacher/:teacherName" element={<TeacherProfile />} />
        <Route path="/courseoverview" element={<CourseOverview />} />

      </Routes>
    </Router>
      );
};

export default App;




