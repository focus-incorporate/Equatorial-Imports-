import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  description: string;
  intensity: number;
  roastLevel: string;
  imageUrl: string;
  price: number;
  capsuleColor?: string;
}

export default function ProductCard({
  name,
  description,
  intensity,
  roastLevel,
  imageUrl,
  price,
  capsuleColor
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden
                 hover:shadow-xl transition-shadow duration-300
                 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Intensity Badge */}
        <div className="absolute top-4 right-4 bg-coffee-dark text-cream px-3 py-1 rounded-full
                      text-sm font-medium">
          Intensity: {intensity}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-coffee-dark mb-2">{name}</h3>
        
        <div className="flex items-center mb-4">
          <span className="text-sm text-coffee">{roastLevel} Roast</span>
          {capsuleColor && (
            <div 
              className="ml-3 w-4 h-4 rounded-full" 
              style={{ backgroundColor: capsuleColor }}
              aria-label={`${name} capsule color`}
            />
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-coffee-dark">
            ${price.toFixed(2)}
          </span>
          
          <button className="bg-coffee hover:bg-coffee-dark text-cream px-4 py-2 
                         rounded-md transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
} 