import Image from "next/image";
import React from "react";

const parseTextWithBold = (text: string, boldWords: string[]): React.ReactNode => {
  if (!boldWords || boldWords.length === 0) {
    return text;
  }
  const regex = new RegExp(`(${boldWords.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isBold = boldWords.some(boldWord => boldWord.toLowerCase() === part.toLowerCase());
    return isBold ? <strong key={index}>{part}</strong> : part;
  });
};

const InfoSection = () => {
  const contentItems = [
    {
      text: "Soins infirmiers sur prescription médicale et uniquement sur rendez-vous à Aulnay-sous-Bois et alentours. Nous assurons une prise en charge complète avec remboursement Sécurité Sociale.",
      boldWords: ["Soins infirmiers sur prescription médicale", "Aulnay-sous-Bois et alentours", "remboursement Sécurité Sociale"]
    },
    {
      text: "Nous acceptons la carte vitale, la CMU, et tous les régimes de mutuelles. Nos infirmières libérales conventionnées facilitent vos démarches de tiers payant.",
      boldWords: ["carte vitale", "CMU", "tous les régimes de mutuelles", "infirmières libérales conventionnées", "tiers payant"]
    },
    {
      text: "En cas de besoin urgent, laissez un message détaillé avec vos coordonnées. Notre cabinet infirmier d'Aulnay-sous-Bois vous rappellera dans les plus brefs délais pour organiser vos soins à domicile.",
      boldWords: ["cabinet infirmier d'Aulnay-sous-Bois", "plus brefs délais", "soins à domicile"]
    }
  ];

  return (
    <section id="infos" className="bg-background py-16 sm:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl lg:text-[32px] font-bold text-primary mb-12">
          Plus d'informations
        </h2>
        <div className="max-w-6xl mx-auto bg-card rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Side: Content */}
          <div className="lg:w-3/5 p-6 sm:p-10 lg:p-12 order-2 lg:order-1 flex flex-col justify-center">
            <ul className="space-y-8">
              {contentItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-checklist-16.svg"
                    alt="Checkmark icon"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-muted-foreground text-[15px] leading-[1.65]">
                    {parseTextWithBold(item.text, item.boldWords)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image with CTA */}
          <div className="lg:w-2/5 relative h-96 lg:h-auto order-1 lg:order-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/img-bloc_20infos-3.webp"
              alt="Infirmière souriante tenant un dossier"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 90vw, 40vw"
            />
            <div className="absolute bottom-8 left-8">
                <a
                  href="tel:+33608759928"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent/90 hover:bg-accent text-accent-foreground font-semibold rounded-lg shadow-lg text-base transition-colors"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-telephone-1.svg"
                    alt="Phone icon"
                    width={20}
                    height={20}
                    className="mr-2.5"
                  />
                  Contactez-nous
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;