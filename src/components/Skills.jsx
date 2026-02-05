import { motion } from "framer-motion";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiKotlin,
  SiDart,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        {/* Programming Languages */}
        <SkillGroup title="Programming Languages">
          <Skill icon={<FaJava />} color="text-red-500" name="Java" />
          <Skill icon={<SiC />} color="text-blue-400" name="C" />
          <Skill icon={<SiCplusplus />} color="text-blue-500" name="C++" />
          <Skill icon={<FaPython />} color="text-yellow-400" name="Python" />
          <Skill icon={<SiKotlin />} color="text-purple-500" name="Kotlin" />
          <Skill icon={<SiDart />} color="text-cyan-400" name="Dart" />
        </SkillGroup>

        {/* Web Development */}
        <SkillGroup title="Web Development">
          <Skill icon={<FaHtml5 />} color="text-orange-500" name="HTML" />
          <Skill icon={<FaCss3Alt />} color="text-blue-500" name="CSS" />
          <Skill icon={<FaJsSquare />} color="text-yellow-400" name="JavaScript" />
          <Skill icon={<FaReact />} color="text-cyan-400" name="React.js" />
          <Skill icon={<FaNodeJs />} color="text-green-500" name="Node.js" />
          <Skill icon={<SiExpress />} color="text-gray-300" name="Express.js" />
          <Skill icon={<SiTailwindcss />} color="text-sky-400" name="Tailwind CSS" />
        </SkillGroup>

        {/* Databases */}
        <SkillGroup title="Databases">
          <Skill icon={<SiMongodb />} color="text-green-400" name="MongoDB" />
          <Skill icon={<SiMysql />} color="text-blue-400" name="MySQL" />
          <Skill icon={<SiFirebase />} color="text-yellow-500" name="Firebase" />
        </SkillGroup>
      </div>
    </section>
  );
}

/* Reusable Components */

function SkillGroup({ title, children }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-purple-400 mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, color, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2"
    >
      <span className={`text-5xl ${color}`}>{icon}</span>
      <p className="text-white text-sm">{name}</p>
    </motion.div>
  );
}

export default Skills;
