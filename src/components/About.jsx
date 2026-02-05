import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden
      bg-gradient-to-br from-purple-900 via-gray-900 to-black"
    >
      {/* Background glow accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a motivated third-year BSc Information Technology student
            specializing in Software Engineering. I have a strong interest in
            full-stack web development with hands-on experience in the MERN
            stack (MongoDB, Express.js, React.js and Node.js).
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I enjoy building modern, responsive, and user-friendly web applications
            that solve real-world problems and deliver exceptional user experiences.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                3rd Year
              </p>
              <p className="text-gray-400 text-sm mt-1">IT Student</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                MERN
              </p>
              <p className="text-gray-400 text-sm mt-1">Stack Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-br from-purple-500 to-blue-500 
              blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

            {/* Gradient border */}
            <div className="relative p-1 rounded-2xl 
              bg-gradient-to-br from-purple-500/70 to-blue-500/70
              group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">

              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-72 h-72 object-cover rounded-2xl
                bg-black shadow-2xl"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;