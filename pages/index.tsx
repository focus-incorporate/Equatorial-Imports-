import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/layout/Hero';
import ProductCard from '../components/product/ProductCard';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Product data based on the provided images
const products = [
  {
    name: "Espresso",
    description: "Una mezcla equilibrada entre granos de Arábica y Robusta da como resultado un sabor único con matices dulces y achocolatados.",
    intensity: 8,
    roastLevel: "Medio",
    imageUrl: "/images/daniels-espresso.png",
    price: 15.95,
    capsuleColor: "#000000"
  },
  {
    name: "Lungo",
    description: "Destacado por un sabor intenso y una crema que perdura. Un café ideal para disfrutar en todo momento del día.",
    intensity: 9,
    roastLevel: "Oscuro",
    imageUrl: "/images/daniels-lungo.png",
    price: 15.95,
    capsuleColor: "#FF69B4"
  },
  {
    name: "Cioccolato",
    description: "Un blend que combina los mejores granos de café con la intensidad y el cuerpo del chocolate negro.",
    intensity: 8,
    roastLevel: "Medio",
    imageUrl: "/images/daniels-cioccolato.png",
    price: 15.95,
    capsuleColor: "#8B4513"
  },
  // Add more products here
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-cream-light relative overflow-hidden">
        {/* Background Logo Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full" style={{
            backgroundImage: "url('/images/equatorial-imports-logo.png')",
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
            transform: "rotate(-15deg)",
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-brand-brown mb-4">
              Our Premium Selection
            </h2>
            <p className="text-xl text-coffee max-w-2xl mx-auto">
              Experience the perfect blend of tradition and innovation with our carefully curated coffee collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-brand-brown text-cream-light relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-xl mb-6">
                At Equatorial Imports, we bridge the gap between exceptional coffee producers 
                and discerning coffee lovers. Our journey began with a simple mission: to bring 
                the world's finest coffee experiences to your cup.
              </p>
              <button className="bg-brand-orange text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent-orange transition-colors duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/equatorial-imports-logo.png"
                    alt="Equatorial Imports"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 