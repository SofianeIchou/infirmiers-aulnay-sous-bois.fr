"use client";

import AboutCards from "@/components/sections/about-cards";
import AboutIntro from "@/components/sections/about-intro";
import FaqSection from "@/components/sections/faq-section";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import HeroBanner from "@/components/sections/hero-banner";
import InfoSection from "@/components/sections/info-section";
import MapLocation from "@/components/sections/map-location";
import ServicesGrid from "@/components/sections/services-grid";
import Script from "next/script";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Cabinet Infirmier Aulnay-sous-Bois",
    description:
      "Cabinet infirmier à Aulnay-sous-Bois (93600) proposant des soins infirmiers à domicile et au cabinet. Disponible 24h/24 et 7j/7.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://infirmiere-aulnay-sous-bois.fr",
    telephone: "+33608759928",
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 allées Pluton",
      addressLocality: "Aulnay-sous-Bois",
      postalCode: "93600",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.9381",
      longitude: "2.4940",
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Insurance",
    currenciesAccepted: "EUR",
    medicalSpecialty: [
      "Nursing",
      "Home Health Care",
      "Blood Sampling",
      "Wound Care",
      "Chemotherapy",
    ],
    serviceArea: {
      "@type": "City",
      name: "Aulnay-sous-Bois",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Aulnay-sous-Bois",
      },
      {
        "@type": "City",
        name: "Sevran",
      },
      {
        "@type": "City",
        name: "Villepinte",
      },
      {
        "@type": "City",
        name: "Livry-Gargan",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de soins infirmiers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prise de sang à domicile",
            description:
              "Prélèvements sanguins à domicile ou au cabinet sur ordonnance médicale",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pansements et soins de plaies",
            description:
              "Soins des plaies chroniques et aigües, changements de pansements",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Injections et perfusions",
            description:
              "Administration professionnelle de traitements injectables, vaccins et perfusions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soins à domicile",
            description:
              "Soins infirmiers à domicile personnalisés pour personnes âgées ou à mobilité réduite",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chimiothérapie à domicile",
            description:
              "Soins sur chambre implantable (PAC), surveillance spécialisée et accompagnement personnalisé",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cupping thérapie",
            description:
              "Technique de médecine traditionnelle utilisant des ventouses thérapeutiques",
          },
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
    </>
  );
}
