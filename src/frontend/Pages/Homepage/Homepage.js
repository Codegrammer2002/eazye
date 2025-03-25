// src/pages/Homepage.jsx
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";


const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center text-center px-4 py-10 relative">
        <h1 className="text-4xl font-black leading-tight mb-4">
          <span className="text-orange-500">DIVE</span> INTO THE <br />
          GREATNESS OF <span className="text-green-600">LEARNING.</span>
        </h1>
        <p className="max-w-xl text-gray-600 mb-6 text-sm">
          Online educational platform for digital skills where students<br />
          make their dreams come true by designing real projects
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-md mb-4 flex items-center border border-blue-400 rounded-full px-4 py-2 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm"
          />
          <button className="text-blue-600 text-lg">🔍</button>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-700 mb-10">
          <span>Suggestions :</span>
          {["Economics", "English", "French", "English"].map((tag, i) => (
            <span
              key={i}
              className="bg-white border border-blue-500 text-blue-600 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <div className="text-center">
            <p className="text-yellow-500 font-bold text-2xl">1000+</p>
            <p className="font-semibold text-sm">Courses to choose from</p>
          </div>
          <div className="text-center">
            <p className="text-blue-500 font-bold text-2xl">5000+</p>
            <p className="font-semibold text-sm">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-orange-500 font-bold text-2xl">200+</p>
            <p className="font-semibold text-sm">Professional Trainers</p>
          </div>
        </div>

        {/* Images Section (replace with real images) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
          <div className="bg-blue-100 w-40 h-40 rounded-full shadow-inner"></div>
          <div className="bg-yellow-200 w-40 h-40 rounded-xl shadow-inner"></div>
          <div className="bg-green-200 w-40 h-40 rounded-xl shadow-inner"></div>
          <div className="bg-red-300 w-40 h-40 rounded-full shadow-inner"></div>
          <div className="bg-orange-300 w-40 h-40 rounded-full shadow-inner"></div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
