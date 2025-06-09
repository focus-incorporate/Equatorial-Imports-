import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern">
        {/* Animated Logo Watermarks */}
        <div className="absolute w-full h-full opacity-5">
          <div className="absolute -right-20 -top-20 w-96 h-96">
            <Image
              src="/images/equatorial-imports-logo.png"
              alt=""
              fill
              className="object-contain rotate-12"
            />
          </div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96">
            <Image
              src="/images/equatorial-imports-logo.png"
              alt=""
              fill
              className="object-contain -rotate-12"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-brown"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Premium Coffee
              <span className="block text-brand-orange">Imported with Care</span>
            </h1>
            <p className="text-xl mb-8 text-coffee">
              Discover the finest selection of Daniel's Blend and Vaggio Espresso,
              carefully sourced from the world's premier coffee regions.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-brown text-cream-light px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-orange transition-colors duration-300">
                Shop Now
              </button>
              <button className="border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-brown hover:text-cream-light transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/equatorial-imports-logo.png"
                alt="Equatorial Imports"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-brand-orange rounded-full opacity-20"
            />
            <motion.div
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-brand-green rounded-full opacity-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 