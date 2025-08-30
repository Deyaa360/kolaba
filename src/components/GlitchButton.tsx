'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GlitchButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function GlitchButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary'
}: GlitchButtonProps) {
  const baseClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
    : 'bg-gray-800 text-gray-200 border border-gray-600'

  return (
    <motion.button
      className={`relative overflow-hidden px-8 py-4 rounded-lg font-semibold transition-all duration-300 group ${baseClass} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Main content */}
      <span className="relative z-30 flex items-center gap-2">
        {children}
      </span>

      {/* Glitch layers - only show on hover */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{
          color: '#00ffff',
          mixBlendMode: 'screen'
        }}
        initial={{ x: 0, opacity: 0 }}
        whileHover={{
          x: [-1, 1, -1],
          opacity: [0, 0.7, 0],
          transition: {
            duration: 0.2,
            repeat: 2,
            ease: 'easeInOut'
          }
        }}
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          color: '#ff00ff',
          mixBlendMode: 'screen'
        }}
        initial={{ x: 0, opacity: 0 }}
        whileHover={{
          x: [1, -1, 1],
          opacity: [0, 0.7, 0],
          transition: {
            duration: 0.2,
            repeat: 2,
            ease: 'easeInOut',
            delay: 0.05
          }
        }}
      >
        <span className="flex items-center gap-2">
          {children}
        </span>
      </motion.div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.1) 2px,
            rgba(255, 255, 255, 0.1) 4px
          )`
        }}
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: [0, 0.3, 0],
          transition: {
            duration: 0.2,
            repeat: 2
          }
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/50 to-pink-500/50 blur-xl"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
