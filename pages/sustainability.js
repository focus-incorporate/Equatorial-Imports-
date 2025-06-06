import Head from 'next/head'

export default function Sustainability() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>Sustainability | Equatorial-Imports</title>
        <meta name="description" content="Learn how Equatorial-Imports uses eco-friendly materials and recycling to reduce waste." />
      </Head>
      <h1 className="text-3xl font-semibold mb-6 text-center">Sustainability at Equatorial-Imports</h1>
      <p className="mb-4">Our coffee capsules are crafted from recyclable materials designed to minimize environmental impact. We encourage customers to participate in our recycling program to give used capsules a second life.</p>
      <p className="mb-4">By choosing eco-friendly coffee pods, you help reduce single-use plastics and support sustainable farming practices. Together, we aim to create a positive impact on our planet.</p>
      <p>Our goals include reducing packaging waste by 50% and investing in renewable energy sources for production. Join us on our journey toward a greener coffee experience.</p>
    </div>
  )
}
