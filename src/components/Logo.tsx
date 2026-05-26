import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'giant';
  showText?: boolean;
  lightText?: boolean;
}

export default function Logo({ size = 'md', showText = true, lightText = false }: LogoProps) {
  // Determine dimensions based on size
  const sizes = {
    sm: { box: 'w-10 h-10', text: 'text-sm font-semibold tracking-wide', subtitle: 'text-[9px]' },
    md: { box: 'w-14 h-14', text: 'text-base font-bold tracking-wider', subtitle: 'text-[10px]' },
    lg: { box: 'w-24 h-24', text: 'text-xl font-extrabold tracking-widest', subtitle: 'text-xs' },
    giant: { box: 'w-72 h-72', text: 'text-3xl font-black tracking-widest', subtitle: 'text-sm' }
  };

  const currentSize = sizes[size];

  // SVG representation of the stylized metallic "T-R" monogram with gears
  const LogoMark = () => (
    <div className={`relative ${currentSize.box} flex items-center justify-center rounded-xl overflow-hidden transition-all duration-500 shadow-lg group`}>
      {/* Background layer: Marble blue texture look using stacked radial CSS gradients */}
      <div className="absolute inset-0 bg-radial from-[#1e40af] via-[#1e3a8a] to-[#0f172a] opacity-100 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-blue-950 opacity-40 z-0" />
      
      {/* Crack/vein effects using fine grid patterns */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%)] bg-[size:10px_10px]" />
      
      {/* Glossy overlay sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 pointer-events-none z-10" />

      {/* SVG Monogram TR with Metallic Red and Golden Gear Trim */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[85%] h-[85%] relative z-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] transform transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Metallic Red Chrome Gradient */}
          <linearGradient id="metallicRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="30%" stopColor="#b91c1c" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="75%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* Luxury Gold Gradient for Border/Gear */}
          <linearGradient id="luxuryGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Gold Ring (Only fully visible in larger sizes) */}
        {size === 'giant' && (
          <circle cx="50" cy="50" r="46" stroke="url(#luxuryGold)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
        )}

        {/* Gear Wheels integrated (upper right back) */}
        <g stroke="url(#luxuryGold)" strokeWidth="1.5" strokeLinejoin="round" fill="none">
          {/* Main Gear Teeth */}
          <path d="M 68,36 C 68,30 73,28 73,28 C 74,32 77,32 78,35 C 81,32 83,34 85,37 C 82,39 84,42 85,45 C 81,46 80,49 80,52 C 77,54 74,53 74,47 C 72,49 68,46 68,36 Z" />
          {/* Inner circle of gear */}
          <circle cx="76" cy="41" r="5" fill="#1e3a8a" stroke="url(#luxuryGold)" strokeWidth="1" />
        </g>

        {/* THE "T" Monogram Base (Polished Red with gold outline) */}
        <path
          d="M 23,38 H 63 V 46 H 47 V 73 H 39 V 46 H 23 V 38 Z"
          fill="url(#metallicRed)"
          stroke="url(#luxuryGold)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* THE "R" Monogram Curve (Fusing from T's stem to gear) */}
        <path
          d="M 45,41 C 58,41 68,44 68,52 C 68,58 53,60 47,60 H 45 V 41 Z"
          fill="url(#metallicRed)"
          stroke="url(#luxuryGold)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* The R Monogram Diagonal leg (Sweeping down-right) */}
        <path
          d="M 52,59 L 68,73 H 58 L 47,60 H 52 Z"
          fill="url(#metallicRed)"
          stroke="url(#luxuryGold)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Internal highlighting for metallic sheen reflection */}
        <path
          d="M 25,40 H 61"
          stroke="white"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M 41,48 V 71"
          stroke="white"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );

  if (size === 'giant') {
    return (
      <div className="flex flex-col items-center text-center">
        <LogoMark />
        
        {/* Large Branding Text resembling the luxury gold metallic engraving */}
        <div className="mt-8">
          <h1 className="text-3xl font-extrabold tracking-[0.2em] font-display uppercase bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 bg-clip-text text-transparent drop-shadow">
            Transformasi Kompetensi
          </h1>
          <p className="mt-2 text-sm font-medium tracking-[0.4em] text-amber-500 uppercase">
            Value-Driven Excellence
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <LogoMark />
      {showText && (
        <div className="flex flex-col">
          <span className={`leading-none font-display uppercase tracking-wider font-extrabold ${lightText ? 'text-white' : 'text-slate-800'}`}>
            TRANSFORMASI
          </span>
          <span className={`leading-none font-display uppercase tracking-wider font-bold ${lightText ? 'text-amber-400' : 'text-blue-900'} ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            KOMPETENSI
          </span>
          <span className={`leading-none tracking-[0.25em] uppercase font-sans font-semibold mt-1 text-[7px] ${lightText ? 'text-slate-300' : 'text-slate-500'}`}>
            Value-Driven Excellence
          </span>
        </div>
      )}
    </div>
  );
}
