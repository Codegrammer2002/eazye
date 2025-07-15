import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Navbar = () => {
  const navigate = useNavigate(); // Create navigate functionw
   // Handle the navigation
   const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };
  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the login page
  };
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
    {/* Left: Logo */}
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="Company Logo" className="h-12" />
      <span className="text-xl font-bold text-blue-700 tracking-wide">EAZYE</span>
      <span className="text-xs text-gray-500 ml-1">Hire to Inspire</span>
    </div>

    {/* Middle: Nav Links */}
    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
      <a href="/" className="text-blue-600">Home</a>
      <a href="/about" className="hover:text-blue-500">About Us</a>
      <a href="/teachers" className="hover:text-blue-500">Teacher’s Portal</a>
      <a href="/studentdashboard" className="hover:text-blue-500">Student’s Portal</a>
    </div>

    {/* Right: Search + Buttons */}
    <div className="flex items-center space-x-4">
      {/* Search bar */}
      <div className="flex items-center border rounded-full px-3 py-1">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm w-32 md:w-44"
        />
        <button className="text-white bg-blue-600 p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2">
          🔍
        </button>
      </div>
      {/* Login button */}
      <button
        onClick={handleLoginClick} // On click, navigate to login page
        className="text-white bg-blue-600 px-4 py-1 rounded-full text-sm"
      >
        Login
      </button>
      <button onClick={handleSignupClick}
      className="text-blue-600 border border-blue-600 px-4 py-1 rounded-full text-sm">Signup</button>
    </div>
  </nav>
  );
};

export default Navbar;
