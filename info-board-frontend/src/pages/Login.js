// Import required modules
import React, { useState } from "react"; // React hooks for managing state
import axios from "axios"; // HTTP client for API requests
import { useNavigate } from "react-router-dom"; // Hook for navigation after successful login

const Login = () => {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Initialize navigate to redirect after login
  const navigate = useNavigate();

  // Function to handle login when the button is clicked
  const handleLogin = async () => {
    try {
      // Make a POST request to the login endpoint
      const res = await axios.post("http://localhost:5000/login", { username, password });
      localStorage.setItem("token", res.data.token); // Save the token to localStorage
      navigate("/home"); // Redirect to the home page
    } catch (err) {
      console.error("Login failed", err); // Log error if the login fails
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2> {/* Login form heading */}
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          placeholder="Username" // Input field for username
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          placeholder="Password" // Input field for password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleLogin} // Call handleLogin function when clicked
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login; // Export the Login component
