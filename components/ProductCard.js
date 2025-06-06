import React from 'react'

export default function ProductCard({ name, intensity, roast, flavor, brand, image }) {
  return (
    <div className="bg-white shadow p-6 rounded">
      {image && (
        <img src={image} alt={name} className="mb-4 w-full h-48 object-cover rounded" />
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm">Intensity: {intensity}</p>
      <p className="text-sm">Roast: {roast}</p>
      <p className="text-sm">Flavor: {flavor}</p>
      <p className="text-sm">Brand: {brand}</p>
    </div>
  )
}
