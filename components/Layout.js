import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-white shadow">
        <nav className="container mx-auto flex gap-4 p-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/quiz">Quiz</Link>
        </nav>
      </header>
      <main className="p-4">
        {children}
      </main>
    </>
  )
}
