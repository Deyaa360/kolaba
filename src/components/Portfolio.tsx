'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Heart, Share2, MessageCircle, TrendingUp, Users, Eye, Camera, Video, Instagram, Clock, Award } from 'lucide-react'
import Image from 'next/image'
import { getAssetPath } from '@/utils/paths'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Content', icon: Camera },
    { id: 'reels', label: 'Video Content', icon: Video },
    { id: 'posts', label: 'Photo Content', icon: Camera }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Morning Routine with GlowSkin",
      category: "reels",
      image: getAssetPath("/images/ugc1.jpg"),
      video: getAssetPath("/videos/ugc1.mp4"),
      brand: "GlowSkin",
      creator: "@skincare_queen_tr",
      avatar: getAssetPath("/images/hero-01.jpg"),
      followers: "245K",
      metrics: {
        likes: "47.2K",
        comments: "2.1K",
        shares: "8.7K",
        views: "2.3M"
      },
      type: "video",
      roas: "385%",
      engagement: "12.4%",
      duration: "0:45",
      description: "Authentic morning skincare routine featuring GlowSkin vitamin C serum"
    },
    {
      id: 2,
      title: "Before & After: 30 Days with PureDerm",
      category: "posts",
      image: getAssetPath("/images/ugc2.jpg"),
      brand: "PureDerm",
      creator: "@real_skin_journey",
      avatar: getAssetPath("/images/hero-02.jpg"),
      followers: "128K",
      metrics: {
        likes: "23.8K",
        comments: "1.4K",
        shares: "3.2K",
        views: "890K"
      },
      type: "image",
      roas: "420%",
      engagement: "8.7%",
      description: "30-day transformation using PureDerm acne treatment system"
    },
    {
      id: 3,
      title: "Hydration Heroes ft. AquaGlow",
      category: "reels",
      image: getAssetPath("/images/ugc3.jpg"),
      video: getAssetPath("/videos/ugc3.mp4"),
      brand: "AquaGlow",
      creator: "@hydrated_skin_babe",
      avatar: getAssetPath("/images/hero-03.jpg"),
      followers: "312K",
      metrics: {
        likes: "65.1K",
        comments: "3.7K",
        shares: "12.3K",
        views: "4.1M"
      },
      type: "video",
      roas: "295%",
      engagement: "15.2%",
      duration: "1:20",
      description: "Comprehensive review of AquaGlow's hydration collection"
    },
    {
      id: 4,
      title: "Gentle Cleansing with ClearSkin",
      category: "posts",
      image: getAssetPath("/images/ugc4.jpg"),
      brand: "ClearSkin",
      creator: "@sensitive_skin_solutions",
      avatar: getAssetPath("/images/hero-04.jpg"),
      followers: "89K",
      metrics: {
        likes: "18.6K",
        comments: "892",
        shares: "2.1K",
        views: "567K"
      },
      type: "image",
      roas: "340%",
      engagement: "9.8%",
      description: "Sensitive skin routine featuring ClearSkin gentle cleanser"
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section className="relative py-20 bg-gray-800 overflow-hidden" id="portfolio">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full blur-2xl" />
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
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-gray-200 font-semibold">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Creator
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Success Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results from authentic collaborations. See how our creators turn skincare passion 
            into powerful brand partnerships that drive engagement and sales.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-700/80 backdrop-blur-sm rounded-xl p-1 flex gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Content preview */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Video indicator */}
                {item.type === 'video' && (
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {item.duration}
                  </div>
                )}

                {/* Platform indicator */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full">
                  <Instagram className="w-4 h-4" />
                </div>

                {/* Engagement overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {item.metrics.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {item.metrics.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.metrics.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content info */}
              <div className="p-6">
                {/* Creator info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.creator}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.creator}</div>
                    <div className="text-sm text-gray-500">{item.followers} followers</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm font-medium text-purple-600">{item.brand}</div>
                    <div className="text-xs text-gray-500">Brand Partner</div>
                  </div>
                </div>

                {/* Content title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                {/* Performance metrics */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.roas}</div>
                    <div className="text-xs text-gray-500 font-medium">ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.engagement}</div>
                    <div className="text-xs text-gray-500 font-medium">Engagement</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our network of successful creators and start earning from your skincare passion. 
              Professional support, premium brands, competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply as Creator
              </motion.button>
              <motion.button 
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Brand Options
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
