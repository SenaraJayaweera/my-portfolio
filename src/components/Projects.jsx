import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio built using React with modern animations and clean UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/SenaraJayaweera/my-portfolio",
    demo: "https://698458fdfa95c30774965286--dynamic-haupia-3a13d7.netlify.app",
  },
  {
    title: "Vehicle Transportation Management System",
    description:
      "A web-based system to manage vehicle bookings, allocation, and scheduling efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/SenaraJayaweera/Online-Bus-Reservation-System",
    demo: "https://dulcet-baklava-e2962b.netlify.app",
  },
  {
    title: "SQUAD EDU – Digital Skill Trainer",
    description:
      "A gamified mobile application designed to teach digital skills through quizzes and interactive lessons.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/SenaraJayaweera/SQUAD-EDU-Gamified-Digital-Skill-Trainer-Mobile-Application-",
    demo: "https://loquacious-lebkuchen-1b2589.netlify.app",
  },
  {
    title: "Personal Financial Tracker",
    description:
       "Developed an Android mobile application to track income, expenses, and financial goals with persistent local data storage.",
    tech: ["Kotlin", "XML", "Android Studio"],
    github: "https://github.com/SenaraJayaweera/Financial-Tracker-Mobile-App",
    

  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group/btn"
                  >
                    <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn"
                  >
                    <FaExternalLinkAlt className="text-sm group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Demo</span>
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