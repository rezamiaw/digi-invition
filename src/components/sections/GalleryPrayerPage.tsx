'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface GalleryPrayerPageProps {
  isVisible: boolean;
}

export const GalleryPrayerPage: React.FC<GalleryPrayerPageProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div id="gallery-prayer-page" className="min-h-screen bg-gallery-prayer flex items-center justify-center p-8 animate-fadeIn relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Arabic Calligraphy */}
        <AnimatedElement animationType="scale" delay={200}>
          <div className="flex justify-center mb-8 mt-10">
            <Image 
              src="/arab.png"
              alt="Arabic Calligraphy"
              width={400}
              height={120}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </AnimatedElement>

        {/* Quranic Verse */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedElement animationType="slide" delay={400}>
            <p 
              className="text-lg md:text-xl text-[#8B4A47] leading-relaxed mb-4 italic"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                fontWeight: 400,
                lineHeight: '1.8'
              }}
            >
              &ldquo;Hai manusia, sungguh kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kami disisi Allah ialah orang yang paling bertakwa.&rdquo;
            </p>
          </AnimatedElement>
          
          <AnimatedElement animationType="slide" delay={600}>
            <p 
              className="text-base md:text-lg text-[#8B4A47] font-semibold mb-8"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif'
              }}
            >
              (Q.S Al-Hujurat:13)
            </p>
          </AnimatedElement>

          {/* Fade Out Line */}
          <AnimatedElement animationType="scale" delay={800}>
            <div className="flex justify-center mb-16">
              <div 
                className="w-64 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #8B4A47 50%, transparent 100%)'
                }}
              ></div>
            </div>
          </AnimatedElement>
        </div>

        {/* Our Gallery Section */}
        <div className="mt-16 relative z-10">
          {/* Gallery Title */}
          <AnimatedElement animationType="slide" delay={300}>
            <h2 
                className="text-5xl md:text-6xl text-[#A31D1D] mb-12"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                fontWeight: 400
              }}
            >
              Our Gallery
            </h2>
          </AnimatedElement>

          {/* Gallery Grid - Asymmetric Layout */}
          <div className="relative max-w-5xl mx-auto h-[600px]">
            {/* Photo 1 - Top Left Large (Couple with heart balloons) */}
            <AnimatedElement animationType="scale" delay={400}>
              <div className="absolute top-0 left-[-30px] w-73 h-55 rounded-[40px] overflow-hidden shadow-lg">
                <Image 
                  src="/foto1.jpg"
                  alt="Couple with Heart Balloons"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>

            {/* Photo 2 - Top Right Medium (Hand holding) */}
            <AnimatedElement animationType="scale" delay={600}>
              <div className="absolute top-0 right-[-30px] w-60 h-72 rounded-[40px] overflow-hidden shadow-lg">
                <Image 
                  src="/foto2.jpg"
                  alt="Hand Holding"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>

            {/* Photo 3 - Bottom Right Small (Celebration) */}
            <AnimatedElement animationType="scale" delay={800}>
              <div className="absolute top-72 right-[-30px] w-60 h-38 rounded-[40px] overflow-hidden shadow-lg">
                <Image 
                  src="/foto4.jpg"
                  alt="Celebration with Heart Balloons"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>

            {/* Photo 4 - Bottom Left Large (Walking together) */}
            <AnimatedElement animationType="scale" delay={1000}>
              <div className="absolute top-55 left-[-50px] w-78 h-55 rounded-[40px] overflow-hidden shadow-lg">
                <Image 
                  src="/foto3.jpg"
                  alt="Walking Together"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>

      </div>
    </div>
  );
};
