import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Equatorial-Imports | Premium Coffee Capsules</title>
        <meta name="description" content="Discover sustainable premium coffee capsules from Equatorial-Imports." />
      </Head>
      <section className="bg-cover bg-center text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Equatorial-Imports</h1>
        <p className="text-xl">Savor the world in every capsule</p>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Product Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow p-6 rounded">
            <h3 className="text-xl font-bold mb-2">Island Sunrise</h3>
            <p className="text-sm">Intensity: 6</p>
            <p className="text-sm">Roast: Medium</p>
            <p className="text-sm">Flavor: Bright citrus &amp; vanilla</p>
            <p className="text-sm">Brand: Seychelles Roast</p>
          </div>
          <div className="bg-white shadow p-6 rounded">
            <h3 className="text-xl font-bold mb-2">Tropical Midnight</h3>
            <p className="text-sm">Intensity: 9</p>
            <p className="text-sm">Roast: Dark</p>
            <p className="text-sm">Flavor: Cocoa &amp; spice</p>
            <p className="text-sm">Brand: Seychelles Roast</p>
          </div>
          <div className="bg-white shadow p-6 rounded">
            <h3 className="text-xl font-bold mb-2">Coral Espresso</h3>
            <p className="text-sm">Intensity: 8</p>
            <p className="text-sm">Roast: Medium-Dark</p>
            <p className="text-sm">Flavor: Nutty caramel</p>
            <p className="text-sm">Brand: Island Bean</p>
          </div>
        </div>
      </section>

      <section className="bg-green-100 py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto">At Equatorial-Imports, we believe great flavor should never come at the planet's expense. We partner with sustainable farms and use eco-friendly materials to bring premium coffee to your doorstep.</p>
        <p className="mt-4"><Link href="/sustainability" className="text-green-700 underline">Learn more about our sustainability goals</Link></p>
      </section>
    </div>
  )
}
