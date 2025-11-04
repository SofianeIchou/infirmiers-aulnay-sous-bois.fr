import Image from 'next/image';

const infoItems = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-rer-b-13.svg",
    alt: "logo rer B",
    text: "RER B: Sevran Beaudottes",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-parking-14.svg",
    alt: "icone parking",
    text: "Stationnement facile et gratuit",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-handicap-15.svg",
    alt: "icone handicapé",
    text: "Accès aux personnes à mobilité réduite (PMR), Accès Handicapé",
  },
];

const MapLocation = () => {
  return (
    <section id="map" className="w-full bg-secondary py-[60px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-foreground text-center lg:text-left">
              Où nous trouver
            </h2>
          </div>

          <div className="lg:col-span-5 order-first lg:order-none">
            <div className="w-full max-w-[900px] mx-auto aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5240.7821361453425!2d2.526737!3d48.946039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6146ef6794a91%3A0x6f665a7fd4e545f4!2s2%20Rue%20Fr%C3%A9d%C3%A9ric%20Joliot%20Curie%2C%2093270%20Sevran%2C%20France!5e0!3m2!1sfr!2sus!4v1738654305640!5m2!1sfr!2sus"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation du cabinet infirmier à Sevran"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-foreground text-center md:text-left">
                Informations pratiques
              </h3>
              <div className="flex flex-col gap-5 max-w-md mx-auto">
                {infoItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={40}
                      height={40}
                      className="flex-shrink-0"
                    />
                    <h4 className="text-base font-medium text-muted-foreground">
                      {item.text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;