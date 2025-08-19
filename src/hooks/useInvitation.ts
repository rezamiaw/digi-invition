'use client';

import { useState, useCallback } from 'react';

export const useInvitation = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isBrideGroomPageOpen, setIsBrideGroomPageOpen] = useState(false);
  const [isGalleryPrayerPageOpen, setIsGalleryPrayerPageOpen] = useState(false);
  const [isRSVPPageOpen, setIsRSVPPageOpen] = useState(false);
  const [isUcapanDoaPageOpen, setIsUcapanDoaPageOpen] = useState(false);
  const [isWeddingGiftPageOpen, setIsWeddingGiftPageOpen] = useState(false);

  const openInvitation = useCallback(() => {
    setIsInvitationOpen(true);
    setIsBrideGroomPageOpen(true);
    setIsGalleryPrayerPageOpen(true);
    setIsRSVPPageOpen(true);
    setIsUcapanDoaPageOpen(true);
    setIsWeddingGiftPageOpen(true);
    // Delay scroll untuk memastikan konten sudah di-render
    setTimeout(() => {
      const nextSection = document.getElementById('invitation-content');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }, []);

  const openBrideGroomPage = useCallback(() => {
    setIsBrideGroomPageOpen(true);
    // Delay scroll untuk memastikan konten sudah di-render
    setTimeout(() => {
      const nextSection = document.getElementById('bride-groom-page');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }, []);

  return {
    isInvitationOpen,
    isBrideGroomPageOpen,
    isGalleryPrayerPageOpen,
    isRSVPPageOpen,
    isUcapanDoaPageOpen,
    isWeddingGiftPageOpen,
    openInvitation,
    openBrideGroomPage,
  };
};
