'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  continuous?: boolean
  hoverOnly?: boolean
}

export default function GlitchText({ 
  children, 
  className = '', 
  intensity = 'medium',
  continuous = true,
  hoverOnly = false
}: GlitchTextProps) {
  const intensityConfig = {
    low: { offset: 1, duration: 0.1, interval: 4 },
    medium: { offset: 2, duration: 0.15, interval: 3 },
    high: { offset: 3, duration: 0.2, interval: 2 }
  }

  const config = intensityConfig[intensity]

  const glitchVariants = {
    normal: {
      x: 0,
      y: 0,
      filter: 'none'
    },
    glitch: {
      x: [0, -config.offset * 0.5, config.offset * 0.5, -config.offset * 0.5, 0],
      y: [0, config.offset * 0.3, -config.offset * 0.3, config.offset * 0.3, 0],
      filter: [
        'none',
        'hue-rotate(90deg) saturate(200%)',
        'hue-rotate(270deg) saturate(200%)',
        'hue-rotate(180deg) saturate(150%)',
        'none'
      ]
    }
  }

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Invisible padding container to prevent boundary visibility */}
      <div className="relative overflow-hidden" style={{ 
        padding: `${config.offset + 1}px ${config.offset * 2 + 2}px`,
        margin: `-${config.offset + 1}px -${config.offset * 2 + 2}px`
      }}>
        {/* Main text layer */}
        <motion.div
          className="relative z-30"
          variants={glitchVariants}
          animate={continuous ? 'glitch' : 'normal'}
          transition={
            continuous
              ? {
                  repeat: Infinity,
                  repeatDelay: config.interval,
                  duration: config.duration,
                  ease: 'easeInOut'
                }
              : { duration: config.duration, ease: 'easeInOut' }
          }
          whileHover={hoverOnly ? 'glitch' : undefined}
        >
        {children}
      </motion.div>

      {/* Cyan/Blue layer (shifted left) - only visible during glitch */}
      <motion.div
        className="absolute inset-0 z-20 text-cyan-400"
        style={{
          mixBlendMode: 'screen',
          filter: 'blur(0.3px)'
        }}
        variants={{
          normal: { x: 0, opacity: 0 },
          glitch: { 
            x: [-config.offset * 1.5, -config.offset * 2, -config.offset * 1.5], 
            opacity: [0, 0.9, 0.7, 0]
          }
        }}
        animate={continuous ? 'glitch' : 'normal'}
        transition={
          continuous
            ? {
                repeat: Infinity,
                repeatDelay: config.interval,
                duration: config.duration,
                ease: 'easeInOut'
              }
            : { duration: config.duration, ease: 'easeInOut' }
        }
        whileHover={hoverOnly ? 'glitch' : undefined}
      >
        {children}
      </motion.div>

      {/* Pink/Red layer (shifted right) - only visible during glitch */}
      <motion.div
        className="absolute inset-0 z-10 text-pink-500"
        style={{
          mixBlendMode: 'screen',
          filter: 'blur(0.3px)'
        }}
        variants={{
          normal: { x: 0, opacity: 0 },
          glitch: { 
            x: [config.offset * 1.5, config.offset * 2, config.offset * 1.5], 
            opacity: [0, 0.9, 0.7, 0]
          }
        }}
        animate={continuous ? 'glitch' : 'normal'}
        transition={
          continuous
            ? {
                repeat: Infinity,
                repeatDelay: config.interval,
                duration: config.duration,
                ease: 'easeInOut',
                delay: 0.02 // Slight delay for more realistic glitch
              }
            : { duration: config.duration, ease: 'easeInOut' }
        }
        whileHover={hoverOnly ? 'glitch' : undefined}
      >
        {children}
      </motion.div>

      {/* Flickering scanlines effect - like old light bulb */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(255, 255, 255, 0.05) 1px,
            rgba(255, 255, 255, 0.05) 2px
          )`
        }}
        variants={{
          normal: { opacity: 0 },
          glitch: { 
            opacity: [0, 0.4, 0.6, 0.2, 0]
          }
        }}
        animate={continuous ? 'glitch' : 'normal'}
        transition={
          continuous
            ? {
                repeat: Infinity,
                repeatDelay: config.interval,
                duration: config.duration,
                ease: 'easeInOut'
              }
            : { duration: config.duration, ease: 'easeInOut' }
        }
        whileHover={hoverOnly ? 'glitch' : undefined}
      />
      </div>
    </div>
  )
}
