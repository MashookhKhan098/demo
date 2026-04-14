"use client"

import { useState, useEffect } from "react"

export default function DisclaimerPopup() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when popup is open
      document.body.style.overflow = "hidden"
    } else {
      // Restore scrolling
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleAgree = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-8 max-w-3xl border shadow-lg rounded-sm text-center">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          On account of restrictions imposed by the Rules of the Bar Council of India, we are permitted to provide only the information as on this web page. You may contact us at info@urelegal.in to learn more about the firm's history, practice areas, and professionals.
        </p>
        <button 
          onClick={handleAgree}
          className="px-8 py-2 border-2 border-blue-900 text-blue-900 font-semibold hover:bg-blue-50 transition-colors uppercase tracking-wider"
        >
          I Agree
        </button>
      </div>
    </div>
  )
}
