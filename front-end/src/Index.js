
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Auth from "./components/Auth";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
