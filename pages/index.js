import Head from 'next/head';

const products = [
  { blend: 'Ristretto', intensity: 11, description: 'A perfect balance of flavor, body and intensity, ideal for a short Italian-style coffee.' },
  { blend: 'Intenso', intensity: 12, description: 'Dark roast with notes of bitter cocoa. For those who love bold flavors.' },
  { blend: 'Espresso', intensity: 8, description: 'Arabica and Robusta blend with sweet, chocolatey tones. A classic staple.' },
  { blend: 'Decaffeinato', intensity: 7, description: 'Decaf coffee capturing all the flavor of premium beans with great body and creaminess.' },
  { blend: 'Lungo', intensity: 9, description: 'Intense flavor and long-lasting crema. Perfect any time of day.' },
  { blend: 'Vaniglia', intensity: 8, description: 'Medium roast with delicate vanilla aroma for a sweet, balanced cup.' },
  { blend: 'Caramello', intensity: 8, description: 'Balanced body enriched with caramel sweetness and creaminess.' },
  { blend: 'Cioccolato', intensity: 8, description: 'Blend of the best beans with the intensity and body of dark chocolate.' }
];

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
          <a href="#products">Products</a>
          <a href="#sustainability">Sustainability</a>
        </nav>
      </header>
      <main>
        <section id="products">
          <h2>Coffee Capsule Collection</h2>
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
        </section>
        <section id="sustainability">
          <h2>Sustainability</h2>
          <p>Our partners follow eco-friendly practices, from recyclable capsules to responsible sourcing that supports farmers.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Equatorial Imports - Premium Coffee</p>
      </footer>
    </>
  );
}
