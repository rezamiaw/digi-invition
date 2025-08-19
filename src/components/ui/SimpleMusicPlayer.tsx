'use client';

import React, { useState, useRef } from 'react';
import { MusicIcon } from './MusicIcon';

interface SimpleMusicPlayerProps {
  audioSrc?: string;
  className?: string;
}

export const SimpleMusicPlayer: React.FC<SimpleMusicPlayerProps> = ({ 
  audioSrc = '/wedding-music.mp3', 
  className = '' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error playing audio:', error);
        alert('Audio tidak dapat diputar. Silakan coba lagi.');
      });
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error('Audio error:', e)}
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc} type="audio/mp3" />
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Button */}
      <button
        onClick={togglePlay}
        className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 
          bg-[#A31D1D] hover:bg-[#8B1A1A] 
          text-white 
          rounded-full 
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300
          transform hover:scale-110
          cursor-pointer
          ${isPlaying ? 'animate-pulse' : ''}
          ${className}
        `}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        <MusicIcon 
          isPlaying={isPlaying} 
          className="w-6 h-6" 
        />
      </button>
    </>
  );
};
