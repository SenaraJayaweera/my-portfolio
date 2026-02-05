import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/2.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Animated Particles/Accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-purple-400 text-lg font-medium">Welcome to my portfolio</span>
        </motion.div>

        {/* Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Senara Nilmani
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate IT student specializing in Software Engineering,
          building modern full-stack web applications with the MERN stack.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/Senara_Nilmani_CV.pdf"
            download
            className="px-8 py-3 border-2 border-white/30 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/SenaraJayaweera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/senara-nilmani-9993a137a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:senara.nilmani2002@gmail.com"
            className="text-gray-400 hover:text-purple-400 text-2xl transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      
    </section>
  );
}

export default Home;