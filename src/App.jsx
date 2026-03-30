import { FaEnvelope, FaGithub, FaHeart, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import "./App.css";
import profilePic from "./images/anna_ai_picture.png"

import { useState, useEffect } from "react"; // ----------------------------<


const skills = ["HTML", "CSS", "Python", "Java", "Git & GitHub"];

const projects = [
  {
    id: 1,
    title: "AI Image Detection Extension",
    description:
      "A browser extension project focused on identifying AI-generated images through a user-friendly interface.",
    tools: "React, Python, Computer Vision",
    learned: "Model integration, interface design, and translating technical work into something usable."
  },
  {
    id: 2,
    title: "In progress...",
    description:
      "In progress...",
    tools: "-",
    learned: "-"
  },
  {
    id: 3,
    title: "In progress...",
    description:
      "In progress...",
    tools: "-",
    learned: "-"
  },
  {
    id: 4,
    title: "Another Project",
    description: "Testing carousel behavior.",
    tools: "React",
    learned: "Testing UI logic."
  }
];

const experiences = [
  {
    title: "CSC and Math Tutor",
    description: "Supported students in programming and math up to calculus II, helping them understand concepts like logic and debugging. Focused on guiding students to build confidence and approach problems independently."
  }

]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // ----------------------------<
  const [projectsPerPage, setProjectsPerPage] = useState(3); // ----------------------------<

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProjects = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevProjects = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    } else {
      const lastIndex =
          Math.floor((projects.length - 1) / projectsPerPage) * projectsPerPage;
      setCurrentIndex(lastIndex);
    }
  };

  const visibleProjects = projects.slice(
      currentIndex,
      currentIndex + projectsPerPage
  );

  return (
    <div className="page-shell">
      <div className="floating floating-one" />
      <div className="floating floating-two" />
      <div className="floating floating-three" />

      <header className="hero section">
        <nav className="topbar">
          <div className="brand">
            <span>Anna Scribner</span>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-card">
          <div className="hero-left">
            <div className="photo-frame">
              <img src={profilePic} alt="Anna Scribner" />
            </div>
          </div>

          <div className="hero-right">
            <h1>Anna Scribner</h1>
            <p className="subtitle">
              Computer Science Student
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Discover My Work</a>
              <a className="ghost-btn" href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section section-card">
          <h2>Who I Am</h2>
          <p>
            I’m a Computer Science student based in Seattle, currently pursuing my A.S. at North Seattle College.
          </p>

          <p>
            I work as both a Computer Science and Math tutor, where I’ve developed strong communication and problem-solving skills while helping others understand complex concepts.
          </p>

          <p>
            My main interests include software engineering, research, and data-driven or scientific applications. Right now (April 2026), I’m preparing for my summer internship at NCAR in Boulder, where I’ll be working on projects involving data and large-scale systems.
          </p>

          <p>
            I’m currently focused on strengthening my fundamentals in Python, Java, and data structures, while also exploring systems related to large language models and retrieval-based tools.
          </p>

          <p>
            Outside of tech, I enjoy hiking, snowboarding, karaoke, and reading. I’m currently reading <em>Um Defeito de Cor</em> by Ana Maria Gonçalves - a Brazilian literature.
          </p>
        </section>

        <section className="section section-card">
          <h2>My Toolkit</h2>
          <div className="pill-grid">
            {skills.map((skill) => (
              <span key={skill} className="pill">{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-card">
          <h2>Projects</h2>
          <div className="projects-carousel">

            {projects.length > projectsPerPage && (
                <button className="carousel-btn" onClick={prevProjects}>←</button>
            )}

            <div className="project-grid">
              {visibleProjects.map((project) => (
                  <article key={project.id} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Tools:</strong> {project.tools}</p>
                    <p><strong>What I learned:</strong> {project.learned}</p>
                  </article>
              ))}
            </div>

            {projects.length > projectsPerPage && (
                <button className="carousel-btn" onClick={nextProjects}>→</button>
            )}

          </div>
        </section>

        <section id="experience" className="section section-card">
          <h2>Experiences</h2>
          <div className="experiences">
            {experiences.map((exp) => (
                <div key={exp.title} className="experience-card">
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
            ))}

          </div>
        </section>

        <section id="contact" className="section section-card contact-card">
          <h2>Let’s Connect</h2>

          <div className="contact-links">
            <a href="mailto:annh.scribner@gmail.com"><FaEnvelope /> Email</a>
            <a href="https://github.com/AnnhScribner" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/annh-scribner/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Made with <FaHeart /> by Anna Scribner</p>
      </footer>
    </div>
  );
}

export default App;
