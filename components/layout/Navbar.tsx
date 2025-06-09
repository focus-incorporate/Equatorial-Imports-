import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-cream-light shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo - visible on all screens */}
          <Link href="/" className="flex items-center">
            <div className="relative w-64 h-16">
              <Image
                src="/images/equatorial-imports-logo.png"
                alt="Equatorial Imports Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-coffee-dark hover:text-coffee transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-coffee-dark hover:text-coffee transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-coffee-dark hover:text-coffee transition-colors">
              Contact
            </Link>
            <button className="btn-primary">
              Order Now
            </button>
          </div>

          {/* Mobile menu button - visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee-dark p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/products"
                className="block px-3 py-2 text-coffee-dark hover:bg-cream rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-coffee-dark hover:bg-cream rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-coffee-dark hover:bg-cream rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="w-full text-left px-3 py-2 btn-primary">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 