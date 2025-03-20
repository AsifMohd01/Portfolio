"use client"

import { motion } from "framer-motion"
import { FaCode, FaDatabase, FaPalette } from "react-icons/fa"

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full sm:w-[250px] p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </motion.div>
  )
}

const About = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      description: "Developing responsive, optimized, and scalable web applications using modern technologies like React, Node.js, and Express.js.",
    },
    {
      title: "Backend Development",
      icon: <FaDatabase className="w-8 h-8 text-blue-600" />,
      description: "Building secure and efficient backend solutions using Node.js, Express.js, MySQL, and MongoDB with optimized database management.",
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="w-8 h-8 text-blue-600" />,
      description: "Designing clean and user-friendly interfaces with a focus on seamless user experience and responsiveness.",
    },
  ]

  return (
    <div className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      {/* // <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 "> */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">INTRODUCTION</p>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 text-lg max-w-5xl mx-auto mb-12 text-center"
      >
        I'm a motivated Software Engineer with expertise in C++, Data Structures & Algorithms, and full-stack web development. I specialize in building scalable, user-friendly applications using React, Node.js, Express.js, MySQL, and MongoDB. My projects include FocusLearn, a personalized learning platform, and a social media website, both aimed at solving real-world problems efficiently. I have a strong grasp of frontend and backend development, ensuring seamless user experiences with optimized performance. A quick learner and team player, I am eager to collaborate and contribute to innovative software solutions.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default About
