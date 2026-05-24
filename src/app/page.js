"use client";
import { motion } from "framer-motion";

export default function LavishPortfolio() {
  const skills = [
    "Python",
    "C++",
    "Django",
    "React.js",
    "Machine Learning",
    "PyTorch",
    "REST APIs",
    "Node.js",
    "PostgreSQL",
    "AI & GenAI",
  ];

  const projects = [
    {
      title: "Stockify — AI Stock Prediction Platform",
      description:
        "A stock prediction web application using Django, React, and PyTorch LSTM models for forecasting stock prices with authentication and interactive visualizations.",
      tags: ["Django", "React", "PyTorch", "LSTM", "AI"],
    },
    {
      title: "CIPAM Multilingual IPR Translator",
      description:
        "An AI-powered system designed to translate educational and legal IPR content from English into multiple Indian languages while preserving meaning and simplicity.",
      tags: ["NLP", "Translation", "AI", "Python"],
    },
    {
      title: "Campus Cart Exchange Platform",
      description:
        "A student-focused exchange platform for buying, selling, and sharing resources inside college communities.",
      tags: ["Web Development", "UI/UX", "React"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(140,0,255,0.12),transparent_25%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <h1 className="text-2xl font-bold tracking-wide">
          Lavish<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-24 md:py-36"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-5">
              AI • ML • Web Development
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-500 text-transparent bg-clip-text">
              Building intelligent systems & futuristic digital experiences.
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              I’m Lavish Verma — a developer exploring AI engineering, machine
              learning, and scalable web applications while building projects
              that solve meaningful real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-2xl"
              >
                View Projects
              </motion.a>

              <a
                href="/LavishVerma_resume.pdf"
                download
                className="border border-cyan-400/30 px-6 py-3 rounded-2xl hover:bg-cyan-400/10 transition flex items-center gap-2"
              >
                ⬇ Download Resume
              </a>
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-[2rem] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,255,255,0.12)] backdrop-blur-xl"
          >
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Current Focus</p>
                <h3 className="text-2xl font-bold mt-2">
                  AI Engineering & Full Stack Development
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h4 className="text-3xl font-bold">3+</h4>
                  <p className="text-gray-400 mt-2 text-sm">
                    Major Projects
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h4 className="text-3xl font-bold">AI</h4>
                  <p className="text-gray-400 mt-2 text-sm">
                    Learning & Building
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  “Consistency and curiosity create opportunities faster than
                  shortcuts ever can.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400 uppercase tracking-[0.25em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A student developer with ambition beyond academics.
            </h2>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I’m currently exploring AI engineering, machine learning systems,
              and scalable backend development. My journey evolved from simple
              curiosity into building production-style projects using Django,
              React, Flask, PyTorch, and modern development tools.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Beyond coding, I enjoy deep thinking, productivity psychology,
              communication, and meaningful storytelling through creative ideas
              like “2AM Thoughts.”
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 uppercase tracking-[0.25em] text-sm mb-4">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold mb-14">
            Tools I work with.
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={skill}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-cyan-400/10 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition duration-300 backdrop-blur-md"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 uppercase tracking-[0.25em] text-sm mb-4">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold mb-14">
            Projects that define my learning journey.
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={project.title}
                className="bg-gradient-to-br from-white/5 to-cyan-500/5 border border-cyan-400/10 rounded-[2rem] p-6 sm:p-8 transition duration-300 backdrop-blur-xl shadow-xl"
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-snug">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <button className="text-sm border border-white/20 px-5 py-3 rounded-xl hover:bg-white hover:text-black transition">
                  Explore Project
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 uppercase tracking-[0.25em] text-sm mb-4">
            Let’s Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Want to build something meaningful together?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Whether it’s AI, development, collaboration, or creative ideas —
            I’m always open to learning and connecting with passionate people.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="https://github.com/LavishV"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/lavishverma01/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400/20 px-8 py-4 rounded-2xl hover:bg-cyan-400/10 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:lavishverma018@gmail.com"
              className="border border-cyan-400/20 px-8 py-4 rounded-2xl hover:bg-cyan-400/10 transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="flex items-center justify-center gap-2">
          ✨ Designed & built by Lavish — AI Developer Portfolio
        </div>
      </footer>
    </div>
  );
}
