'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-black relative">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Logo size="medium" />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="منو"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-white md:bg-transparent border-t md:border-t-0 border-black md:border-0 md:gap-8 p-4 md:p-0 z-10`}>
            <li>
              <Link href="/" className="block py-2 md:py-0 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                خانه
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 md:py-0 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                درباره
              </Link>
            </li>
            <li>
              <Link href="/framework" className="block py-2 md:py-0 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                چارچوب
              </Link>
            </li>
            <li>
              <Link href="/governance" className="block py-2 md:py-0 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                حکمرانی
              </Link>
            </li>
            <li>
              <Link href="/community" className="block py-2 md:py-0 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                جامعه
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 md:py-0 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                تماس
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

