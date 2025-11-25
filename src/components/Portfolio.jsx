import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/jai.jpeg";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// REAL PROJECT DATA – update links to your actual GitHub later
const projects = [
  {
    name: "React Calculator",
    tech: "React · JavaScript",
    description:
      "A clean, keyboard-friendly calculator with proper operator handling and polished UI.",
    route: "/calculator",
    live: "https://react-portfolio-pied-gamma.vercel.app/calculator",
    source: "https://github.com/Jai-mehndiratta/react-portfolio/tree/main/src/components/Calculator",
  },
  {
    name: "React To-Do App",
    tech: "React · LocalStorage",
    description:
      "A modern to-do app with persistent storage, completion toggle, and clean component structure.",
    route: "/todo",
    live: "https://react-portfolio-pied-gamma.vercel.app/todo",
    source: "https://github.com/Jai-mehndiratta/react-portfolio/tree/main/src/components/ToDo",
  },
  {
    name: "More Incoming...",
    tech: "Coming soon",
    description:
      "More React, Next.js and full-stack projects as I keep shipping and learning in public.",
    route: null,
    live: null,
    source: null,
  },
];

function Portfolio() {
  const [typingText, setTypingText] = useState("");

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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      {/* ================= HERO SECTION ================= */}
      <section id="home" className="section hero">
        <div className="hero-content">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="hero-tag">
              FULL-STACK DEVELOPER IN THE MAKING · SRITE
            </motion.p>

            <motion.h1 variants={fadeUp}>
              Hey, I'm <span className="accent">Jai Mehndiratta</span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="hero-typing">
              <span>{typingText}</span>
              <span className="cursor">|</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="hero-subtext">
              I’m learning to build fast, modern, scalable web experiences —
              from clean UIs to interactive logic and full-stack projects.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div variants={fadeUp} className="hero-actions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </motion.button>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Contact Me
                </motion.button>
              </Link>

              {/* DOWNLOAD RESUME */}
              <a href="/resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-resume"
                >
                  Download Resume
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* HERO IMAGE RIGHT SIDE */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImg} alt="profile" className="hero-img" />
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real things I’ve built while learning the web.
        </p>

        <motion.div
          className="project-grid"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`project-card ${
                !project.live && !project.source ? "project-card-disabled" : ""
              }`}
            >
              <div className="project-badge">{project.tech}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {(project.route || project.live || project.source) && (
                <div className="project-actions">
                  {project.route && (
                    <Link to={project.route} className="project-btn project-btn-outline">
                      Open App
                    </Link>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      Live
                    </a>
                  )}

                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-secondary"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Who I am and how I got here.</p>

        <div className="about-grid">
          <div className="about-card glass">
            <h3>Background</h3>
            <p>
              I’m a student and developer passionate about building usable
              real-world applications instead of just tutorials.
            </p>
          </div>

          <div className="about-card glass">
            <h3>What I do</h3>
            <p>
              Learning full-stack web development — building projects in React,
              Next.js, and the MERN stack.
            </p>
          </div>

          <div className="about-card glass">
            <h3>Vision</h3>
            <p>
              To build meaningful products, ship consistently, and grow in
              public with each project.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT PREVIEW ================= */}
      <section id="contact" className="section contact-preview">
        <h2 className="section-title">Let’s Build Something</h2>
        <p className="section-subtitle">Want to collaborate or talk?</p>

        <Link to="/contact">
          <button className="btn-primary">Go to Contact Page</button>
        </Link>
      </section>
    </motion.main>
  );
}

export default Portfolio;
