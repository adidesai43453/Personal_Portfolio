import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiKubernetes,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "REST APIs", icon: "🌐" },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },

  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "CI/CD", icon: "⚙️" },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
    ],
  },

  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Skills & Expertise
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build scalable applications,
            automate workflows, and develop cloud-native solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >
              
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, skillIndex) => (
  <motion.div
    key={skillIndex}
    whileHover={{
      scale: 1.08,
      y: -4,
    }}
    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
  >
    <span className="text-2xl text-cyan-400">
      {skill.icon}
    </span>

    <span>{skill.name}</span>
  </motion.div>
))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-cyan-400">18+</h4>
            <p className="text-slate-400 mt-2">Technologies</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-cyan-400">04+</h4>
            <p className="text-slate-400 mt-2">Projects</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-cyan-400">Cloud</h4>
            <p className="text-slate-400 mt-2">AWS & DevOps</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <h4 className="text-4xl font-bold text-cyan-400">Full Stack</h4>
            <p className="text-slate-400 mt-2">Development</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;