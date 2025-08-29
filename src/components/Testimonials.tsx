'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users, Award, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      type: "brand",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "GlowSkin",
      image: "/images/hero-01.jpg",
      content: "Kolaba transformed our brand presence in Turkey. The creators delivered authentic content that drove a 250% increase in engagement and 340% ROAS.",
      rating: 5,
      metrics: { engagement: "+250%", roas: "340%", reach: "2.1M" }
    },
    {
      type: "creator",
      name: "Ayşe Demir",
      role: "Skincare Creator",
      company: "@skincare_queen_tr",
      image: "/images/hero-02.jpg",
      content: "Through Kolaba, I've partnered with premium brands and earned over $15K in my first 6 months. The support team is incredible and the opportunities are endless.",
      rating: 5,
      metrics: { earnings: "$15K+", followers: "+50K", partnerships: "12" }
    },
    {
      type: "brand",
      name: "Michael Chen",
      role: "Brand Manager", 
      company: "PureDerm",
      image: "/images/hero-03.jpg",
      content: "The quality of creators and seamless campaign management exceeded our expectations. Kolaba delivered measurable results with complete transparency.",
      rating: 5,
      metrics: { campaigns: "8", creators: "15", conversion: "+180%" }
    },
    {
      type: "creator",
      name: "Zeynep Kaya",
      role: "Beauty Influencer",
      company: "@real_skin_journey",
      image: "/images/hero-04.jpg",
      content: "Kolaba helped me turn my passion into a career. Working with top skincare brands has been a dream come true, and the earnings are life-changing.",
      rating: 5,
      metrics: { campaigns: "20+", earnings: "$25K+", growth: "+120K" }
    }
  ]

  const stats = [
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Active Creators", value: "50+", icon: Users },
    { label: "Brand Partners", value: "25+", icon: Award },
    { label: "Campaigns Delivered", value: "200+", icon: CheckCircle }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-semibold">Client Success</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Creators & Brands
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from our community of successful creators and satisfied brand partners 
            who've achieved their goals through our platform.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                testimonial.type === 'creator' 
                  ? 'border-purple-100 bg-gradient-to-br from-purple-50/50 to-pink-50/50' 
                  : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                testimonial.type === 'creator'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-gradient-to-r from-gray-600 to-gray-800'
              }`}>
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className={`text-lg font-bold ${
                      testimonial.type === 'creator' ? 'text-purple-600' : 'text-gray-900'
                    }`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 capitalize font-medium">{key}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className={`text-sm font-medium ${
                    testimonial.type === 'creator' ? 'text-purple-600' : 'text-gray-700'
                  }`}>
                    {testimonial.company}
                  </div>
                </div>
                <div className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${
                  testimonial.type === 'creator'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {testimonial.type === 'creator' ? 'Creator' : 'Brand'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Whether you're a creator looking to monetize your passion or a brand seeking authentic partnerships, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start as Creator
              </motion.button>
              <motion.button 
                className="bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold border-2 border-purple-500 hover:bg-purple-800 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Partner as Brand
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
