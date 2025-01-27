
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="text-center">
        <form onSubmit={handleSubscribe} className="mb-4">
          <label htmlFor="newsletter" className="block mb-2">
            Subscribe to our newsletter:
          </label>
          <input
            type="email"
            id="newsletter"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded text-black"
          />
          <button type="submit" className="ml-2 bg-blue-500 p-2 rounded">
            Subscribe
          </button>
        </form>
        <p>&copy; 2025 Info Board. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
