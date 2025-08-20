'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface GalleryPrayerPageProps {
  isVisible: boolean;
}

export const GalleryPrayerPage: React.FC<GalleryPrayerPageProps> = ({ isVisible }) => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Photos
  const photos = [
    { src: '/foto1.jpg', alt: 'Couple with Heart Balloons' },
    { src: '/foto2.jpg', alt: 'Hand Holding' },
    { src: '/foto3.jpg', alt: 'Walking Together' },
    { src: '/foto4.jpg', alt: 'Celebration with Heart Balloons' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  if (!isVisible) return null;

  return (
    <div id="gallery-prayer-page" className="min-h-screen bg-gallery-prayer flex items-stretch justify-center p-4 md:p-8 animate-fadeIn relative">
      <div className="max-w-4xl w-full mx-auto text-center relative z-10 flex flex-col justify-between min-h-screen">
        
        {/* Arabic Calligraphy */}
        <AnimatedElement animationType="scale" delay={200}>
          <div className="flex justify-center mb-4 mt-4 md:mb-8 md:mt-10">
            <Image 
              src="/arab.png"
              alt="Arabic Calligraphy"
              width={320}
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
            <div className="flex justify-center mb-6 md:mb-16">
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
        <div className="mt-4 md:mt-2 mb-4 md:mb-8 relative z-10">
          {/* Gallery Title */}
          <AnimatedElement animationType="slide" delay={300}>
            <h2 
                className="text-3xl md:text-6xl text-[#A31D1D] mb-4 md:mb-12"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                fontWeight: 400
              }}
            >
              Our Gallery
            </h2>
          </AnimatedElement>

          {/* Image Slider */}
          <AnimatedElement animationType="scale" delay={400}>
            <div className="relative max-w-4xl mx-auto">
              {/* Slider Container */}
              <div
                className="relative w-full h-[55vh] md:h-[500px] rounded-[25px] overflow-hidden shadow-2xl bg-white cursor-grab active:cursor-grabbing"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Slides */}
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {photos.map((photo, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover" priority={index === 0} />
                    </div>
                  ))}
                </div>

                {/* Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[#A31D1D] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[#A31D1D] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentSlide + 1} / {photos.length}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-3 md:mt-6 space-x-3">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-[#A31D1D] scale-125' : 'bg-[#A31D1D]/30 hover:bg-[#A31D1D]/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnails (hidden on small screens) */}
              <div className="mt-4 px-2 md:px-0 hidden md:block">
                <div className="flex justify-center overflow-x-auto pb-2 gap-2 md:gap-3">
                  {photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                        index === currentSlide ? 'ring-2 md:ring-3 ring-[#A31D1D] scale-105 md:scale-95 shadow-lg' : 'opacity-60 hover:opacity-90 hover:scale-90'
                      }`}
                      aria-label={`Select slide ${index + 1}`}
                    >
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

      </div>
    </div>
  );
};
