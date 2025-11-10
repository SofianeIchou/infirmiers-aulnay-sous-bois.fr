"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const scrollTop = document.documentElement.scrollTop;
        const percentage = scrollTop / scrollHeight * 100;
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[5px] bg-[#0369a1] z-[1000]"
      style={{ width: `${scrollPercentage}%` }} />);


};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
  { href: "#about", label: "A propos" },
  { href: "#services", label: "Soins" },
  { href: "#map", label: "Cabinet" },
  { href: "#infos", label: "Infos" }];


  return (
    <>
      <ScrollProgressBar />
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-shadow duration-300 bg-[#0891B2] ${
        isScrolled ? "shadow-lg" : ""}`
        }
        style={{ height: '100px' }}>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full relative">
            <div className="flex items-center gap-x-8">
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={isMenuOpen}>

                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
              <nav className="hidden lg:flex" aria-label="Navigation principale">
                <ul className="flex items-center gap-x-8">
                  {navLinks.map((link) =>
                  <li key={link.href}>
                      <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white text-lg font-semibold hover:text-gray-200 transition-colors">

                        {link.label}
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <Link href="/" aria-label="Page d'accueil">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2262fed0-22e7-46b0-ab76-c4945eba013b/generated_images/professional-nursing-cabinet-logo-cabine-3b301e35-20251028231939.jpg"
                  alt="Cabinet Infirmier Ines Abbes"
                  width={90}
                  height={90}
                  priority
                  className="rounded-full" />

              </Link>
              <p className="text-white text-xs -mt-1 font-sans tracking-wide">
                cabinet infirmière libérale
              </p>
            </div>

            <div>
              <a
                href="tel:+33608759928"
                className="flex items-center justify-center gap-x-2 text-white font-semibold rounded-lg transition-all hover:bg-white/10 shadow-[0_0_0_5px_rgba(3,105,161,0.204)] w-[200px] h-[47.5781px] text-lg"
                style={{ padding: '11.2px 16px' }}
                aria-label="Appeler le cabinet infirmier au 06 08 75 99 28">

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-telephone-1.svg"
                  alt=""
                  width={24}
                  height={24} />

                <span>06 08 75 99 28</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-[100px] left-0 w-full bg-white z-[998] shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? "translate-y-0" : "-translate-y-[150%]"}`
        }>

        <div className="pt-8 pb-12 px-4">
          <nav>
            <ul className="flex flex-col items-center gap-y-8">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-semibold text-dark-navy hover:text-primary-blue transition-colors">

                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>);

};

export default Header;