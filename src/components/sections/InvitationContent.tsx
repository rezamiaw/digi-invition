'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface InvitationContentProps {
  isVisible: boolean;
}

export const InvitationContent: React.FC<InvitationContentProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div id="invitation-content" className="min-h-screen bg-invitation-content flex items-center justify-center p-8 animate-fadeIn relative">
      {/* Overlay untuk readability */}
      <div className="absolute inset-0 bg-white/10 z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Flowers Image */}
        <AnimatedElement animationType="scale" delay={200}>
          <div className="flex justify-center mb-8 -mt-20">
            <Image 
              src="/flowers.png"
              alt="Beautiful Flowers"
              width={600}
              height={300}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </AnimatedElement>
        
        {/* The Wedding Of Text */}
        <AnimatedElement animationType="slide" delay={400}>
          <h1 
            className="text-[32px] font-semibold text-[#A31D1D] mb-8 text-center -mt-24"
            style={{ 
              fontFamily: 'var(--font-kumbh-sans), sans-serif',
              fontWeight: 600,
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            The Wedding Of
          </h1>
        </AnimatedElement>

        {/* Bride & Groom Names */}
        <div className="mb-8 text-center">
          <AnimatedElement animationType="bounce" delay={500}>
            <div 
              className="text-[64px] text-[#A31D1D]"
              style={{ 
                fontFamily: 'Kunstler, serif',
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Tania
            </div>
          </AnimatedElement>
          <AnimatedElement animationType="scale" delay={600}>
            <div 
              className="text-[64px] text-[#A31D1D] -mt-4"
              style={{ 
                fontFamily: 'Kunstler, serif',
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              &
            </div>
          </AnimatedElement>
          <AnimatedElement animationType="bounce" delay={700}>
            <div 
              className="text-[64px] text-[#A31D1D] mt-5"
              style={{ 
                fontFamily: 'Kunstler, serif',
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Doni
            </div>
          </AnimatedElement>
        </div>

        {/* Save the Date */}
        <AnimatedElement animationType="scale" delay={300}>
          <div 
            className="bg-[#F5E6D3] inline-flex flex-col justify-center items-center border border-[#D4C4B0]"
            style={{
              width: '133px',
              height: '52px',
              borderRadius: '14px',
              opacity: 1
            }}
          >
            <div 
              className="text-[#A31D1D] text-[12px] leading-none"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                fontWeight: 400
              }}
            >
              save date :
            </div>
            <div 
              className="text-[#A31D1D] text-[16px] font-bold leading-none mt-1"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif'
              }}
            >
              12.12.2025
            </div>
          </div>
        </AnimatedElement>

        {/* Invitation Text */}
        <AnimatedElement animationType="slide" delay={400}>
          <div className="mt-8 text-center max-w-md mx-auto">
            <p 
              className="text-[#A31D1D] text-[16px] leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                fontWeight: 400
              }}
            >
              Dengan segala hormat <br />
              kami mengundang Bapak/Ibu/Saudari/i :
            </p>
          </div>
        </AnimatedElement>

        {/* Untuk Tamu - Centered */}
        <AnimatedElement animationType="bounce" delay={500}>
          <div className="mt-4 flex justify-center">
            <div 
              className="bg-[#F5E6D3] inline-flex flex-col justify-center items-center border border-[#D4C4B0]"
              style={{
                width: '133px',
                height: '40px',
                borderRadius: '24px',
                opacity: 1
              }}
            >
              <div 
                className="text-[#A31D1D] text-[20px] font-bold leading-none"
                style={{ 
                  fontFamily: 'var(--font-kumbh-sans), sans-serif'
                }}
              >
                Ibu Yati
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Guest Count Info - Centered */}
        <AnimatedElement animationType="float" delay={600}>
          <div className="mt-8 text-center max-w-md mx-auto">
            <p 
              className="text-[#A31D1D] text-[16px] leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                fontWeight: 400
              }}
            >
                          - Hanya Untuk 2 Orang Tamu -
            </p>
          </div>
        </AnimatedElement>


         
      </div>
    </div>
  );
};
