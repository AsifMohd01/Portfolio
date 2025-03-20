"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    // <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
        <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-2">GET IN TOUCH</p>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">
          I'm open to exciting opportunities where I can contribute my skills and expertise. If you have any requests or questions, don't hesitate to contact me using the form.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">asif.mohd@campusuvce.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-300">+91 8491040620</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-gray-700 dark:text-gray-300 mb-2 block">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-300 mb-2 block">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-300 mb-2 block">Your Message</label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="py-4 px-8  bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-fit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 font-medium">Thank you! I'll get back to you as soon as possible.</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
