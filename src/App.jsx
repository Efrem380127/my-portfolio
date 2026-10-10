import { useState } from "react";

const NAV = ["home", "about", "skills", "projects", "contact"];

const SKILLS = [
  { icon: "🌐", title: "HTML", text: "Building website structure and content." },
  { icon: "🎨", title: "CSS", text: "Creating responsive and attractive designs." },
  { icon: "⚡", title: "JavaScript", text: "Adding interaction and functionality." },
  { icon: "🔧", title: "Git & GitHub", text: "Managing and sharing software projects." },
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    text: "A responsive personal portfolio website created using HTML, CSS and JavaScript.",
  },
  {
    title: "Tip Calculator",
    text: "A JavaScript calculator that calculates tips and splits bills between people.",
  },
  {
    title: "Responsive Landing Page",
    text: "A modern responsive landing page designed with HTML and CSS.",
  },
];

const ABOUT = [
  ["🎓", "Education", "Statistics"],
  ["💻", "Field", "Software Development"],
  ["📍", "Location", "Ethiopia"],
  ["🎯", "Goal", "Software Developer"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="navbar">
        <h2 className="logo">
          Efrem<span>.</span>
        </h2>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="welcome">Welcome to my portfolio</p>
        <h1>
          Hi, I'm <span>Efrem Birhanu</span>
        </h1>
        <h2>Software Developer</h2>
        <p>
          I am a passionate Software Development student interested in building
          modern and user-friendly websites and applications.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn">View my work</a>
          <a href="#contact" className="btn outline">Contact me</a>
        </div>
      </div>
      <div className="hero-card">
        <div className="profile-icon">👨‍💻</div>
        <h3>Software Developer</h3>
        <p>HTML • CSS • JavaScript</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About me</h2>
      <div className="about-content">
        <div>
          <h3>Who I am</h3>
          <p>
            My name is Efrem Birhanu. I am a Statistics graduate and Software
            Development student. I enjoy learning programming and creating
            useful digital solutions.
          </p>
        </div>
        <div className="about-box">
          {ABOUT.map(([icon, label, value]) => (
            <p key={label}>
              <strong>{icon} {label}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">My skills</h2>
      <div className="skills-container">
        {SKILLS.map((s) => (
          <div className="skill-card" key={s.title}>
            <div className="skill-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ onSelect }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My projects</h2>
      <div className="projects-container">
        {PROJECTS.map((p, i) => (
          <div className="project-card" key={p.title}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <button onClick={() => onSelect(p)}>View project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Connect this to a backend or a service like Formspree / EmailJS.
    setSent(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact me</h2>
      <p>Interested in working together? Send me a message.</p>
      <form onSubmit={submit}>
        <input name="name" type="text" placeholder="Your name" value={form.name} onChange={update} required />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={update} required />
        <textarea name="message" rows="5" placeholder="Your message" value={form.message} onChange={update} required />
        <button type="submit" className="btn">Send message</button>
      </form>
      {sent && <p className="form-message" role="status">{sent}</p>}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <p className="muted">Project details and links coming soon.</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default function App() {
  const [project, setProject] = useState(null);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelect={setProject} />
        <Contact />
      </main>
      <footer>
        <p>© 2026 Efrem Birhanu. All rights reserved.</p>
        <p>Built with React 💻</p>
      </footer>
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </>
  );
}
