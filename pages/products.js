import Head from 'next/head';
import Link from 'next/link';
import products from '../data/products';

export default function Products() {
  return (
    <>
      <Head>
        <title>Coffee Capsules - Equatorial Imports</title>
      </Head>
      <header className="hero">
        <h1>Coffee Capsule Collection</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sustainability">Sustainability</Link>
        </nav>
      </header>
      <main>
        <p className="compat">Compatible with Nespresso® and Dolce Gusto machines. Capsules made with 80% recycled materials.</p>
        <table>
          <thead>
            <tr>
              <th>Blend</th>
              <th>Intensity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.blend}>
                <td>{p.blend}</td>
                <td>{p.intensity}</td>
                <td>{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <p>&copy; 2025 Equatorial Imports - Premium Coffee</p>
      </footer>
    </>
  );
}
