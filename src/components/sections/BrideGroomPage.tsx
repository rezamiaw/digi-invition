'use client';

import React from 'react';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface BrideGroomPageProps {
  isVisible: boolean;
}

export const BrideGroomPage: React.FC<BrideGroomPageProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div id="bride-groom-page" className="min-h-screen bg-[#8B4A47] flex items-center justify-center p-8 animate-fadeIn relative rounded-t-[35px] -mt-8">
      <div className="max-w-2xl mx-auto text-center text-white">
        
        {/* Decorative Line */}
        <AnimatedElement animationType="scale" delay={200}>
          <div className="flex justify-center mb-6">
            <div 
              className="w-32 h-1 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #D9D9D9 0%, #D9D9D9 50%, #D9D9D9 100%)'
              }}
            ></div>
          </div>
        </AnimatedElement>

        {/* Title */}
        <AnimatedElement animationType="slide" delay={300}>
          <h1 
            className="text-4xl md:text-5xl mb-6"
            style={{ 
              fontFamily: 'Kunstler, serif',
              fontWeight: 400,
              color: '#F5E6D3'
            }}
          >
            Bride & Groom
          </h1>
        </AnimatedElement>

        {/* Bride Section */}
        <div className="mb-8">
          {/* Bride Photo */}
          <AnimatedElement animationType="scale" delay={400}>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#F5E6D3]">
                <div className="w-full h-full bg-[#F5E6D3] flex items-center justify-center">
                  {/* Placeholder untuk foto bride */}
                  <span className="text-[#8B4A47] text-sm">Bride Photo</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Bride Info */}
          <AnimatedElement animationType="slide" delay={500}>
            <div className="text-center">
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Tania Subyanto, S.Ikom
              </h2>
              <p 
                className="text-lg mb-2 italic"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Putri Tercinta
              </p>
              <p 
                className="text-base"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Bapak Subyanto<br />
                Ibu Rani
              </p>
            </div>
          </AnimatedElement>
        </div>

        {/* Groom Section */}
        <div className="mb-8">
          {/* Groom Photo */}
          <AnimatedElement animationType="scale" delay={600}>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#F5E6D3]">
                <div className="w-full h-full bg-[#F5E6D3] flex items-center justify-center">
                  {/* Placeholder untuk foto groom */}
                  <span className="text-[#8B4A47] text-sm">Groom Photo</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Groom Info */}
          <AnimatedElement animationType="slide" delay={700}>
            <div className="text-center">
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Doni Supratman, S.Ikom
              </h2>
              <p 
                className="text-lg mb-2 italic"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Putra Tercinta
              </p>
              <p 
                className="text-base"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Bapak Supratman<br />
                Ibu Dewi
              </p>
            </div>
          </AnimatedElement>
        </div>

        {/* Decorative Fade Line */}
        <AnimatedElement animationType="scale" delay={300}>
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-px">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5E6D3] to-transparent"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #F5E6D3 50%, transparent 100%)'
                }}
              ></div>
            </div>
          </div>
        </AnimatedElement>

        {/* Wedding Details */}
        <AnimatedElement animationType="slide" delay={400}>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2">
              <span 
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Tanggal
              </span>
              <span 
                className="text-lg"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                12 Desember 2025
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span 
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Pukul
              </span>
              <span 
                className="text-lg"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                13:00 - 17:00
              </span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span 
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Tempat
              </span>
              <span 
                className="text-lg"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                📍Hotel ABC
              </span>
            </div>
          </div>
        </AnimatedElement>

        {/* Location Button */}
        <AnimatedElement animationType="bounce" delay={500}>
          <button className="bg-transparent border-2 border-[#F5E6D3] text-[#F5E6D3] px-8 py-3 rounded-full font-semibold hover:bg-[#F5E6D3] hover:text-[#8B4A47] transition-all duration-300 mb-6">
            LIHAT LOKASI
          </button>
        </AnimatedElement>

        {/* Countdown */}
        <div className="flex justify-center space-x-4">
          <AnimatedElement animationType="bounce" delay={600}>
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-[#F5E6D3] rounded-lg flex items-center justify-center mb-2">
                <span className="text-xl font-bold">7</span>
              </div>
              <span className="text-sm">HARI</span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animationType="bounce" delay={700}>
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-[#F5E6D3] rounded-lg flex items-center justify-center mb-2">
                <span className="text-xl font-bold">20</span>
              </div>
              <span className="text-sm">JAM</span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animationType="bounce" delay={800}>
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-[#F5E6D3] rounded-lg flex items-center justify-center mb-2">
                <span className="text-xl font-bold">07</span>
              </div>
              <span className="text-sm">MENIT</span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animationType="bounce" delay={900}>
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-[#F5E6D3] rounded-lg flex items-center justify-center mb-2">
                <span className="text-xl font-bold">58</span>
              </div>
              <span className="text-sm">DETIK</span>
            </div>
          </AnimatedElement>
        </div>

      </div>
    </div>
  );
};
