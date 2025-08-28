'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Play, Users, TrendingUp, Heart, Share2, Camera, CheckCircle, Star, Clock, Target } from 'lucide-react'

export default function MainHero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Main Hero Section with Dual Appeal */}
      <section className="relative min-h-screen flex items-center">
        {/* Enhanced vibrant gradient background with better layering */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-teal-500" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/90 via-transparent to-teal-600/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-pink-500/20 to-transparent" />
        
        {/* Enhanced floating social icons with better distribution */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { left: '8%', top: '15%', delay: 0, icon: Heart, size: 'w-7 h-7' },
            { left: '85%', top: '12%', delay: 0.5, icon: Play, size: 'w-6 h-6' },
            { left: '92%', top: '35%', delay: 1, icon: Camera, size: 'w-8 h-8' },
            { left: '12%', top: '75%', delay: 1.5, icon: Share2, size: 'w-5 h-5' },
            { left: '88%', top: '68%', delay: 2, icon: Heart, size: 'w-6 h-6' },
            { left: '15%', top: '45%', delay: 2.5, icon: Play, size: 'w-7 h-7' },
            { left: '5%', top: '60%', delay: 3, icon: Camera, size: 'w-5 h-5' },
            { left: '95%', top: '85%', delay: 3.5, icon: Share2, size: 'w-6 h-6' }
          ].map((position, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.4, 0.8, 0.3, 0.6]
              }}
              transition={{
                duration: 8 + i * 0.3,
                repeat: Infinity,
                delay: position.delay,
                ease: "easeInOut"
              }}
            >
              <position.icon className={`${position.size} text-white/50 drop-shadow-lg`} />
            </motion.div>
          ))}
          
          {/* Floating gradient orbs for extra visual interest */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full blur-xl"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 70}%`,
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? 'rgba(168, 85, 247, 0.3)' :
                  i % 3 === 1 ? 'rgba(236, 72, 153, 0.3)' :
                  'rgba(20, 184, 166, 0.3)'
                } 0%, transparent 70%)`
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-20, 20, -20],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Main messaging that appeals to both audiences */}
            <motion.div
              className="space-y-8 text-center lg:text-left text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Enhanced dual audience badge */}
              <motion.div
                className="inline-flex items-center gap-4 bg-white/25 backdrop-blur-lg text-white rounded-full px-8 py-4 border border-white/40 shadow-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold">Creators</span>
                </div>
                <div className="w-px h-6 bg-white/50" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold">Brands</span>
                </div>
              </motion.div>
              
              {/* Enhanced main headline with better typography */}
              <div className="space-y-6">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] text-white tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="block drop-shadow-lg">UGC that</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-teal-300 drop-shadow-2xl">
                    actually works
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed max-w-2xl drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Connect creators with skincare brands for authentic content that drives real results. 
                  <span className="block mt-2 text-white/80">Fast delivery, proven performance.</span>
                </motion.p>
              </div>

              {/* Enhanced key benefits with glassmorphism */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                {[
                  { 
                    icon: Users, 
                    number: "50+", 
                    label: "Vetted Creators",
                    gradient: "from-purple-400 to-pink-400"
                  },
                  { 
                    icon: Clock, 
                    number: "3-7", 
                    label: "Day Delivery",
                    gradient: "from-pink-400 to-rose-400"
                  },
                  { 
                    icon: Target, 
                    number: "100%", 
                    label: "Ad-Ready",
                    gradient: "from-teal-400 to-cyan-400"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/25 backdrop-blur-xl rounded-3xl p-8 border border-white/40 text-center group hover:scale-105 hover:bg-white/30 transition-all duration-500 shadow-2xl"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.1 + index * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-white mb-2 drop-shadow-lg">{item.number}</div>
                    <div className="text-base font-bold text-white/90 drop-shadow-md">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced dual CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <motion.button 
                  className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                  See Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  className="group bg-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TrendingUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
                  Book a Pilot
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced social-style content showcase */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Enhanced mobile-style video frames */}
              <div className="relative max-w-sm">
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Enhanced Video Frame 1 - TikTok style */}
                  <motion.div
                    className="relative bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden"
                    style={{ aspectRatio: '9/16' }}
                    animate={{ 
                      y: [-15, 15, -15],
                      rotate: [-3, 3, -3]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0
                    }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                  >
                    <div className="relative h-full">
                      <Image
                        src="/images/ugc1.jpg"
                        alt="Creator content showcase"
                        fill
                        className="object-cover"
                      />
                      {/* Enhanced gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      
                      {/* Enhanced TikTok-style UI elements */}
                      <div className="absolute top-4 left-4 right-4">
                        <div className="flex items-center gap-3 text-white">
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm">@skincarecreatOR</span>
                              <CheckCircle className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="text-xs text-white/80">2.3M followers</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-semibold mb-3 leading-tight">
                          ✨ Morning routine with @brandname 
                          <br />
                          <span className="text-xs text-white/80">#skincare #ugc #morningroutine</span>
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Heart className="w-5 h-5 text-red-400 fill-current" />
                              <span className="font-semibold">2.3k</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="w-4 h-4" />
                              <span className="font-semibold">124</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Video Frame 2 - Instagram Reel style */}
                  <motion.div
                    className="relative bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden mt-12"
                    style={{ aspectRatio: '9/16' }}
                    animate={{ 
                      y: [15, -15, 15],
                      rotate: [3, -3, 3]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                  >
                    <div className="relative h-full">
                      <Image
                        src="/images/ugc2.jpg"
                        alt="Brand content showcase"
                        fill
                        className="object-cover"
                      />
                      {/* Instagram-style gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                      
                      {/* Enhanced Instagram Reel UI elements */}
                      <div className="absolute top-4 left-4 right-4">
                        <div className="flex items-center gap-3 text-white">
                          <div className="w-10 h-10 bg-gradient-instagram rounded-full border-2 border-white" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm">@beautycollab</span>
                              <CheckCircle className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="text-xs text-white/80">985k followers</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-semibold mb-3 leading-tight">
                          🔥 3-step glow routine results
                          <br />
                          <span className="text-xs text-white/80">#glowup #skincareroutine #results</span>
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Heart className="w-5 h-5 text-red-400 fill-current" />
                              <span className="font-semibold">5.8k</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="w-4 h-4" />
                              <span className="font-semibold">287</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced floating service highlights */}
                <div className="absolute -top-12 -left-12 -right-12 -bottom-12 pointer-events-none">
                  {/* Service highlight 1 - Quality */}
                  <motion.div
                    className="absolute top-1/4 -left-20 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 px-6 py-4 min-w-max"
                    animate={{ 
                      y: [-8, 8, -8],
                      rotate: [-2, 2, -2],
                      opacity: 1, 
                      scale: 1
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">Quality</div>
                        <div className="text-sm text-gray-600 font-medium">Content First</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service highlight 2 - Creative */}
                  <motion.div
                    className="absolute top-2/3 -right-24 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 px-6 py-4 min-w-max"
                    animate={{ 
                      y: [8, -8, 8],
                      rotate: [2, -2, 2],
                      opacity: 1, 
                      scale: 1
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <Heart className="w-6 h-6 text-white fill-current" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">Creative</div>
                        <div className="text-sm text-gray-600 font-medium">UGC Solutions</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Service highlight 3 - Professional */}
                  <motion.div
                    className="absolute bottom-1/4 -left-16 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 px-6 py-4 min-w-max"
                    animate={{ 
                      y: [-6, 6, -6],
                      rotate: [-1, 1, -1],
                      opacity: 1, 
                      scale: 1
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">Pro</div>
                        <div className="text-sm text-gray-600 font-medium">Service Delivery</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                  animate={{ 
                    y: [-5, 5, -5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900 mb-1">4.9/5</div>
                    <div className="text-sm text-gray-600 mb-2">avg rating</div>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                  animate={{ 
                    x: [-5, 5, -5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-teal-500" />
                    <div>
                      <div className="text-2xl font-black text-gray-900">300%</div>
                      <div className="text-sm text-gray-600">avg ROAS</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary section showcasing the dual value proposition */}
      <section className="relative py-20 bg-gradient-to-r from-brand-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* For Creators */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-social-purple-500 to-social-pink-500 text-white rounded-full px-6 py-3">
                <Users className="w-5 h-5" />
                <span className="font-bold">For Creators</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-gray-900">
                Earn creating content you love
              </h2>
              <p className="text-lg text-brand-gray-600">
                Join our vetted network of skincare content creators. Work with premium brands, 
                earn competitive rates, and build your portfolio with professional campaigns.
              </p>
              <div className="space-y-4">
                {[
                  "💰 $500-2000 per campaign",
                  "📦 Free products to review", 
                  "🚀 Boost your following",
                  "✅ Professional support"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-brand-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* For Brands */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-social-teal-500 to-social-blue-500 text-white rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">For Brands</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-gray-900">
                Scale with authentic UGC
              </h2>
              <p className="text-lg text-brand-gray-600">
                Get ad-ready video content from verified creators in days, not weeks. 
                Performance-focused campaigns that drive real ROI.
              </p>
              <div className="space-y-4">
                {[
                  "📈 300% average ROAS",
                  "⚡ 3-7 day turnaround", 
                  "🎯 Meta & TikTok optimized",
                  "📊 Full performance tracking"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-brand-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
