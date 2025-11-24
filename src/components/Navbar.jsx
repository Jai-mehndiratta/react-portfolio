import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar glass">
      <h2 className="logo">Jai</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/todo">To-Do</Link>
      </div>
    </nav>
  );
}

export default Navbar;
