"use client"

import { useState, useEffect } from "react"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({ darkMode, toggleTheme }) => {
const [active, setActive] = useState("")
const [toggle, setToggle] = useState(false)
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)
}, [])

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

return (
  <nav
    className={`fixed top-0 w-full flex items-center py-8 h-16 z-20 ${
      scrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"
    } transition-all duration-300`}
  >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <a
        href="#hero"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}
      >
        <p className="text-[18px] font-bold cursor-pointer flex text-gray-800 dark:text-white">
          Asif Mohd &nbsp;
          <span className="hidden sm:block">| Developer</span>
        </p>
      </a>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-800 text-xl" />}
        </button>

        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-blue-500" : "text-gray-800 dark:text-white"
              } hover:text-blue-500 dark:hover:text-blue-400 text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-gray-800 dark:text-white text-[28px] cursor-pointer z-10"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col gap-4 justify-end items-start">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
}

export default Navbar
