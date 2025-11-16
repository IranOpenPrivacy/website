'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'خانه' },
    { href: '/about', label: 'درباره' },
    { href: '/framework', label: 'چارچوب' },
    { href: '/governance', label: 'حکمرانی' },
    { href: '/community', label: 'جامعه' },
    { href: '/contact', label: 'تماس' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="border-b border-gray-200 relative bg-white">
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
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-white md:bg-transparent border-t md:border-t-0 border-gray-200 md:border-0 md:gap-8 p-4 md:p-0 z-10`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`block py-2 md:py-0 transition-colors relative ${
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-black hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent md:block hidden"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

