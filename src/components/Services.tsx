'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Star, Clock, Award, CheckCircle, Camera, Video, DollarSign, Target } from 'lucide-react'
import GlitchText from './GlitchText'

export default function Services() {
  const creatorServices = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "Create authentic skincare content that resonates with Turkish audiences",
      features: ["Photo & video content", "Story highlights", "Reels & TikToks", "Tutorial content"]
    },
    {
      icon: DollarSign,
      title: "Earn $500-2,000",
      description: "Competitive rates for quality content with top skincare brands",
      features: ["Per campaign payments", "Bonus opportunities", "Long-term partnerships", "Performance incentives"]
    },
    {
      icon: Award,
      title: "Professional Support",
      description: "Full creative and technical support throughout your creator journey",
      features: ["Content strategy", "Brand guidelines", "Technical assistance", "Growth coaching"]
    }
  ]

  const brandServices = [
    {
      icon: Target,
      title: "UGC Campaigns",
      description: "Authentic user-generated content that drives real conversions",
      features: ["Vetted creators", "Brand compliance", "Content approval", "Performance tracking"]
    },
    {
      icon: TrendingUp,
      title: "300% Average ROAS",
      description: "Measurable results with transparent reporting and analytics",
      features: ["Performance metrics", "ROI tracking", "Audience insights", "Campaign optimization"]
    },
    {
      icon: Clock,
      title: "3-7 Day Delivery",
      description: "Fast turnaround times without compromising on quality",
      features: ["Quick onboarding", "Efficient workflows", "Quality control", "Timely delivery"]
    }
  ]

  return (
    <section className="relative py-20 bg-gray-800 overflow-hidden" id="services">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-3 bg-gray-700/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600 shadow-sm mb-6">
            <Star className="w-5 h-5 text-purple-400" />
            <span className="text-gray-200 font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <GlitchText intensity="low" continuous={true}>
              Perfect for
            </GlitchText>
            <GlitchText intensity="medium" continuous={true}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Every Partnership
              </span>
            </GlitchText>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're a creator looking to monetize your skincare passion or a brand seeking 
            authentic content, we have the perfect solution for you.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          {/* For Creators */}
          <div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Creators</h3>
              <p className="text-gray-300">Turn your passion into profit with premium brand partnerships</p>
            </motion.div>

            <div className="space-y-6">
              {creatorServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-600 hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.title === "300% Average ROAS" ? (
                          <GlitchText intensity="high" continuous={true}>
                            {service.title}
                          </GlitchText>
                        ) : (
                          service.title
                        )}
                      </h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center gap-2 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (featureIndex * 0.1) }}
                          >
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Brands */}
          <div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Brands</h3>
              <p className="text-gray-300">Scale your marketing with authentic UGC that converts</p>
            </motion.div>

            <div className="space-y-6">
              {brandServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-600 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center gap-2 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (featureIndex * 0.1) }}
                          >
                            <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful creators and brands who trust Kolaba for their UGC partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply as Creator
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
