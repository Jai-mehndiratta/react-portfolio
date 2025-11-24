import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_n4ad5r7",
        "template_jtcpy0l",
        {
          from_name: name,
          email,
          message,
        },
        "mOI59arrmBTRBMGmH"
      )
      .then(() => {
        alert("Message Sent!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => alert("Failed to send message"));
  }

  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Contact Me</h1>

      <motion.form
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />

        <motion.input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />

        <motion.textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />

        {/* Micro-interaction send button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="send-btn"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </motion.main>
  );
}

export default Contact;
