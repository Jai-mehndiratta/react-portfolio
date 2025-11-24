import { Link } from "react-router-dom";
import profile from "../assets/jai.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero glass">
        <div className="hero-text">
          <h1>Hi, I’m <span className="highlight">Jai Mehndiratta</span></h1>
          <p>Full-Stack Developer | SRite</p>

          <div className="hero-buttons">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mendiratta.jai12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Email Me
            </a>
          </div>
        </div>

        <img src={profile} className="hero-img" alt="Jai" />
      </section>

      <h2 className="section-title">My Projects</h2>

      <div className="project-container">
        <Link to="/calculator" className="card glass">
          <h3>🧮 React Calculator</h3>
        </Link>
        <Link to="/todo" className="card glass">
          <h3>📌 To-Do App</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
