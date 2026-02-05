import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-gradient-to-br from-purple-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Education</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Academic journey and qualifications
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* SLIIT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
              {/* Icon Section */}
              <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  Sri Lanka Institute of Information Technology
                </h3>
                <p className="text-purple-400 font-semibold text-base mb-2">
                  B.Sc. (Hons) in Information Technology
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Specializing in Software Engineering
                </p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    July 2023 – Present
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg text-purple-300 font-bold text-base text-center">
                    CGPA: 3.22 / 4.00
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ESOFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
              {/* Icon Section */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  ESOFT Metro Campus
                </h3>
                <p className="text-blue-400 font-semibold text-base mb-2">
                  Matara
                </p>
                <p className="text-purple-400 font-medium text-sm mb-3">
                  Diploma Programs
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2019
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-start gap-2 text-gray-300 text-sm bg-white/5 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Diploma in Information Technology (International)</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300 text-sm bg-white/5 p-3 rounded-lg">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>Diploma in English</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* School */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
              {/* Icon Section */}
              <div className="relative bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-8 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  St. Thomas's Girls' High School
                </h3>
                <p className="text-indigo-400 font-semibold text-base mb-2">
                  Matara
                </p>
                <p className="text-purple-400 font-medium text-sm mb-3">
                  GCE Advanced Level – Commerce Stream
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  August 2021
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm flex items-center justify-between">
                    <span>Economics</span>
                    <span className="font-bold text-purple-400">C</span>
                  </div>
                  <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm flex items-center justify-between">
                    <span>Business Studies</span>
                    <span className="font-bold text-purple-400">C</span>
                  </div>
                  <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm flex items-center justify-between">
                    <span>Accounting</span>
                    <span className="font-bold text-purple-400">C</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;