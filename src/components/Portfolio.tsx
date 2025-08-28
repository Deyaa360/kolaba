'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('photos')

  const portfolioItems = {
    photos: [
      {
        src: '/images/ugc1.jpg',
        title: 'Skincare Routine Flat Lay',
        creator: 'Ayşe Kaya',
        brand: 'GlowSkin',
        engagement: '12.5K',
        type: 'photo'
      },
      {
        src: '/images/ugc2.jpg',
        title: 'Before & After Transformation',
        creator: 'Zehra Özkan',
        brand: 'PureDerm',
        engagement: '18.2K',
        type: 'photo'
      },
      {
        src: '/images/ugc3.jpg',
        title: 'Morning Routine Tutorial',
        creator: 'Elif Demir',
        brand: 'HydraGlow',
        engagement: '25.8K',
        type: 'photo'
      },
      {
        src: '/images/ugc4.jpg',
        title: 'Product Review & Demo',
        creator: 'Seda Yılmaz',
        brand: 'ClearSkin',
        engagement: '31.4K',
        type: 'photo'
      }
    ],
    videos: [
      {
        src: '/videos/ugc1.mp4',
        thumbnail: '/images/ugc1.jpg',
        title: 'Skincare Morning Routine',
        creator: 'Ayşe Kaya',
        brand: 'GlowSkin',
        engagement: '45.2K',
        type: 'video'
      },
      {
        src: '/videos/ugc2.mp4',
        thumbnail: '/images/ugc2.jpg',
        title: 'Product Unboxing & First Impressions',
        creator: 'Zehra Özkan',
        brand: 'PureDerm',
        engagement: '38.7K',
        type: 'video'
      },
      {
        src: '/videos/ugc3.mp4',
        thumbnail: '/images/ugc3.jpg',
        title: 'Get Ready With Me - Skincare Edition',
        creator: 'Elif Demir',
        brand: 'HydraGlow',
        engagement: '52.3K',
        type: 'video'
      },
      {
        src: '/videos/ugc4.mp4',
        thumbnail: '/images/ugc4.jpg',
        title: '30-Day Skincare Challenge Results',
        creator: 'Seda Yılmaz',
        brand: 'ClearSkin',
        engagement: '67.1K',
        type: 'video'
      }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Authentic Content That
            <span className="text-orange-500"> Drives Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our talented creators have brought brands to life through 
            compelling, authentic user-generated content.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'photos'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              Photo Content
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'videos'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              Video Content
            </button>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {portfolioItems[activeTab as keyof typeof portfolioItems].map((item, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                {/* Image/Video Thumbnail */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.type === 'video' ? (item as any).thumbnail : item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-orange-500 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="text-sm font-medium">{item.engagement} engagements</div>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>by {item.creator}</span>
                    <span className="font-semibold text-orange-500">{item.brand}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-8">Campaign Results That Speak for Themselves</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2.5M+</div>
              <div className="text-orange-100">Total Reach</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">350%</div>
              <div className="text-orange-100">Avg. Engagement Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
