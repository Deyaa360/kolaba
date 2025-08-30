'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Heart, Target, Star, CheckCircle, Award, Shield, Clock } from 'lucide-react'
import GlitchText from './GlitchText'

export default function About() {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden" id="about">
      
      {/* Vibrant background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-teal-500/40 to-blue-500/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600 shadow-sm mb-6">
            <span className="text-purple-400 font-semibold">Why Choose Kolaba?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <GlitchText intensity="medium" continuous={true}>
              Perfect for
            </GlitchText>
            <GlitchText intensity="high" continuous={true}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Creators & Brands
              </span>
            </GlitchText>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between authentic content creators and skincare brands, creating partnerships 
            that drive real results for both sides of the equation.
          </p>
        </motion.div>

        {/* Dual Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* For Creators */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Creators</h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Transform your passion for skincare into a profitable career. Work with premium brands, 
              build your portfolio, and earn competitive rates while creating content you love.
            </p>

            <div className="space-y-4">
              {[
                { icon: Star, text: "Earn $500-2,000 per campaign" },
                { icon: Award, text: "Work with premium skincare brands" },
                { icon: Target, text: "Build professional portfolio" },
                { icon: Shield, text: "Full creative support & training" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply as Creator
            </motion.button>
          </motion.div>

          {/* For Brands */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Brands</h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Scale your marketing with authentic UGC that converts. Access vetted creators, 
              streamlined workflows, and performance-driven content that drives real ROI.
            </p>

            <div className="space-y-4">
              {[
                { icon: Clock, text: "3-7 day content delivery" },
                { icon: Target, text: "300% average ROAS" },
                { icon: Shield, text: "100% brand compliance" },
                { icon: CheckCircle, text: "Performance tracking & analytics" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Campaign
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { value: "50+", label: "Vetted Creators", gradient: "from-purple-400 to-pink-400" },
            { value: "2.3M", label: "Total Reach", gradient: "from-blue-400 to-teal-400" },
            { value: "300%", label: "Avg ROAS", gradient: "from-green-400 to-emerald-400" },
            { value: "4.9/5", label: "Client Rating", gradient: "from-yellow-400 to-orange-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
