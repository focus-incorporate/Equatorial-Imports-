import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Layout title="About Us | Equatorial Imports">
      <div className="py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-serif font-bold text-coffee-dark mb-8">About Equatorial Imports</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">
              We are passionate about bringing the finest coffee experiences to your cup. 
              Specializing in premium coffee imports, we proudly represent Daniel's Blend and 
              Vaggio Espresso - two exceptional brands that embody excellence in coffee crafting.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-coffee mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              To connect coffee enthusiasts with exceptional coffee products, ensuring every cup 
              tells a story of quality, sustainability, and passion for coffee excellence.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-coffee mt-8 mb-4">Our Partners</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Daniel's Blend</h3>
                <p>
                  A premium coffee brand known for its exceptional blends and commitment 
                  to quality. Each capsule is crafted to deliver a perfect cup every time.
                </p>
              </div>
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Vaggio Espresso</h3>
                <p>
                  Bringing Italian coffee expertise to your home, Vaggio Espresso offers 
                  a range of carefully curated blends that capture the essence of authentic 
                  espresso.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 