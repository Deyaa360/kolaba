'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home', isActive: pathname === '/' },
    { href: '/about', label: 'About', isActive: pathname === '/about' },
    { href: '/services', label: 'Services', isActive: pathname === '/services' },
    { href: '/portfolio', label: 'Portfolio', isActive: pathname === '/portfolio' },
    { href: '/contact', label: 'Contact', isActive: pathname === '/contact' }
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-gray-100' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center space-x-3 cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <Image
                    src="/images/logo.png"
                    alt="Kolaba"
                    width={44}
                    height={44}
                    className="rounded-xl shadow-medium"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div>
                  <span className={`text-2xl font-black transition-colors duration-300 ${
                    scrolled ? 'text-brand-gray-900' : 'text-white'
                  }`}>
                    Kolaba
                  </span>
                  <div className={`text-xs font-semibold transition-colors duration-300 ${
                    scrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500' : 'text-white/80'
                  }`}>
                    UGC Platform
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer group ${
                      item.isActive
                        ? scrolled 
                          ? 'text-purple-600 bg-purple-50 border border-purple-200' 
                          : 'text-white bg-white/30 border border-white/30'
                        : scrolled 
                          ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                          : 'text-white hover:text-white hover:bg-white/20'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {item.isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        layoutId="activeTab"
                        initial={{ x: '-50%' }}
                        animate={{ x: '-50%' }}
                      />
                    )}
                    {/* Enhanced hover indicator for non-active items */}
                    {!item.isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        whileHover={{ width: "60%", x: "-50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              
              <motion.div
                className="ml-6 pl-6 border-l border-gray-300/30 flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    For Creators
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 text-sm border-2 ${
                      scrolled 
                        ? 'bg-white text-brand-gray-900 border-brand-gray-200 hover:border-social-teal-300 hover:bg-social-teal-50' 
                        : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    For Brands
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Enhanced Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-100"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Enhanced close button */}
              <div className="flex justify-end p-6">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-3 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Enhanced Navigation Items */}
              <div className="px-6 py-4">
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className={`relative block py-4 px-6 rounded-xl font-semibold transition-all duration-300 mb-2 group ${
                        item.isActive
                          ? 'text-social-purple-600 bg-gradient-to-r from-social-purple-50 to-social-pink-50 border border-social-purple-100 shadow-soft'
                          : 'text-brand-gray-700 hover:text-social-purple-600 hover:bg-gradient-to-r hover:from-social-purple-50 hover:to-social-pink-50'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                      {item.isActive && (
                        <motion.div
                          className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-social-purple-500 to-social-pink-500 rounded-r-full"
                          layoutId="mobileActiveTab"
                          initial={{ y: '-50%' }}
                        />
                      )}
                      <motion.div
                        className="absolute right-4 top-1/2 w-2 h-2 bg-gradient-to-r from-social-purple-500 to-social-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ y: '-50%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </Link>
                ))}
                
                <div className="mt-8 pt-6 border-t border-brand-gray-200 space-y-3">
                  <Link href="/contact">
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => setIsOpen(false)}
                    >
                      For Creators
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      className="w-full bg-white text-brand-gray-900 py-4 rounded-2xl font-bold border-2 border-brand-gray-200 hover:border-social-teal-300 hover:bg-social-teal-50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      onClick={() => setIsOpen(false)}
                    >
                      For Brands
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
