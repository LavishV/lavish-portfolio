"use client";

import { Typewriter } from "react-simple-typewriter";

import {
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


import { motion } from "framer-motion";
import Image from "next/image";

const handleMouseMove = (e) => {
  const cursor = document.getElementById("cursor-glow");

  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
};

export default function LavishPortfolio() {
  const projects = [
    {
      title: "Campus Cart",
      desc: "Student exchange platform with CRUD operations and secure APIs.",
      tech: ["MERN", "REST APIs"],
      github: "https://github.com/LavishV",
    },
    {
      title: "Stockify",
      desc: "AI stock prediction platform using Django + PyTorch LSTM.",
      tech: ["Django", "React", "PyTorch"],
      github: "https://github.com/LavishV",
    },
    {
      title: "CIPAM Translator",
      desc: "Multilingual AI translation system for legal/IPR content.",
      tech: ["NLP", "Flask", "AI"],
      github: "https://github.com/LavishV",
    },
  ];

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-black text-white min-h-screen relative">



      <div
        id="cursor-glow"
        className="fixed w-56 h-56 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none z-50 transition-all duration-75"
      />

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,153,255,0.12),transparent_25%)]" />



      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-0 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

          <h1 className="text-3xl font-black tracking-wider">
            LV
          </h1>

          <div className="hidden md:flex gap-10 text-sm text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition duration-300">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a>
          </div>

          <a
            href="/LavishVerma_resume.pdf"
            className="border border-cyan-500/40 px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-cyan-400/15 transition"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="absolute right-0 top-0 w-[650px] h-[650px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center px-6 md:px-14 pt-28"
      >

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 w-full">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 mb-4 text-lg">
              Hello, I am
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              LAVISH{" "}
              <span className="text-cyan-400">
                VERMA
              </span>
            </h1>

            <div className="mt-6 text-gray-300 text-2xl font-medium">
              <Typewriter
                words={[
                  "AI/ML Engineer",
                  "Full Stack Developer",
                  "Backend Developer",
                  "GenAI Enthusiast",
                  "Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </div>


            <p className="mt-8 text-gray-400 max-w-xl text-lg">
              I build scalable web applications and intelligent systemssw
              that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 transition px-7 py-4 rounded-xl flex items-center gap-2 font-medium">
                View Projects

                <ArrowRight size={18} />
              </button>

              <a
                href="#contact"
                className="border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition px-7 py-4 rounded-xl"
              >
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-5 mt-12">
              <a
                href="https://github.com/LavishV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition duration-300 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/lavishverma01/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition duration-300 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:lavishverma018@gmail.com"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition duration-300 transition"
              >
                <Mail />
              </a>
            </div>
          </motion.div>

          <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black z-10 pointer-events-none" />

            <Image
              src="/lavish.png"
              alt="Lavish Verma"
              fill
              priority
              sizes="50vw"
              className="object-cover object-center grayscale brightness-75 contrast-125 opacity-90"
            />
          </div>
        </div>
      </motion.section>
      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="about"
        className="relative z-20 border-t border-white/10 py-24 px-6 md:px-14"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <p className="text-gray-400 leading-loose text-lg">
                I'm Lavish Verma, a Computer Science engineering student
                passionate about building scalable and impactful digital
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] transition-all duration-500">
                <h3 className="text-cyan-400 mb-2">Current</h3>
                <p>B.Tech CSE Student</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] transition-all duration-500">
                <h3 className="text-cyan-400 mb-2">Location</h3>
                <p>India</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] transition-all duration-500">
                <h3 className="text-cyan-400 mb-2">Email</h3>
                <p>lavishverma018@gmail.com</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] transition-all duration-500">
                <h3 className="text-cyan-400 mb-2">Availability</h3>
                <p>Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="skills"
        className="relative z-30 bg-black border-t border-white/10 py-24 px-6 md:px-14"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16">
            SKILLS & <span className="text-cyan-400">TECH</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Python",
              "C++",
              "JavaScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "Django",
              "Flask",
              "PyTorch",
              "Machine Learning",
              "REST APIs",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] transition-all duration-500"
              >
                {skill}
              </div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="projects"
        className="border-t border-white/10 py-24 px-6 md:px-14"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16">
            FEATURED PROJECTS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,191,255,0.15)] transition-all duration-500 "
              >
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <button className="bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 transition px-5 py-3 rounded-xl text-sm">
                    Live Demo
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 px-5 py-3 rounded-xl text-sm hover:border-cyan-400 hover:bg-cyan-400/10 transition flex items-center gap-2"
                  >
                    GitHub
                    <FaGithub size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="contact"
        className="relative z-[60] border-t border-white/10 py-24 px-6 md:px-14"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            CONTACT <span className="text-cyan-400">ME</span>
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Open to internships, collaborations, AI/ML projects,
            and exciting opportunities.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <a
              href="mailto:lavishverma018@gmail.com"
              className="relative z-[70] bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] transition-all duration-300 px-8 py-4 rounded-xl"
            >
              Email Me
            </a>

            <a
              href="https://github.com/LavishV"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-[70] border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition px-8 py-4 rounded-xl"
            >
              GitHub
            </a>

          </div>
        </div>
      </motion.section>



      {/* FOOTER */}
      <footer className="relative z-30 bg-black border-t border-white/10 py-10 text-center text-gray-500">
        <p>
          © 2026 Lavish Verma. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-600">
          Built with Next.js, TailwindCSS & Framer Motion
        </p>
      </footer>
    </main >
  );
}
