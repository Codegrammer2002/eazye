import React, { useState } from "react";
import { Link } from "react-router-dom"; // for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for login here (e.g., API call)
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-1/2 bg-white p-10">
        <div className="flex flex-col justify-center items-center">
          <img src="/logo.png" alt="Company Logo" className="h-12 mb-6" />
          <h1 className="text-4xl font-bold mb-4">Let the Journey Begin!</h1>
          <p className="mb-8 text-gray-500 text-sm">
            Unlock a world of education with a single click! Please log in to your account.
          </p>
          <form onSubmit={handleLogin} className="w-full space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between items-center">
              <Link to="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-yellow-500 rounded-md font-semibold"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up For Free
            </Link>
          </p>
        </div>
      </div>
      {/* Right side: Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/your-image.jpg")' }}></div>
    </div>
  );
};

export default Login;
