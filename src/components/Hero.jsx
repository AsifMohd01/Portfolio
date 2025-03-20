"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="block">Hi, I'm</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Asif Mohd
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            // className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            className="text-xl sm:text-12xl text-gray-600 dark:text-gray-300 mb-8 max-w-5xl mx-auto mt-6"

          >
            Motivated Software Engineer with a strong passion for developing optimized and user-friendly software
            solutions. Seeking an opportunity to collaborate with an experienced development team, with the goal
            of enhancing technical skills and contributing to the success of the organization
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 w-32 rounded-full bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium transition-colors duration-300 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 w-30 rounded-full bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium transition-colors duration-300 text-center"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center gap-6 mt-8 "
          >
            <a
              href="hhttps://github.com/AsifMohd01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 "
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/asifmohd55/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a> */}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <a
          href="#about"
          className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-600 dark:border-gray-300 flex justify-center items-start p-2"
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-gray-600 dark:bg-gray-300 mb-1"
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
