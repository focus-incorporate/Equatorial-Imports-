import Head from 'next/head';
import Link from 'next/link';

export default function Sustainability() {
  return (
    <>
      <Head>
        <title>Sustainability - Equatorial Imports</title>
      </Head>
      <header className="hero">
        <h1>Our Commitment to Sustainability</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav>
      </header>
      <main>
        <p>We partner with roasters that prioritize eco-friendly practices:</p>
        <ul>
          <li>Viaggio's recyclable aluminum capsules crafted from recycled material.</li>
          <li>Daniel's Blend focuses on traceability from farm to capsule.</li>
        </ul>
      </main>
      <footer>
        <p>&copy; 2025 Equatorial Imports - Premium Coffee</p>
      </footer>
    </>
  );
}
