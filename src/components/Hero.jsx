import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaAws,
  FaReact,
  FaPython,
} from "react-icons/fa";



function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-950"
    >
      {/* Background Gradient Blobs */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Main Container */}

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          
          {/* Intro */}


          {/* Main Heading */}

          <h1 className="mt-12 text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">

<span className="text-slate-300">
    Hello <span className="text-3xl"></span>
</span>

<span className="text-white">
    I'm
</span>

<br />

<span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent font-bold">
    Aditya Desai
</span>

</h1>

          {/* Typing Animation */}

          <div className="text-2xl md:text-4xl font-bold text-cyan-400 mb-8">
    DevOps Engineer • Cloud Enthusiast • AI Explorer
</div>

          {/* Description */}

          <p className="text-slate-400 text-xl leading-9 max-w-xl mb-10">
          Passionate about building scalable cloud-native applications, automating deployments, and creating AI-powered software solutions. I enjoy transforming ideas into production-ready applications using modern technologies and DevOps best practices.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mb-10">
            
            {/* Contact Button */}

            <a
  href="#projects"
  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 font-bold px-7 py-4 rounded-xl"
>
  🚀 View Projects
</a>

            {/* Resume Button */}

            <a
              href="./Aditya_Desai_Devops_Resume.pdf"
              download
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 transition duration-300 font-bold px-7 py-4 rounded-xl"
            >
              Download Resume
            </a>
            <a
  href="https://github.com/adidesai43453"
  target="_blank"
  rel="noreferrer"
  className="w-14 h-14 flex items-center justify-center border border-slate-700 rounded-xl text-2xl text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/aditya-desai-2228b725b"
  target="_blank"
  rel="noreferrer"
  className="w-14 h-14 flex items-center justify-center border border-slate-700 rounded-xl text-2xl text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
>
  <FaLinkedin />
</a>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

          <div className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700">

<h2 className="text-cyan-400 text-3xl font-bold">

04+

</h2>

<p className="text-slate-400">

Projects

</p>

</div>
<div className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700">

<h2 className="text-cyan-400 text-3xl font-bold">

18+

</h2>

<p className="text-slate-400">

Technologies

</p>

</div>
<div className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700">

<h2 className="text-cyan-400 text-3xl font-bold">

∞

</h2>

<p className="text-slate-400">

Learning

</p>

</div>

<div className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700">

<h2 className="text-cyan-400 text-3xl font-bold">

100 %

</h2>

<p className="text-slate-400">

Passion

</p>

</div>
          </div>

          {/* Social Links */}


        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex justify-center"
        >
          
          {/* Main Circle */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-center w-max">

<p className="text-cyan-400 uppercase tracking-[0.45em] text-lg md:text-xl font-bold whitespace-nowrap">
    WELCOME TO MY DIGITAL SPACE
</p>

<div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4 rounded-full"></div>

</div>



          <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl">
  
            <img
                src="/images/aditya.png"
                alt="Aditya Desai"
                className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                />

</div>

          {/* Floating Tech Icons */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute top-10 left-0 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-20 right-0 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaDocker />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
            }}
            className="absolute bottom-10 left-10 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaAws />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
            }}
            className="absolute bottom-0 right-10 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-cyan-400 text-4xl shadow-lg"
          >
            <FaPython />
          </motion.div>
          



        </motion.div>

      </div>
    </section>
  );
}

export default Hero;