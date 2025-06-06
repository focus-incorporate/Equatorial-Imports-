import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

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
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}
