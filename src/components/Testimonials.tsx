'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "GlowSkin",
      image: "/images/hero-01.jpg",
      content: "Kolaba transformed our brand presence in Turkey. The content creators they connected us with produced authentic, engaging content that resonated perfectly with our target audience. Our engagement rates increased by 250%!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Brand Manager",
      company: "PureDerm",
      image: "/images/hero-02.jpg",
      content: "Working with Kolaba has been a game-changer for our UGC strategy. The quality of creators and the seamless process made our campaign launch incredibly smooth. The ROI exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketing Lead",
      company: "HydraGlow",
      image: "/images/hero-03.jpg",
      content: "The team at Kolaba understands the Turkish market like no one else. They matched us with creators who truly embodied our brand values, resulting in content that felt genuine and drove real conversions.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "CMO",
      company: "ClearSkin",
      image: "/images/hero-04.jpg",
      content: "Kolaba's platform made influencer collaboration effortless. The creators were professional, the content was exceptional, and the campaign management was flawless. We're planning our next campaign already!",
      rating: 5
    }
  ]

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
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Clients
            <span className="text-orange-500"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the brands who have experienced 
            the power of authentic content creation with Kolaba.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted by Leading Brands Worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
              {/* Placeholder for brand logos */}
              <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand Logo</span>
              </div>
              <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand Logo</span>
              </div>
              <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand Logo</span>
              </div>
              <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Brand Logo</span>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Successful Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
