import Image from "next/image";

const cardData = [
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-24h-2.svg",
    altText: "icone 24h/24",
    title: "7j/7 et 24h/24",
    description: "Déplacement 7j/7 week-end et jours fériés sur rendez-vous",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-carte-vitale-3.svg",
    altText: "carte vitale",
    title: "Professionnels diplômés d'État",
    description:
      "Conventionnés avec l'assurance maladie (CPAM). Tarifs conventionnés et remboursés. Tiers payant.",
  },
  {
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-area-4.svg",
    altText: "icone localisation",
    title: "Soins à domicile ou au cabinet à Aulnay-sous-Bois",
    description: "Intervention uniquement sur Aulnay-sous-Bois",
  },
];

const AboutCards = () => {
  return (
    <section id="about" className="bg-secondary py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-md shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
            >
              <div className="mb-6">
                <Image
                  src={card.iconSrc}
                  alt={card.altText}
                  width={64}
                  height={64}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
