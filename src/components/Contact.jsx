import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm(
      "service_sboec59",
      "template_xnnyp4v",
      form.current,
      "WLiu-5tH5Yowl1a9P"
    )
    .then(
      ()=>{
        alert("Message sent successfully");
        form.current.reset();
      },
      (error)=>{
        alert("Faaild to sent message");
        console.log(error.text);
      }
    )
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out for collaborations, projects, or opportunities. 
              I'd love to hear from you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400 text-xl" />
                <span className="text-white">senara.nilmani2002@gmail.com</span>
              </div>
            </div>

            <p className="text-gray-400 mb-4">Find me on:</p>
            <div className="flex gap-4">
              <a
                href="mailto:senara.nilmani2002@gmail.com"
                className="text-gray-400 hover:text-purple-400 text-3xl transition-colors"
              >
                <FaEnvelope />
              </a>

              <a
                href="www.linkedin.com/in/senara-nilmani-9993a137a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-3xl transition-colors"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/SenaraJayaweera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 text-3xl transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;