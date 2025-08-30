'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Play, Users, TrendingUp, CheckCircle, Clock, Target, Heart, Share2, Star } from 'lucide-react'
import { getAssetPath } from '@/utils/paths'
import GlitchText from './GlitchText'
import GlitchButton from './GlitchButton'

export default function MainHero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Modern clean hero with subtle social accents */}
      <section className="relative min-h-screen flex items-center">
        {/* Dark gradient background with social vibes */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20" />
        
        {/* Vibrant accent elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Professional messaging with social accents */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Clean dual audience badge */}
              <motion.div
                className="inline-flex items-center gap-4 bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">Creators</span>
                </div>
                <div className="w-px h-4 bg-gray-600" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">Brands</span>
                </div>
              </motion.div>
              
              {/* Professional headline with glitch effect */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <GlitchText intensity="medium" continuous={true}>
                    <span className="block">Authentic UGC</span>
                  </GlitchText>
                  <GlitchText intensity="high" continuous={true}>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      That Converts
                    </span>
                  </GlitchText>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 font-medium leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Connect with Turkey's top skincare creators for authentic content that drives real results. 
                  <span className="block mt-2 text-gray-400">Professional. Fast. Performance-focused.</span>
                </motion.p>
              </div>

              {/* Clean metrics */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                {[
                  { 
                    icon: Users, 
                    number: "50+", 
                    label: "Vetted Creators"
                  },
                  { 
                    icon: Clock, 
                    number: "3-7", 
                    label: "Day Delivery"
                  },
                  { 
                    icon: Target, 
                    number: "100%", 
                    label: "Ad-Ready"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.15, duration: 0.6, type: "spring" }}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{item.number}</div>
                    <div className="text-sm font-medium text-gray-600">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Clean CTAs with glitch effect */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <GlitchButton variant="primary">
                  <Play className="w-5 h-5" />
                  See Our Work
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </GlitchButton>

                <GlitchButton variant="secondary">
                  <TrendingUp className="w-5 h-5" />
                  Book a Pilot
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </GlitchButton>
              </motion.div>
            </motion.div>

            {/* Right: Clean social-style content showcase */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Modern phone mockups */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 max-w-sm">
                  
                  {/* Phone 1 - Instagram style */}
                  <motion.div
                    className="relative bg-white rounded-[2rem] shadow-xl border-4 border-white overflow-hidden"
                    style={{ aspectRatio: '9/16', height: '280px' }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative h-full">
                      <Image
                        src={getAssetPath("/images/ugc1.jpg")}
                        alt="Creator content"
                        fill
                        className="object-cover"
                      />
                      {/* Clean gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      
                      {/* Modern UI elements */}
                      <div className="absolute top-3 left-3 right-3">
                        <div className="flex items-center gap-2 text-white">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white" />
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="font-semibold text-xs">@skincare_guru</span>
                              <CheckCircle className="w-3 h-3 text-blue-400" />
                            </div>
                            <div className="text-xs text-white/70">245K followers</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-xs font-medium mb-2 leading-tight">
                          Morning routine with @brandname ✨
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4 text-red-400 fill-current" />
                              <span className="font-medium">47.2K</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="w-3 h-3" />
                              <span className="font-medium">2.1K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone 2 - TikTok style */}
                  <motion.div
                    className="relative bg-white rounded-[2rem] shadow-xl border-4 border-white overflow-hidden mt-8"
                    style={{ aspectRatio: '9/16', height: '280px' }}
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="relative h-full">
                      <Image
                        src={getAssetPath("/images/ugc2.jpg")}
                        alt="Creator content"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      
                      <div className="absolute top-3 left-3 right-3">
                        <div className="flex items-center gap-2 text-white">
                          <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full border-2 border-white" />
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="font-semibold text-xs">@beauty_expert</span>
                              <CheckCircle className="w-3 h-3 text-blue-400" />
                            </div>
                            <div className="text-xs text-white/70">156K followers</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-xs font-medium mb-2 leading-tight">
                          Before & after results! 30 days 📈
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4 text-red-400 fill-current" />
                              <span className="font-medium">89.3K</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="w-3 h-3" />
                              <span className="font-medium">5.6K</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Results card */}
                <motion.div
                  className="absolute -right-8 top-16 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">2.3M</div>
                    <div className="text-xs text-gray-600 font-medium">Total Views</div>
                  </div>
                </motion.div>

                {/* Performance card */}
                <motion.div
                  className="absolute -left-8 bottom-20 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">+250%</div>
                      <div className="text-xs text-gray-600">Engagement</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold">Professional UGC Platform</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
