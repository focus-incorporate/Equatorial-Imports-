import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Equatorial Imports Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <header className="hero">
        <h1>Awaken Your Senses, Redefine Your Coffee Moments</h1>
        <p className="tagline">Delivering world-class coffee capsules to your doorstep, sustainably.</p>
        <nav>
          <Link href="/products">Products</Link>
          <Link href="/sustainability">Sustainability</Link>
        </nav>
      </header>
      <main>
        <p className="intro">Explore our premium blends crafted for discerning coffee lovers. Discover more on the pages above.</p>
      </main>
      <footer>
        <p>&copy; 2025 Equatorial Imports - Premium Coffee</p>
      </footer>
    </>
  );
}
