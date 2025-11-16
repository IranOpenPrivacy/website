export default function IsometricIllustration() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background - White */}
        <rect width="800" height="600" fill="white" />

        {/* Abstract Clouds */}
        <g opacity="0.1">
          <ellipse cx="650" cy="80" rx="40" ry="25" stroke="black" strokeWidth="2" fill="none" />
          <ellipse cx="680" cy="70" rx="30" ry="20" stroke="black" strokeWidth="2" fill="none" />
          <ellipse cx="100" cy="100" rx="35" ry="22" stroke="black" strokeWidth="2" fill="none" />
        </g>

        {/* Laptop Base */}
        <g transform="translate(300, 200)">
          {/* Laptop Screen */}
          <g transform="skewY(-30) scale(1, 0.866)">
            <rect x="0" y="0" width="200" height="140" fill="white" stroke="black" strokeWidth="3" />
            {/* Screen Content */}
            <rect x="10" y="10" width="180" height="120" fill="#F8F8F8" stroke="black" strokeWidth="1" />
            {/* Document Lines */}
            <line x1="20" y1="30" x2="170" y2="30" stroke="black" strokeWidth="1.5" />
            <line x1="20" y1="45" x2="150" y2="45" stroke="black" strokeWidth="1.5" />
            <line x1="20" y1="60" x2="160" y2="60" stroke="black" strokeWidth="1.5" />
            <line x1="20" y1="75" y2="75" x2="140" stroke="black" strokeWidth="1.5" />
            {/* Signature Line */}
            <line x1="20" y1="100" x2="170" y2="100" stroke="black" strokeWidth="1.5" />
            <path
              d="M 30 105 Q 50 95, 70 105 T 110 105 T 150 105"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            {/* Shield Icon on Document */}
            <g transform="translate(150, 20)">
              <path
                d="M 0 -15 L -12 0 L 0 15 L 12 0 Z"
                fill="white"
                stroke="#276EF6"
                strokeWidth="2"
              />
              <path
                d="M -6 -3 L -3 0 L 6 0 L 3 -3 Z"
                fill="#276EF6"
                stroke="none"
              />
            </g>
          </g>

          {/* Laptop Keyboard */}
          <g transform="translate(0, 140) skewY(-30) scale(1, 0.866)">
            <rect x="0" y="0" width="200" height="30" fill="white" stroke="black" strokeWidth="3" />
            {/* Keyboard Keys */}
            <rect x="10" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="30" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="50" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="70" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="90" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="110" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="130" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="150" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
            <rect x="170" y="5" width="15" height="8" fill="white" stroke="black" strokeWidth="1" />
          </g>
        </g>

        {/* Blue Pen */}
        <g transform="translate(450, 180)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Pen Body */}
            <rect x="0" y="0" width="8" height="80" fill="#276EF6" stroke="black" strokeWidth="2" />
            {/* White Stripes */}
            <rect x="1" y="10" width="6" height="3" fill="white" />
            <rect x="1" y="20" width="6" height="3" fill="white" />
            <rect x="1" y="30" width="6" height="3" fill="white" />
            {/* Pen Tip */}
            <polygon points="0,80 4,90 8,80" fill="#276EF6" stroke="black" strokeWidth="2" />
          </g>
        </g>

        {/* Human Figures */}
        {/* Figure 1 - Walking */}
        <g transform="translate(150, 450)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Head */}
            <circle cx="0" cy="-20" r="8" fill="white" stroke="black" strokeWidth="2" />
            {/* Body - Blue Top */}
            <rect x="-8" y="-12" width="16" height="20" fill="#276EF6" stroke="black" strokeWidth="2" />
            {/* Legs - White */}
            <rect x="-6" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
            <rect x="1" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
          </g>
        </g>

        {/* Figure 2 & 3 - Standing Together */}
        <g transform="translate(100, 480)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Head */}
            <circle cx="0" cy="-20" r="8" fill="white" stroke="black" strokeWidth="2" />
            {/* Body */}
            <rect x="-8" y="-12" width="16" height="20" fill="#276EF6" stroke="black" strokeWidth="2" />
            {/* Legs */}
            <rect x="-6" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
            <rect x="1" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
          </g>
        </g>

        <g transform="translate(130, 480)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Head */}
            <circle cx="0" cy="-20" r="8" fill="white" stroke="black" strokeWidth="2" />
            {/* Body */}
            <rect x="-8" y="-12" width="16" height="20" fill="#276EF6" stroke="black" strokeWidth="2" />
            {/* Legs */}
            <rect x="-6" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
            <rect x="1" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
          </g>
        </g>

        {/* Figure 4 - Observing */}
        <g transform="translate(600, 480)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Head */}
            <circle cx="0" cy="-20" r="8" fill="white" stroke="black" strokeWidth="2" />
            {/* Body */}
            <rect x="-8" y="-12" width="16" height="20" fill="#276EF6" stroke="black" strokeWidth="2" />
            {/* Legs */}
            <rect x="-6" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
            <rect x="1" y="8" width="5" height="15" fill="white" stroke="black" strokeWidth="2" />
          </g>
        </g>

        {/* Magnifying Glass */}
        <g transform="translate(80, 350)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Glass Circle */}
            <circle cx="0" cy="0" r="25" fill="white" stroke="black" strokeWidth="3" />
            <circle cx="0" cy="0" r="20" fill="none" stroke="black" strokeWidth="1" />
            {/* Handle */}
            <line x1="18" y1="18" x2="35" y2="35" stroke="black" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>

        {/* Data Blocks */}
        <g transform="translate(650, 300)">
          {/* Stack 1 */}
          <g transform="translate(0, 0) skewY(-30) scale(1, 0.866)">
            <rect x="0" y="0" width="40" height="40" fill="white" stroke="black" strokeWidth="2" />
            <path d="M 10 10 L 30 10 L 20 20 Z" fill="#276EF6" stroke="black" strokeWidth="1" />
          </g>
          <g transform="translate(0, -40) skewY(-30) scale(1, 0.866)">
            <rect x="0" y="0" width="40" height="40" fill="white" stroke="black" strokeWidth="2" />
            <line x1="10" y1="20" x2="30" y2="20" stroke="black" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="30" stroke="black" strokeWidth="2" />
          </g>

          {/* Stack 2 */}
          <g transform="translate(60, 20) skewY(-30) scale(1, 0.866)">
            <rect x="0" y="0" width="40" height="40" fill="white" stroke="black" strokeWidth="2" />
            <path d="M 10 10 L 20 20 L 10 30 L 10 10" fill="none" stroke="black" strokeWidth="2" />
            <path d="M 30 10 L 30 30 L 20 20" fill="none" stroke="black" strokeWidth="2" />
          </g>
        </g>

        {/* Potted Plants */}
        <g transform="translate(200, 500)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Pot */}
            <rect x="-10" y="0" width="20" height="15" fill="white" stroke="black" strokeWidth="2" />
            {/* Leaves */}
            <circle cx="-8" cy="-5" r="6" fill="#276EF6" stroke="black" strokeWidth="1" />
            <circle cx="0" cy="-8" r="6" fill="#276EF6" stroke="black" strokeWidth="1" />
            <circle cx="8" cy="-5" r="6" fill="#276EF6" stroke="black" strokeWidth="1" />
          </g>
        </g>

        <g transform="translate(550, 520)">
          <g transform="skewY(-30) scale(1, 0.866)">
            {/* Pot */}
            <rect x="-10" y="0" width="20" height="15" fill="white" stroke="black" strokeWidth="2" />
            {/* Leaves */}
            <circle cx="-8" cy="-5" r="6" fill="#276EF6" stroke="black" strokeWidth="1" />
            <circle cx="0" cy="-8" r="6" fill="#276EF6" stroke="black" strokeWidth="1" />
            <circle cx="8" cy="-5" r="6" fill="#276EF6" stroke="black" strokeWidth="1" />
          </g>
        </g>

        {/* Circular Elements */}
        <g transform="translate(50, 200)">
          <g transform="skewY(-30) scale(1, 0.866)">
            <circle cx="0" cy="0" r="20" fill="white" stroke="black" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="#276EF6" stroke="black" strokeWidth="1" />
          </g>
          <g transform="translate(0, -30) skewY(-30) scale(1, 0.866)">
            <circle cx="0" cy="0" r="20" fill="white" stroke="black" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="#276EF6" stroke="black" strokeWidth="1" />
          </g>
        </g>

        {/* Abstract Shapes */}
        <g opacity="0.3">
          <rect x="700" y="150" width="30" height="30" fill="none" stroke="black" strokeWidth="2" />
          <circle cx="720" cy="250" r="15" fill="none" stroke="black" strokeWidth="2" />
          <line x1="50" y1="300" x2="80" y2="300" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
        </g>
      </svg>
    </div>
  )
}

