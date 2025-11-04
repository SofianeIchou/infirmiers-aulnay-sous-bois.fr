'use client';

import Header from '@/components/sections/header';
import HeroBanner from '@/components/sections/hero-banner';
import AboutCards from '@/components/sections/about-cards';
import AboutIntro from '@/components/sections/about-intro';
import ServicesGrid from '@/components/sections/services-grid';
import MapLocation from '@/components/sections/map-location';
import InfoSection from '@/components/sections/info-section';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <HeroBanner />
        <AboutCards />
        <AboutIntro />
        <ServicesGrid />
        <MapLocation />
        <InfoSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}