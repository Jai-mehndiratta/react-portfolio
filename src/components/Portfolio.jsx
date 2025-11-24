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
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </motion.button>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline"
                >
                  Contact Me
                </motion.button>
              </Link>
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
          Things I’ve built while learning the web.
        </p>

        <motion.div
          className="project-grid"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <Link to="/calculator" className="project-card">
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="project-badge">React · JavaScript</div>
              <h3>React Calculator</h3>
              <p>A clean calculator with keyboard support and polished UI.</p>
              <span className="project-link">Open project →</span>
            </motion.div>
          </Link>

          <Link to="/todo" className="project-card">
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="project-badge">React · LocalStorage</div>
              <h3>To-Do App</h3>
              <p>A modern task manager with local persistence.</p>
              <span className="project-link">Open project →</span>
            </motion.div>
          </Link>

          <motion.div
            variants={cardVariant}
            className="project-card project-card-disabled"
          >
            <div className="project-badge">Coming soon</div>
            <h3>More incoming...</h3>
            <p>More full-stack and Next.js builds are on their way.</p>
            <span className="project-link">Building in public…</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Who I am and how I got here.
        </p>

        <div className="about-grid">
          <div className="about-card glass">
            <h3>Background</h3>
            <p>
              I’m a student and developer passionate about building usable
              real-world applications instead of tutorials.
            </p>
          </div>

          <div className="about-card glass">
            <h3>What I do</h3>
            <p>
              Learning full-stack web development — building projects in React,
              Next.js, and MERN.
            </p>
          </div>

          <div className="about-card glass">
            <h3>Vision</h3>
            <p>
              To build meaningful products, ship consistently, and grow publicly.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT (scroll target only, real component on its own route) ================= */}
      <section id="contact" className="section contact-preview">
        <h2 className="section-title">Let’s Build Something</h2>
        <p className="section-subtitle">Want to collaborate or talk?</p>

        <Link to="/contact">
          <button className="btn btn-primary">Go to Contact Page</button>
        </Link>
      </section>

    </motion.main>
  );
}

export default Portfolio;
