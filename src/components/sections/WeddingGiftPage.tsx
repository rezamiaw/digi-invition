'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface WeddingGiftPageProps {
  isVisible: boolean;
}

export const WeddingGiftPage: React.FC<WeddingGiftPageProps> = ({ isVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!isVisible) return null;

  return (
    <div id="wedding-gift-page" className="min-h-screen bg-[#FEF9E1] flex items-center justify-center p-8 animate-fadeIn relative">
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-8">
        
        {/* Wedding Gift Title */}
        <AnimatedElement animationType="slide" delay={200}>
          <h1
            className="text-4xl md:text-5xl text-[#A31D1D] mb-12"
            style={{
              fontFamily: 'var(--font-kumbh-sans), sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            Wedding Gift
          </h1>
        </AnimatedElement>

        {/* Description Text */}
        <AnimatedElement animationType="slide" delay={400}>
          <p
            className="text-[#8B4A47] text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto"
            style={{
              fontFamily: 'var(--font-kumbh-sans), sans-serif',
              fontWeight: 400,
              lineHeight: '1.8',
              textAlign: 'center'
            }}
          >
            Doa, restu dan kehadiran Bapak/Ibu/Saudara/i saat berarti bagi kebahagiaan kami. Namun jika ingin memberikan hadiah untuk kami, kami sediakan fitur di bawah ini :
          </p>
        </AnimatedElement>

        {/* Decorative Line */}
        <AnimatedElement animationType="scale" delay={600}>
          <div className="flex justify-center mb-12">
            <div 
              className="w-48 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #A31D1D 50%, transparent 100%)'
              }}
            ></div>
          </div>
        </AnimatedElement>

        {/* Gift Icon/Image Container - Clickable */}
        <AnimatedElement animationType="scale" delay={800}>
          <div className="flex justify-center mb-12">
            <button
              onClick={openModal}
              className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#A31D1D]/20 hover:border-[#A31D1D]/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              {/* Gift Box SVG */}
              <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/giftbox.svg"
                  alt="Gift Box"
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </button>
          </div>
        </AnimatedElement>

        {/* Click Instruction */}
        <AnimatedElement animationType="bounce" delay={1000}>
          <div className="mt-8">
            <p
              className="text-[#A31D1D] text-lg font-semibold text-center"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif'
              }}
            >
              Klik gift box di atas untuk melihat detail transfer 💝
            </p>
          </div>
        </AnimatedElement>

      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-[25px] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white rounded-t-[25px] border-b border-[#D4C4B0]/30 px-6 py-4 flex justify-between items-center">
              <h2
                className="text-2xl font-semibold text-[#A31D1D]"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Wedding Gift 💝
              </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-[#A31D1D]/10 hover:bg-[#A31D1D]/20 flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-[#A31D1D] text-xl">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bank Transfer Section */}
              <div>
                <h3
                  className="text-xl font-semibold text-[#A31D1D] mb-4"
                  style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                >
                  Transfer Bank
                </h3>
                
                <div className="space-y-4">
                  {/* Bank Account 1 */}
                  <div className="bg-[#F5E6D3]/50 rounded-[15px] p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p
                          className="text-sm text-[#8B4A47]/70 mb-1"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          Bank BCA
                        </p>
                        <p
                          className="text-lg font-semibold text-[#A31D1D]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          1234567890
                        </p>
                        <p
                          className="text-sm text-[#8B4A47]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          a.n. Tania Subyanto
                        </p>
                      </div>
                      <button
                        className="bg-[#A31D1D] hover:bg-[#8B1A1A] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        onClick={() => navigator.clipboard.writeText('1234567890')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Bank Account 2 */}
                  <div className="bg-[#F5E6D3]/50 rounded-[15px] p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p
                          className="text-sm text-[#8B4A47]/70 mb-1"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          Bank Mandiri
                        </p>
                        <p
                          className="text-lg font-semibold text-[#A31D1D]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          0987654321
                        </p>
                        <p
                          className="text-sm text-[#8B4A47]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          a.n. Doni Supratman
                        </p>
                      </div>
                      <button
                        className="bg-[#A31D1D] hover:bg-[#8B1A1A] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        onClick={() => navigator.clipboard.writeText('0987654321')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* E-Wallet Section */}
              <div>
                <h3
                  className="text-xl font-semibold text-[#A31D1D] mb-4"
                  style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                >
                  E-Wallet
                </h3>
                
                <div className="space-y-4">
                  {/* GoPay */}
                  <div className="bg-[#F5E6D3]/50 rounded-[15px] p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p
                          className="text-sm text-[#8B4A47]/70 mb-1"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          GoPay
                        </p>
                        <p
                          className="text-lg font-semibold text-[#A31D1D]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          081234567890
                        </p>
                        <p
                          className="text-sm text-[#8B4A47]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          a.n. Tania Subyanto
                        </p>
                      </div>
                      <button
                        className="bg-[#A31D1D] hover:bg-[#8B1A1A] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        onClick={() => navigator.clipboard.writeText('081234567890')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* OVO */}
                  <div className="bg-[#F5E6D3]/50 rounded-[15px] p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p
                          className="text-sm text-[#8B4A47]/70 mb-1"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          OVO
                        </p>
                        <p
                          className="text-lg font-semibold text-[#A31D1D]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          081098765432
                        </p>
                        <p
                          className="text-sm text-[#8B4A47]"
                          style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        >
                          a.n. Doni Supratman
                        </p>
                      </div>
                      <button
                        className="bg-[#A31D1D] hover:bg-[#8B1A1A] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                        onClick={() => navigator.clipboard.writeText('081098765432')}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              <div className="text-center pt-4 border-t border-[#D4C4B0]/30">
                <p
                  className="text-[#A31D1D] text-base font-medium italic"
                  style={{ 
                    fontFamily: 'var(--font-kumbh-sans), sans-serif'
                  }}
                >
                  Terima kasih atas perhatian dan kebaikan Anda 💝
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
