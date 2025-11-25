import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/Calculator/Calculator";
import ToDo from "./components/ToDo/ToDo";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  // Dark Mode State with LocalStorage Persistence
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
