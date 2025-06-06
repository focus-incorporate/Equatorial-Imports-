import Head from 'next/head'

const products = [
  {
    name: 'Island Sunrise',
    intensity: 6,
    roast: 'Medium',
    flavor: 'Bright citrus & vanilla',
    brand: 'Seychelles Roast'
  },
  {
    name: 'Tropical Midnight',
    intensity: 9,
    roast: 'Dark',
    flavor: 'Cocoa & spice',
    brand: 'Seychelles Roast'
  },
  {
    name: 'Coral Espresso',
    intensity: 8,
    roast: 'Medium-Dark',
    flavor: 'Nutty caramel',
    brand: 'Island Bean'
  }
]

export default function Products() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Head>
        <title>Coffee Capsules | Equatorial-Imports</title>
        <meta name="description" content="Shop premium coffee capsules with detailed flavor notes." />
      </Head>
      <h1 className="text-3xl font-semibold mb-6 text-center">Coffee Capsule Selection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-white shadow p-6 rounded">
            <h2 className="text-xl font-bold mb-2">{p.name}</h2>
            <p className="text-sm">Intensity: {p.intensity}</p>
            <p className="text-sm">Roast: {p.roast}</p>
            <p className="text-sm">Flavor Notes: {p.flavor}</p>
            <p className="text-sm">Brand: {p.brand}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
