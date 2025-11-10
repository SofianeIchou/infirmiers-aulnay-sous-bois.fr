import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroBanner() {
  const backgroundImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/img-infirmiere_20et_20patient-9.webp";

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      aria-labelledby="hero-heading"
    >
      {/* Overlays for text legibility */}
      <div className="absolute inset-0 bg-dark-navy/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-l from-dark-navy/60 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-6 text-center md:items-end md:text-right">
        <div className="max-w-3xl">
          <h1
            id="hero-heading"
            className="font-bold uppercase text-white leading-tight tracking-tighter text-4xl sm:text-5xl md:text-[56px]"
          >
            Soins infirmiers
            <br />
            <span className="md:text-[42px] sm:text-4xl text-3xl font-semibold normal-case">
              Au cabinet : 65 allées Pluton, Aulnay-sous-Bois 93600
            </span>
            <br />
            <span className="md:text-[42px] sm:text-4xl text-3xl font-semibold normal-case">
              ou à votre domicile sur Aulnay-sous-Bois
            </span>
          </h1>

          <Button
            asChild
            size="lg"
            className="mt-8 h-auto w-full rounded-md bg-primary py-4 px-10 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary/90 sm:w-auto"
            aria-label="Prendre rendez-vous par téléphone"
          >
            <a href="tel:+33608759928">Prendre Rendez-Vous</a>
          </Button>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <a href="#about" aria-label="Faire défiler vers la section suivante">
          <ChevronDown className="h-10 w-10 animate-bounce text-white opacity-70 transition-opacity hover:opacity-100" />
        </a>
      </div>
    </section>
  );
}