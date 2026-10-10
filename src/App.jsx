import { useState } from "react";

const skills = [
  {
    icon: "🌐",
    name: "HTML",
    description: "Building website structure and content.",
  },
  {
    icon: "🎨",
    name: "CSS",
    description: "Creating responsive and attractive designs.",
  },
  {
    icon: "⚡",
    name: "JavaScript",
    description: "Adding interaction and functionality.",
  },
  {
    icon: "🔧",
    name: "Git & GitHub",
    description: "Managing and sharing software projects.",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A responsive personal portfolio website created using HTML, CSS and JavaScript.",
  },
  {
    name: "Tip Calculator",
    description:
      "A JavaScript calculator that calculates tips and splits bills between people.",
  },
  {
    name: "Responsive Landing Page",
    description: "A modern responsive landing page designed with HTML and CSS.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleContactSubmit(event) {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get("name");
    setFormMessage(`Thank you, ${name}! Your message has been received.`);
    event.currentTarget.reset();
  }

  return (
    <>
      <header>
        <nav className="navbar" aria-label="Main navigation">
          <a className="logo" href="#home" aria-label="Efrem home">
            Efrem<span>.</span>
          </a>
          <ul
            id="mobile-navigation"
            className={`nav-links${menuOpen ? " active" : ""}`}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>
            <h1>
              Hi, I&apos;m <span>Efrem Birhanu</span>
            </h1>
            <h2>Software Developer</h2>
            <p>
              I am a passionate Software Development student interested in
              building modern and user-friendly websites and applications.
            </p>
            <div className="buttons">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="profile-icon" aria-hidden="true">
              👨‍💻
            </div>
            <h3>Software Developer</h3>
            <p>HTML • CSS • JavaScript</p>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div>
              <h3>Who I Am</h3>
              <p>
                My name is Efrem Birhanu. I am a Statistics graduate and
                Software Development student. I enjoy learning programming and
                creating useful digital solutions.
              </p>
            </div>
            <div className="about-box">
              <p>
                <strong>🎓 Education:</strong> Statistics
              </p>
              <p>
                <strong>💻 Field:</strong> Software Development
              </p>
              <p>
                <strong>📍 Location:</strong> Ethiopia
              </p>
              <p>
                <strong>🎯 Goal:</strong> Software Developer
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-icon" aria-hidden="true">
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <button
                  type="button"
                  onClick={() =>
                    window.alert(
                      `${project.name} is one of my portfolio projects.`,
                    )
                  }
                >
                  View Project
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact Me</h2>
          <p>Interested in working together? Send me a message.</p>
          <form onSubmit={handleContactSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your message"
              rows="5"
              required
            />
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
          <p id="formMessage" aria-live="polite">
            {formMessage}
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 Efrem Birhanu. All Rights Reserved.</p>
        <p>Built with React 💻</p>
      </footer>
    </>
  );
}

export default App;
