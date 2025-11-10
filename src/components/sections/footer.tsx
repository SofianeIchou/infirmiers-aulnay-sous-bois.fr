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

  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("65 allées Pluton, 93600 Aulnay-sous-Bois, France")}`;

  return (
    <>
      <footer className="bg-[#0071A4] py-16 text-white border-t border-white/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Contact Principal */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <a 
                    href="tel:+33608759928" 
                    className="hover:text-gray-200 transition-colors font-medium"
                  >
                    06 08 75 99 28
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-1">📍</span>
                  <a
                    href={gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors leading-relaxed"
                  >
                    65 allées Pluton<br />
                    93600 Aulnay-sous-Bois
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🕒</span>
                  <span className="text-sm">Disponible 24h/24 - 7j/7</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Nos Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-gray-200 transition-colors">• Soins à domicile</a></li>
                <li><a href="#services" className="hover:text-gray-200 transition-colors">• Prises de sang</a></li>
                <li><a href="#services" className="hover:text-gray-200 transition-colors">• Pansements</a></li>
                <li><a href="#services" className="hover:text-gray-200 transition-colors">• Injections</a></li>
                <li><a href="#services" className="hover:text-gray-200 transition-colors">• Chimiothérapie</a></li>
                <li><a href="#services" className="hover:text-gray-200 transition-colors">• Soins palliatifs</a></li>
              </ul>
            </div>

            {/* Zone d'intervention */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Zone d'intervention</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Aulnay-sous-Bois</strong></li>
                <li className="text-xs pl-2">• Centre-ville</li>
                <li className="text-xs pl-2">• Rose des Vents</li>
                <li className="text-xs pl-2">• Les 3000</li>
                <li className="text-xs pl-2">• Quartier Amitié</li>
                <li className="mt-3"><strong>Communes limitrophes</strong></li>
                <li className="text-xs">Sevran • Villepinte • Livry-Gargan</li>
              </ul>
            </div>

            {/* Informations légales */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Informations</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Conventionné Sécurité Sociale</li>
                <li>✅ Tiers-payant intégral</li>
                <li>✅ Carte Vitale acceptée</li>
                <li>✅ Toutes mutuelles</li>
                <li className="mt-3">
                  <span className="block text-xs text-gray-200">
                    Infirmières D.E. inscrites<br />
                    à l'Ordre National des Infirmiers
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Ligne de séparation */}
          <div className="border-t border-white/20 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-sm text-gray-200 text-center md:text-left">
                <p>© {new Date().getFullYear()} Cabinet Infirmier Aulnay-sous-Bois</p>
                <p className="text-xs mt-1">Tous droits réservés • Soins infirmiers professionnels</p>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-flex items-center gap-4 text-sm">
                  <button className="hover:text-gray-200 transition-colors">
                    Mentions légales
                  </button>
                  <span className="text-gray-400">•</span>
                  <button className="hover:text-gray-200 transition-colors">
                    Politique de confidentialité
                  </button>
                </div>
              </div>
            </div>
          </div>

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