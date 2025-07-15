import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userType, setUserType] = useState(""); // 'teacher' or 'student'
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    educationLevel: "",
    degree: "",
    institution: "",
    country: "",
    yearsOfExperience: "",
    subjects: "",
    expertise: "",
    languages: "",  // Changed to a text input
    schoolType: "",
    grade: "",
    schoolName: "",
    helpTopics: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your logic to handle the form submission (e.g., API call)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full sm:w-3/4 lg:w-1/2 bg-white p-10 rounded-lg shadow-lg space-y-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sign Up</h1>
          <p className="text-sm text-gray-500 mb-8">
            Create an account to start your journey
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            {/* Basic Info */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* User Type Selector */}
            <div className="flex space-x-4">
              <label className="text-sm">Select User Type:</label>
              <select
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="">Select...</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* Conditional Fields */}
            {userType === "teacher" && (
              <div>
                {/* Teacher-specific fields */}
                <input
                  type="text"
                  name="educationLevel"
                  placeholder="Level of Education"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Where did you receive your latest degree from?"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution Name"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country of Education"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleSelectChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Years of Teaching Experience</option>
                  <option value="0-3">Beginning Teachers (0-3 years)</option>
                  <option value="4-5">Transitioning Teachers (4-5 years)</option>
                  <option value="5+">Experienced Teachers (5+ years)</option>
                </select>
                <select
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleSelectChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Subjects You Teach</option>
                  <option value="english">English</option>
                  <option value="physics">Physics</option>
                  <option value="math">Math</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="bio">Biology</option>
                  <option value="philosophy">Philosophy</option>
                </select>
                <input
                  type="text"
                  name="expertise"
                  placeholder="Topics You Have Expertise In"
                  value={formData.expertise}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="languages"
                  placeholder="Languages You Speak (comma separated)"
                  value={formData.languages}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {userType === "student" && (
              <div>
                {/* Student-specific fields */}
                <select
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleSelectChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select School Type</option>
                  <option value="middleSchool">Middle School</option>
                  <option value="highSchool">High School</option>
                  <option value="college">College</option>
                </select>
                <input
                  type="text"
                  name="grade"
                  placeholder="Grade or Year"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="schoolName"
                  placeholder="School Name"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="helpTopics"
                  placeholder="Topics You Need Help With"
                  value={formData.helpTopics}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-yellow-500 rounded-md font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {/* Right side: Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/your-image.jpg")' }}></div>
    </div>
  );
};

export default Signup;
