'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { EnvelopeIcon } from '../ui/EnvelopeIcon';

interface LandingPageProps {
  onOpenInvitation: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenInvitation }) => {
  return (
    <div className="bg-image min-h-screen overflow-hidden relative">
      {/* Decorative Images - Animated Penjor */}
      <div className="relative right-45 z-10 transform rotate-11 animate-sway">
        <Image 
          src="/image1.png"
          alt="Dekorasi Penjor"
          width={498}
          height={498}
          className="drop-shadow-lg"
        />
      </div>
      <div className="relative left-45 z-10 transform rotate-[-11deg] scale-x-[-1] animate-sway">
        <Image 
          src="/image1.png"
          alt="Dekorasi Penjor"
          width={498}
          height={498}
          className="drop-shadow-lg"
        />
      </div>
      
      {/* T&D Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 
          className="text-8xl md:text-9xl font-bold text-[#8B5A52] drop-shadow-lg tracking-tight -mt-40 flex items-center" 
          style={{ fontFamily: 'Kunstler, serif' }}
        >
          <span className="relative -top-4">T</span>
          <span className="mx-1">&</span>
          <span className="relative top-4">D</span>
        </h1>
      </div>

      {/* Button Buka Undangan */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Button 
          onClick={onOpenInvitation}
          className="absolute bottom-30 flex items-center gap-3"
        >
          <EnvelopeIcon />
          <span className="text-lg tracking-wide">
            Buka Undangan
          </span>
        </Button>
      </div>
    </div>
  );
};
