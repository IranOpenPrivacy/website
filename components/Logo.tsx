import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function Logo({ className = '', showText = true, size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10'
  }

  const textSizes = {
    small: 'text-base',
    medium: 'text-xl',
    large: 'text-2xl'
  }

  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Square Bracket Icon with Blue Dot */}
      <svg 
        className={sizeClasses[size]}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left bracket */}
        <path 
          d="M8 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Right bracket */}
        <path 
          d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H16" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Blue dot */}
        <circle 
          cx="12" 
          cy="12" 
          r="3" 
          fill="#276EF6"
        />
      </svg>
      
      {showText && (
        <span className={`font-bold ${textSizes[size]} text-black`}>IOP.</span>
      )}
    </div>
  )

  if (showText) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

