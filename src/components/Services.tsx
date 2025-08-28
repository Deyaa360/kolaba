'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Video, Megaphone, BarChart3, Sparkles, Shield } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Camera,
      title: "Photo Content Creation",
      description: "High-quality product photography and lifestyle shots that showcase your skincare products in authentic, relatable settings.",
      features: ["Product styling", "Lifestyle photography", "Before/after shots", "Flat lay compositions"]
    },
    {
      icon: Video,
      title: "Video Content Production",
      description: "Engaging video content including tutorials, reviews, and unboxing experiences that drive engagement and conversions.",
      features: ["Tutorial videos", "Product reviews", "Unboxing content", "Day-in-the-life vlogs"]
    },
    {
      icon: Megaphone,
      title: "Social Media Campaigns",
      description: "Comprehensive social media strategies with authentic content that resonates with Turkish audiences across all platforms.",
      features: ["Instagram campaigns", "TikTok content", "Stories & Reels", "Cross-platform strategy"]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed reporting and analytics to track campaign performance and measure ROI with actionable insights.",
      features: ["Engagement metrics", "Reach analysis", "Conversion tracking", "ROI reporting"]
    },
    {
      icon: Sparkles,
      title: "Brand Collaboration",
      description: "Strategic partnerships that align with your brand values and create authentic connections with your target audience.",
      features: ["Brand alignment", "Content strategy", "Creator matching", "Campaign planning"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous content review and approval process ensuring all content meets brand guidelines and quality standards.",
      features: ["Content review", "Brand compliance", "Quality control", "Approval workflow"]
    }
  ]

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
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Complete UGC Solutions for
            <span className="text-orange-500"> Skincare Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, we provide end-to-end content creation services 
            that help your brand connect authentically with Turkish consumers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group hover:border-orange-200"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6 group-hover:bg-orange-200 transition-colors">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Brand Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create authentic, engaging content that resonates with your audience 
              and drives real business results.
            </p>
            <motion.button
              className="bg-orange-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Campaign Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
