'use client';

import React, { useState } from 'react';
import { showToast } from '@/components';
import { AnimatedElement } from '@/components/ui/AnimatedElement';

interface RSVPPageProps {
  isVisible: boolean;
}

export const RSVPPage: React.FC<RSVPPageProps> = ({ isVisible }) => {
  const [nama, setNama] = useState('');
  const [jumlahTamu, setJumlahTamu] = useState('');
  const [konfirmasi, setKonfirmasi] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ nama, jumlahTamu, konfirmasi });
    showToast('RSVP berhasil dikirim. Terima kasih!', 'success');
  };

  if (!isVisible) return null;

  return (
    <div id="rsvp-page" className="min-h-screen bg-gallery-prayer flex items-center justify-center p-8 animate-fadeIn relative">
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-8">
        
        {/* RSVP Title */}
        <AnimatedElement animationType="slide" delay={200}>
          <h1
            className="text-5xl md:text-6xl text-[#A31D1D] mb-8"
            style={{
             fontFamily: 'var(--font-kumbh-sans), sans-serif',
              fontWeight: 400
            }}
          >
            RSVP
          </h1>
        </AnimatedElement>

        {/* Description Text */}
        <AnimatedElement animationType="slide" delay={400}>
          <p
            className="text-[#8B4A47] text-base md:text-lg leading-relaxed mb-12 max-w-4xl mx-auto"
            style={{
              fontFamily: 'var(--font-kumbh-sans), sans-serif',
              fontWeight: 400,
              lineHeight: '1.8'
            }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir pada acara bahagia kami untuk tentunya memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terima kasih yang seterdalam.
          </p>
        </AnimatedElement>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
          
          {/* Nama Input */}
          <AnimatedElement animationType="slide" delay={600}>
            <div className="text-left">
              <label
                className="block text-[#8B4A47] text-lg font-semibold mb-3"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Nama
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-6 border-2 border-[#D4C4B0] rounded-[25px] bg-[#F5E6D3] text-[#8B4A47] placeholder-[#A0856B] focus:outline-none focus:border-[#A31D1D] transition-colors text-lg"
                style={{ 
                  fontFamily: 'var(--font-kumbh-sans), sans-serif',
                  height: '50px'
                }}
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
          </AnimatedElement>

          {/* Jumlah Tamu Input */}
          <AnimatedElement animationType="slide" delay={800}>
            <div className="text-left">
              <label
                className="block text-[#8B4A47] text-lg font-semibold mb-3"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Jumlah Tamu (orang)
              </label>
              <input
                type="number"
                value={jumlahTamu}
                onChange={(e) => setJumlahTamu(e.target.value)}
                className="w-full px-6 border-2 border-[#D4C4B0] rounded-[25px] bg-[#F5E6D3] text-[#8B4A47] placeholder-[#A0856B] focus:outline-none focus:border-[#A31D1D] transition-colors text-lg"
                style={{ 
                  fontFamily: 'var(--font-kumbh-sans), sans-serif',
                  height: '50px'
                }}
                placeholder="Jumlah tamu"
                min="1"
                required
              />
            </div>
          </AnimatedElement>

          {/* Konfirmasi Kehadiran */}
          <AnimatedElement animationType="slide" delay={1000}>
            <div className="text-left">
              <label
                className="block text-[#8B4A47] text-lg font-semibold mb-4"
                style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
              >
                Konfirmasi kehadiran
              </label>
              <div className="space-y-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="konfirmasi"
                    value="hadir"
                    checked={konfirmasi === 'hadir'}
                    onChange={(e) => setKonfirmasi(e.target.value)}
                    className="w-6 h-6 text-[#A31D1D] border-2 border-[#D4C4B0] focus:ring-[#A31D1D] focus:ring-2"
                  />
                  <span
                    className="ml-4 text-[#8B4A47] text-lg"
                    style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                  >
                    Hadir
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="konfirmasi"
                    value="tidak-hadir"
                    checked={konfirmasi === 'tidak-hadir'}
                    onChange={(e) => setKonfirmasi(e.target.value)}
                    className="w-6 h-6 text-[#A31D1D] border-2 border-[#D4C4B0] focus:ring-[#A31D1D] focus:ring-2"
                  />
                  <span
                    className="ml-4 text-[#8B4A47] text-lg"
                    style={{ fontFamily: 'var(--font-kumbh-sans), sans-serif' }}
                  >
                    Mohon maaf, saya tidak bisa hadir
                  </span>
                </label>
              </div>
            </div>
          </AnimatedElement>

          {/* Submit Button */}
          <AnimatedElement animationType="bounce" delay={1200}>
            <button
              type="submit"
              className="w-full bg-[#A31D1D] hover:bg-[#8B1A1A] text-white font-bold rounded-[25px] transition-colors duration-300 shadow-lg transform hover:scale-105 mt-10 text-lg"
              style={{ 
                fontFamily: 'var(--font-kumbh-sans), sans-serif',
                height: '50px'
              }}
            >
              SUBMIT
            </button>
          </AnimatedElement>
        </form>

      </div>
    </div>
  );
};
