import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductDetailProps {
  name: string;
  description: string;
  intensity: number;
  roastLevel: string;
  imageUrl: string;
  price: number;
  capsuleColor?: string;
  origin?: string;
  notes?: string[];
  available: boolean;
  packageSize: number;
}

export default function ProductDetail({
  name,
  description,
  intensity,
  roastLevel,
  imageUrl,
  price,
  capsuleColor,
  origin,
  notes = [],
  available,
  packageSize
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] bg-cream rounded-lg overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Product Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-serif font-bold text-coffee-dark">{name}</h1>
          
          <p className="text-lg text-gray-600">{description}</p>
          
          <div className="space-y-4">
            {/* Product Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-coffee-dark">Intensity</h3>
                <div className="flex items-center mt-2">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full mr-1 ${
                        i < intensity ? 'bg-coffee-dark' : 'bg-cream-dark'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-coffee-dark">Roast Level</h3>
                <p className="mt-2">{roastLevel}</p>
              </div>
            </div>

            {/* Origin and Notes */}
            {origin && (
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-coffee-dark">Origin</h3>
                <p className="mt-2">{origin}</p>
              </div>
            )}

            {notes.length > 0 && (
              <div className="bg-cream p-4 rounded-lg">
                <h3 className="font-semibold text-coffee-dark">Tasting Notes</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {notes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-coffee text-white rounded-full text-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price and Add to Cart */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-coffee-dark">
                  ${price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-600">
                  {packageSize} capsules per box
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-coffee-dark hover:bg-cream-dark rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-coffee-dark hover:bg-cream-dark rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  className={`flex-grow btn-primary ${
                    !available && 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!available}
                >
                  {available ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 