// Import required modules
import React, { useState } from "react"; // React hooks for managing state
import axios from "axios"; // HTTP client for API requests
import { useNavigate } from "react-router-dom"; // Hook for navigation after successful sign-up

const Signup = () => {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Initialize navigate to redirect after sign-up
  const navigate = useNavigate();

  // Function to handle sign-up when the button is clicked
  const handleSignup = async () => {
    try {
      // Make a POST request to the sign-up endpoint
      await axios.post("http://localhost:5000/signup", { username, password });
      alert("User registered successfully!"); // Notify the user
      navigate("/"); // Redirect to the login page
    } catch (err) {
      console.error("Sign-up failed", err); // Log error if the sign-up fails
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2> {/* Sign-up form heading */}
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
          className="w-full bg-green-500 text-white p-2 rounded"
          onClick={handleSignup} // Call handleSignup function when clicked
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup; // Export the Signup component
