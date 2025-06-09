import React from 'react';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/product/ProductCard';
import { motion } from 'framer-motion';

// Sample product data - we'll replace this with actual data from your files
const products = [
  {
    name: "Espresso Intenso",
    description: "A bold and intense espresso with rich crema and full body.",
    intensity: 9,
    roastLevel: "Dark",
    imageUrl: "/images/espresso-intenso.png",
    price: 15.95,
    capsuleColor: "#2C1810",
    origin: "South America",
    notes: ["Chocolate", "Caramel", "Nutty"],
    available: true,
    packageSize: 10
  },
  {
    name: "Lungo Elegante",
    description: "A smooth and elegant lungo with balanced acidity.",
    intensity: 7,
    roastLevel: "Medium",
    imageUrl: "/images/lungo-elegante.png",
    price: 15.95,
    capsuleColor: "#8B4513",
    origin: "Ethiopia",
    notes: ["Floral", "Citrus", "Honey"],
    available: true,
    packageSize: 10
  },
  // Add more products here
];

export default function Products() {
  return (
    <Layout title="Our Products | Equatorial Imports">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-serif font-bold text-coffee-dark mb-8">Our Premium Coffee Selection</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 