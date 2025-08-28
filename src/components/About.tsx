'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Target, Zap, Award } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const features = [
    {
      icon: Users,
      title: "Curated Creators",
      description: "Handpicked Turkish content creators specializing in skincare and beauty content"
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Strategic content creation that aligns with your brand values and audience"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or authenticity"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful campaigns with measurable ROI and engagement"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-orange-500 font-semibold text-lg">About Kolaba</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Bridging Brands with 
                <span className="text-orange-500"> Authentic Voices</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Kolaba is the premier platform connecting skincare brands with Turkey's most talented 
              content creators. We understand that authentic user-generated content is the cornerstone 
              of modern digital marketing, and we're here to make those connections seamless and effective.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              Our carefully vetted network of creators specializes in skincare content, ensuring your 
              brand message resonates with the right audience through genuine, engaging storytelling 
              that drives real results.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Images */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/hero-02.jpg"
                    alt="Content Creator 1"
                    width={300}
                    height={400}
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-8"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/hero-03.jpg"
                    alt="Content Creator 2"
                    width={300}
                    height={400}
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-orange-100"
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
