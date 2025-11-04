"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent !== "true") {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    try {
      localStorage.setItem("cookie_consent", "true");
    } catch (error) {
      console.error("Failed to set cookie consent in localStorage", error);
    }
  };

  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("2 Rue Frédéric Joliot Curie, 93270 Sevran, France")}`;

  return (
    <>
      <footer className="bg-[#0071A4] py-10 text-white border-t border-white/20 relative">
        <div className="container mx-auto px-6 text-center">
          <p className="text-base font-sans">
            Adresse :{" "}
            <a
              href={gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 transition-colors"
            >
              2 Rue Frédéric Joliot Curie, 93270 Sevran, France
            </a>
          </p>
        </div>
      </footer>
      
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-out transform ${
          showBanner ? "translate-y-0" : "translate-y-full"
        }`}
        aria-live="polite"
        role="dialog"
        aria-modal="true"
        aria-label="Bannière de consentement aux cookies"
      >
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground text-center md:text-left font-sans">
            Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site. En continuant votre navigation, vous acceptez l'utilisation de ces cookies.
          </p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Button
              onClick={handleAccept}
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-4 py-2"
              size="sm"
            >
              J'ai compris
            </Button>
            <Button
              variant="link"
              asChild
              className="px-0 text-sm text-primary hover:text-primary/80"
            >
              <Link href="#">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;