import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, we couldn't find that page.</p>
      <Link href="/" className="text-blue-600 underline">Return Home</Link>
    </div>
  )
}
