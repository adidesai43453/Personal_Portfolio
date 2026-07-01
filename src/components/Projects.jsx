import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const featuredProject = {
  title: "DeployGuard",

  description:
    "An AI-powered DevOps platform that analyzes uploaded projects and evaluates deployment readiness. It scans repositories, validates Docker, CI/CD, security configurations, and provides an intelligent deployment score with actionable recommendations.",

  image: "/images/deployguard.jpeg",

  tech: [
    "React",
    "Node.js",
    "Express",
    "AI",
    "Docker",
    "Tailwind CSS",
  ],

  github: "https://github.com/adidesai43453/deployguard",

  live: "https://deployguard-pearl.vercel.app/",

  stats: [
    "AI Deployment Analysis",
    "Docker & CI/CD Validation",
    "Security Recommendations",
  ],
};

const projects = [
  {
    title: "DevOps Monitoring Dashboard",

    description:
      "Interactive infrastructure monitoring dashboard that visualizes CPU, memory, storage, and network usage with a modern UI.",

    gradient: "from-cyan-500 to-blue-600",

    tech: [
      "React",
      "JavaScript",
      "Charts",
      "Monitoring",
    ],

    github: "https://github.com/adidesai43453/devops-monitoring-dashboard",

    live: "https://devops-monitoring-platform-v84c.vercel.app/",
  },

  {
    title: "YourCareerGuide",

    description:
      "AI-powered career guidance platform featuring skill assessments, career recommendations, certificate generation, learning resources, and personalized dashboards.",

    gradient: "from-purple-500 to-pink-600",

    tech: [
      "Django",
      "Python",
      "SQLite",
      "Hugging Face",
    ],

    github: "https://github.com/adidesai43453/yourcareerguide",

    live: "#",
  },

  {
    title: "Professional Portfolio",

    description:
      "Modern responsive developer portfolio built with React, Tailwind CSS, and Framer Motion showcasing projects, skills, and DevOps expertise.",

    gradient: "from-emerald-500 to-cyan-600",

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/adidesai43453",

    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20"
        >
          
          <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Projects focused on software engineering,
            cloud infrastructure, DevOps automation,
            and modern web technologies.
          </p>

        </motion.div>

        {/* Featured Project */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="grid lg:grid-cols-2 gap-10 bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 mb-20"
        >
          
          {/* Left Image */}

          <div className="relative overflow-hidden min-h-[400px]">
            
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

          </div>

          {/* Right Content */}

          <div className="p-10 flex flex-col justify-center">
            
            <p className="text-cyan-400 uppercase tracking-widest font-semibold mb-4">
              Featured Project
            </p>

            <h3 className="text-4xl font-bold mb-6">
              {featuredProject.title}
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {featuredProject.description}
            </p>

            {/* Stats */}

            <div className="space-y-4 mb-8">
              
              {featuredProject.stats.map(
                (stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

                    <p className="text-slate-300">
                      {stat}
                    </p>
                  </div>
                )
              )}

            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mb-10">
              
              {featuredProject.tech.map(
                (tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 font-medium"
                  >
                    {tech}
                  </div>
                )
              )}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5">
              
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold px-7 py-4 rounded-2xl"
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-300 font-bold px-7 py-4 rounded-2xl"
              >
                <FaGithub />

                GitHub
              </a>

            </div>

          </div>

        </motion.div>

        {/* Secondary Projects */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300"
            >
              
              {/* Top Gradient */}

              <div
                className={`h-40 bg-gradient-to-br ${project.gradient}`}
              ></div>

              {/* Content */}

              <div className="p-8">
                
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mb-8">
                  
                  {project.tech.map(
                    (tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium"
                      >
                        {tech}
                      </div>
                    )
                  )}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-slate-900 font-bold px-5 py-3 rounded-xl"
                  >
                    <FaExternalLinkAlt />

                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-300 font-bold px-5 py-3 rounded-xl"
                  >
                    <FaGithub />

                    Code
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;