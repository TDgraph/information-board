// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate checking login state using localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div>
        <button
          className="text-lg font-bold"
          onClick={() => navigate("/services")}
        >
          Info Board
        </button>
      </div>
      <nav className="flex gap-6">
        <Link to="/" className="hover:underline">
          About
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        {isLoggedIn ? (
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              setIsLoggedIn(false);
            }}
            className="hover:underline"
          >
            Log Out
          </button>
        ) : (
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
