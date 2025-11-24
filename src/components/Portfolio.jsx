import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/jai.jpeg";

function Portfolio() {
  const [typingText, setTypingText] = useState("");

  // Typing effect (React version of your old script.js)
  useEffect(() => {
    const lines = [
      "Full-Stack Developer in the making",
      "Building projects, not just watching tutorials",
      "SRite · Pushing my skills in public",
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeLoop = () => {
      const currentLine = lines[lineIndex];

      if (!isDeleting) {
        setTypingText(currentLine.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentLine.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeLoop();
          }, 800);
          return;
        }
      } else {
        setTypingText(currentLine.slice(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }

      const speed = isDeleting ? 60 : 100;
      timeoutId = setTimeout(typeLoop, speed);
    };

    typeLoop();
    return () => clearTimeout(timeoutId);
  }, []);

  // Smooth scroll helper
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR – same as old file */}
      <nav className="nav">
        <div className="nav-left">
          <span className="logo">Jai</span>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main>
        {/* HERO – same layout as original */}
        <section id="home" className="section hero">
          <div className="hero-content">
            <p className="hero-tag">
              Full-Stack Developer in the making · SRite
            </p>
            <h1>
              Hey, I'm <span className="accent">Jai Mehndiratta</span>
            </h1>
            <h2 className="hero-typing">
              <span>{typingText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-subtext">
              I’m learning to build fast, modern, and scalable web experiences —
              from clean UIs to interactive logic and full-stack projects.
            </p>
            <div className="hero-actions">
              <button
                id="cta"
                className="btn-primary"
                onClick={() => scrollToId("projects")}
              >
                View My Work
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mendiratta.jai12@gmail.com"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={heroImg}
              alt="Photo of Jai Mehndiratta"
              className="hero-img"
            />
          </div>
        </section>

        {/* PROJECTS – same design, but links go to React routes */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Things I’ve built while learning the web.
          </p>

          <div className="project-grid">
            <Link to="/calculator" className="project-card">
              <div className="project-badge">React · JavaScript</div>
              <h3>React Calculator</h3>
              <p>
                A keyboard-friendly calculator with delete, clear, and operator
                styling — rebuilt in React with clean state logic.
              </p>
              <span className="project-link">Open project →</span>
            </Link>

            <Link to="/todo" className="project-card">
              <div className="project-badge">
                React · localStorage · state
              </div>
              <h3>React To-Do App</h3>
              <p>
                A modern to-do app with localStorage, delete, completion toggle,
                and clean component architecture.
              </p>
              <span className="project-link">Open project →</span>
            </Link>

            <div className="project-card project-card-disabled">
              <div className="project-badge">Coming Soon</div>
              <h3>More Incoming...</h3>
              <p>
                I’m actively learning React, Next.js, and full-stack tools. More
                projects will show up here as I keep shipping.
              </p>
              <span className="project-link">Building in public…</span>
            </div>
          </div>
        </section>

        {/* ABOUT – copied from original */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card glass">
              <h3>Who I Am</h3>
              <p>
                I’m Jai, a student and developer who enjoys breaking complex
                things into clean, working code. I like building real projects
                instead of just tutorial hell.
              </p>
            </div>
            <div className="about-card glass">
              <h3>Background</h3>
              <p>
                Currently pursuing dual degrees and actively learning full-stack
                development. I’m also part of <strong>SRite</strong>, where I
                get exposed to tech, people, and opportunities to build.
              </p>
            </div>
            <div className="about-card glass">
              <h3>What I’m Learning</h3>
              <p>
                HTML, CSS, JavaScript, project structuring, and deployment—with
                plans to move into React, Next.js, and the MERN stack as my
                foundations get stronger.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT – same design */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card glass">
            <p>Want to collaborate, discuss an idea, or just talk dev?</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:mendiratta.jai12@gmail.com">
                mendiratta.jai12@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
