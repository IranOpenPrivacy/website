import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function Logo({ className = '', showText = true, size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }

  const textSizes = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  }

  const logoContent = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Shield with Padlock Icon */}
      <svg 
        className={sizeClasses[size]}
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield outline */}
        <path 
          d="M32 8L12 16V32C12 45.2548 20.7452 56.7452 32 60C43.2548 56.7452 52 45.2548 52 32V16L32 8Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Padlock body */}
        <rect 
          x="24" 
          y="28" 
          width="16" 
          height="16" 
          rx="2" 
          fill="currentColor"
        />
        {/* Padlock shackle */}
        <path 
          d="M28 28V22C28 18.6863 30.6863 16 34 16C37.3137 16 40 18.6863 40 22V28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Keyhole */}
        <circle 
          cx="32" 
          cy="36" 
          r="2" 
          fill="white"
        />
        <rect 
          x="31" 
          y="38" 
          width="2" 
          height="4" 
          fill="white"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizes[size]}`}>IOP</span>
          <span className="text-xs leading-tight">
            Iran Open<br />Privacy
          </span>
        </div>
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

