'use client';

import React from 'react';
import { LandingPage, InvitationContent, BrideGroomPage, GalleryPrayerPage, RSVPPage, UcapanDoaPage, WeddingGiftPage, SimpleMusicPlayer, ToastContainer } from '@/components';
import { useInvitation } from '@/hooks/useInvitation';

export default function Home() {
  const { isInvitationOpen, isBrideGroomPageOpen, isGalleryPrayerPageOpen, isRSVPPageOpen, isUcapanDoaPageOpen, isWeddingGiftPageOpen, openInvitation } = useInvitation();

  return (
    <div className="overflow-x-hidden">
      <LandingPage onOpenInvitation={openInvitation} />
      <InvitationContent isVisible={isInvitationOpen} />
      <BrideGroomPage isVisible={isBrideGroomPageOpen} />
      <GalleryPrayerPage isVisible={isGalleryPrayerPageOpen} />
      <RSVPPage isVisible={isRSVPPageOpen} />
      <UcapanDoaPage isVisible={isUcapanDoaPageOpen} />
      <WeddingGiftPage isVisible={isWeddingGiftPageOpen} />
      
      {/* Floating Music Player */}
      <SimpleMusicPlayer isVisible={isInvitationOpen || isBrideGroomPageOpen || isGalleryPrayerPageOpen || isRSVPPageOpen || isUcapanDoaPageOpen || isWeddingGiftPageOpen} />
      <ToastContainer />
    </div>
  );
}