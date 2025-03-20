"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa"
import { SiThreedotjs, SiTailwindcss, SiMysql , SiMongodb, SiFirebase, SiExpress } from "react-icons/si"
import { PiFileCppBold } from "react-icons/pi";


const SkillCard = ({ name, icon, level }) => {
  return (
    <div className="flex flex-col items-center p-4 w-45 h-35 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-2 text-blue-600">{icon}</div>
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">{name}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{level}%</p>
    </div>
  )
}

const Skills = () => {
  const skills = [
    { name: "C++", icon: <PiFileCppBold />, level: 85 },
    { name: "HTML", icon: <FaHtml5 />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 90 },
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "Bootstap", icon: <FaBootstrap />, level: 80 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
    { name: "Node.js", icon: <FaNodeJs />, level: 85 },
    { name: "Express.js", icon: <SiExpress />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "MySQL", icon: <SiMysql  />, level: 85 },
   
  ]

  return (
    <div className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      {/* // <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10"> */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">MY EXPERTISE</p>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Skills.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 text-lg max-w-5xl mx-auto mb-12 text-center"
      >
        I've worked with a range of technologies in web development, from front-end to back-end. I'm particularly skilled in building interactive user interfaces with React, developing full-stack applications using Node.js and Express.js, and managing databases with MySQL and MongoDB. Below are my core technical skills and proficiency levels.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
