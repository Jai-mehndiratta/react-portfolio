import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="nav">
      <span className="logo">Jai</span>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Projects</Link></li>
        <li><Link to="/todo">To-Do</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
