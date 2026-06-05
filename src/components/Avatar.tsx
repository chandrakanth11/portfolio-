import React, { useState } from 'react';
import { User, ShieldCheck } from 'lucide-react';
// @ts-ignore
import profileImg from '../assets/images/image.jpeg';

interface AvatarProps {
  accentHex: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Avatar({ accentHex, size = 'lg' }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Responsive sizes supporting high density
  const dims = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32 md:h-36 md:w-36 lg:h-40 lg:w-40',
    xl: 'h-48 w-48 md:h-52 md:w-52'
  }[size];

  return (
    <div id="authoritative-avatar-root" className="relative shrink-0 flex items-center justify-center">
      
      {/* Decorative Outer Concentric Ring */}
      <div 
        className="absolute inset-0 rounded-full border border-dashed border-slate-300 opacity-80 animate-[spin_40s_linear_infinite]"
        style={{ margin: '-10px' }}
      ></div>

      {/* Main Image Mask Container */}
      <div 
        className={`relative ${dims} rounded-full bg-slate-100 border-2 overflow-hidden flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-[1.03]`}
        style={{ borderColor: '#ffffff', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.05)' }}
      >
        
        {!imageError ? (
          <img
            src={profileImg}
            alt="Chandrakantha Acharya"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400">
            <User className="h-10 w-10 text-slate-400 mb-1" />
            <span className="font-mono text-[9px] tracking-wide uppercase font-bold text-slate-500">CA</span>
          </div>
        )}

        {/* Small subtle brand signature watermark overlay inside bottom edge */}
        <div className="absolute inset-x-0 bottom-0 bg-slate-900/40 backdrop-blur-[2px] py-0.5 text-center z-10">
          <span className="text-[7px] font-mono font-bold text-white tracking-widest uppercase">Verified Node</span>
        </div>

      </div>

      {/* Small floating Verified Security badge at bottom-right of the circle */}
      <div 
        className="absolute bottom-1 right-1 bg-teal-600 border-2 border-white text-white p-1.5 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        style={{ transform: 'translate(4px, 4px)' }}
        title="Google Cloud Certified & Verified Security Researcher"
      >
        <ShieldCheck className="h-4.5 w-4.5" />
      </div>

    </div>
  );
}
