"use client"

import { useEffect, useState } from "react"

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
      <div className="w-20 h-20 mb-4">
        <div className="canvas-loader"></div>
      </div>
      <h2 className="text-white text-xl font-bold mb-2">Loading</h2>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-white mt-2">{progress}%</p>
    </div>
  )
}

export default Loader

