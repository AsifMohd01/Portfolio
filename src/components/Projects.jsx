"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import FocusLearn from "../assets/Focus.png"
import Pos from "../assets/Pos.png"
import SmartHome from "../assets/SmartHome.png"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
const [isHovered, setIsHovered] = useState(false)

return (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-xl transition-all duration-300"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="relative w-full h-[230px] overflow-hidden rounded-lg">
      <img
        src={image || "/placeholder.svg?height=230&width=360"}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      <div className="absolute inset-0 flex justify-end m-3 gap-2">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <FaGithub className="w-1/2 h-1/2 text-white" />
        </div>
        <div
          onClick={() => window.open(demo_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <FaExternalLinkAlt className="w-1/2 h-1/2 text-white" />
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-gray-800 dark:text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-[14px]">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </motion.div>
)
}

const Projects = () => {
  const projects = [
    {
      name: "FocusLearn",
      description:
        "A personalized learning platform that helps users create structured learning journeys using YouTube videos while minimizing distractions. It includes progress tracking and note-taking features.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: FocusLearn,
      source_code_link: "https://github.com/AsifMohd01/FocusLearn",
      demo_link: "https://numan-focuslearn.vercel.app",
    },
    {
      name: "Social Media Platform",
      description:
        "A full-featured social media website where users can create posts, like, comment, share content, and interact in real-time. Built with MERN stack and JWT authentication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "expressjs",
          color: "purple-text-gradient",
        },
      ],
      image: "/placeholder.svg?height=230&width=360",
      source_code_link: "https://github.com",
      demo_link: "https://example.com",
    },
    {
      name: "Smart Home Energy Dashboard",
      description:
        "A smart home energy monitoring system that tracks real-time energy usage, provides data visualization, and allows users to set energy budgets and receive alerts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "expressjs",
          color: "purple-text-gradient",
        },
      ],
      image: SmartHome,
      source_code_link: "https://github.com/AsifMohd01/smart-home-energy-snapshot",
      demo_link: "https://example.com",
    },
    {
      name: "POS System",
      description:
        "A modern Point of Sale system with multi-language support, real-time currency conversion, shopping cart, and an analytics dashboard.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwindcss", color: "pink-text-gradient" },
        { name: "react-intl", color: "orange-text-gradient" },
        { name: "framer-motion", color: "green-text-gradient" },
      ],
      image: Pos,
      source_code_link: "https://github.com/AsifMohd01/pos-project",
      demo_link: "https://asif-pos.vercel.app/",
    },
   
  ];
  

return (
  <div className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
  {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10"> */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
      <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">MY WORK</p>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Projects.</h2>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-gray-600 dark:text-gray-300 text-lg max-w-5xl mx-auto mb-12 text-center"
    >
      The following projects showcase my skills and experience through real-world examples of my work. Each project is
      briefly described with links to code repositories and live demos. They reflect my ability to solve complex
      problems, work with different technologies, and manage projects effectively.
    </motion.p>

    <div className="flex flex-wrap justify-center gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </div>
)
}

export default Projects
