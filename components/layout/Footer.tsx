import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Equatorial Imports</h3>
            <p className="text-cream-light mb-4">
              Bringing premium coffee experiences to your cup, one blend at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-cream-light transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Coffee</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/daniels-blend" className="hover:text-cream-light transition-colors">
                  Daniel's Blend
                </Link>
              </li>
              <li>
                <Link href="/products/vaggio-espresso" className="hover:text-cream-light transition-colors">
                  Vaggio Espresso
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-cream-light mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-coffee-dark flex-grow"
              />
              <button
                type="submit"
                className="bg-accent-gold hover:bg-accent-copper text-coffee-dark px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream-light/20 mt-8 pt-8 text-center md:flex md:justify-between">
          <p>&copy; {new Date().getFullYear()} Equatorial Imports. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-cream-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 