'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Heart, Target, Star, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 overflow-hidden">
      
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-social-purple-200/40 to-social-pink-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-social-teal-200/40 to-social-blue-200/40 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Enhanced floating icons */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 15, -15, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 10 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 && <Heart className="w-5 h-5 text-social-pink-400/40" />}
            {i % 4 === 1 && <Users className="w-5 h-5 text-social-purple-400/40" />}
            {i % 4 === 2 && <Target className="w-5 h-5 text-social-teal-400/40" />}
            {i % 4 === 3 && <Star className="w-5 h-5 text-social-yellow-500/40" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/50 shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-lg">
                Why Choose Kolaba?
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block">Perfect for</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Creators & Brands
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We bridge the gap between creative talent and brand ambition, delivering 
            <span className="font-semibold text-social-purple-600"> UGC that converts</span> and 
            <span className="font-semibold text-social-pink-600"> campaigns that inspire</span>.
          </motion.p>
        </motion.div>

        {/* Key stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              number: "50+",
              label: "Vetted Creators",
              description: "Handpicked content creators",
              icon: Users,
              color: "text-social-purple-600",
              bg: "bg-social-purple-50",
              border: "border-social-purple-200"
            },
            {
              number: "300%",
              label: "Average ROAS",
              description: "Return on ad spend",
              icon: TrendingUp,
              color: "text-social-teal-600",
              bg: "bg-social-teal-50",
              border: "border-social-teal-200"
            },
            {
              number: "3-7",
              label: "Day Delivery",
              description: "From brief to final content",
              icon: Target,
              color: "text-social-pink-600",
              bg: "bg-social-pink-50",
              border: "border-social-pink-200"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`${stat.bg} ${stat.border} border rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg`}
              initial={{ scale: 0, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1, 
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl md:text-5xl font-black text-brand-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-bold text-brand-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-brand-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Value propositions for both audiences */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* For Creators */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-social-purple-500 to-social-pink-500 text-white rounded-full px-6 py-3">
                <Users className="w-5 h-5" />
                <span className="font-bold">For Content Creators</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-brand-gray-900">
                Turn your creativity into consistent income
              </h3>
              
              <p className="text-lg text-brand-gray-600 leading-relaxed">
                Join our exclusive network of skincare content creators. We match you with 
                premium brands, provide clear briefs, and ensure you're compensated fairly 
                for your creative work.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "💰",
                  title: "Competitive Compensation",
                  description: "$500-2000 per campaign based on your following and engagement"
                },
                {
                  icon: "📦",
                  title: "Free Products",
                  description: "Keep all products you review, from new launches to bestsellers"
                },
                {
                  icon: "🚀",
                  title: "Grow Your Following", 
                  description: "Brand collaborations expose you to new audiences"
                },
                {
                  icon: "✅",
                  title: "Professional Support",
                  description: "Our team guides you through every campaign"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <div>
                    <h4 className="font-bold text-brand-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-brand-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* For Brands */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-social-teal-500 to-social-blue-500 text-white rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">For Skincare Brands</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-brand-gray-900">
                Scale with authentic content that converts
              </h3>
              
              <p className="text-lg text-brand-gray-600 leading-relaxed">
                Get performance-focused UGC from vetted creators. Our streamlined process 
                delivers ad-ready content in days, not weeks, with full rights and usage 
                permissions included.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "📈",
                  title: "Proven Performance",
                  description: "300% average ROAS across all campaigns with detailed analytics"
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "3-7 day turnaround from brief to final video assets"
                },
                {
                  icon: "🎯",
                  title: "Platform Optimized",
                  description: "Content formatted perfectly for Meta, TikTok, and YouTube ads"
                },
                {
                  icon: "📊",
                  title: "Full Analytics",
                  description: "Comprehensive reporting on engagement, conversions, and ROI"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <div>
                    <h4 className="font-bold text-brand-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-brand-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-20 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-brand-gray-900 mb-6">
            Ready to get started?
          </h3>
          <p className="text-lg text-brand-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking to monetize your content or a brand 
            seeking authentic UGC, we're here to make it happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as Creator
            </motion.button>
            <motion.button 
              className="bg-white text-brand-gray-900 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-brand-gray-200 hover:border-social-purple-300 hover:bg-social-purple-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
