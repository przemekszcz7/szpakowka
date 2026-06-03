/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Intro from './components/Intro.tsx';
import Rooms from './components/Rooms.tsx';
import Surroundings from './components/Surroundings.tsx';
import Gallery from './components/Gallery.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import BookingModal from './components/BookingModal.tsx';
import useIntersectionObserver from './hooks/useIntersectionObserver.ts';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('all');

  // Activate the smooth intersection reveals of the sections
  useIntersectionObserver();

  const handleOpenBooking = (roomId: string = 'all') => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleScrollToDiscover = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-gold selection:text-forest overflow-x-hidden antialiased relative">
      {/* Editorial Tangible Noise Texture Overlay */}
      <div className="organic-noise" />

      {/* Premium Minimal Navigation Header */}
      <Navbar onBookClick={() => handleOpenBooking('all')} />

      {/* Main Full-Viewport Hero Landing */}
      <Hero onDiscoverClick={handleScrollToDiscover} />

      {/* Asymmetric Intro Block */}
      <Intro />

      {/* Comfort Rooms & Terrace Gallery Tab Explorer */}
      <Rooms onBookRoom={handleOpenBooking} />

      {/* Surroundings Scenic Panoramic Guide Block */}
      <Surroundings />

      {/* Editorial Grid Gallery Mosaic */}
      <Gallery />

      {/* Interactive Map Contact and Host Coordinates */}
      <Contact />

      {/* Designer Charcoal Fine-Line Footer */}
      <Footer />

      {/* Embedded High-End Reservation Booking System */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoomId={selectedRoomId}
      />
    </div>
  );
}
