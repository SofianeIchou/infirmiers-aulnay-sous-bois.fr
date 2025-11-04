import Image from "next/image";

type Service = {
  title: string;
  iconSrc: string;
  isBase64?: boolean;
  description: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Cupping thérapie",
    iconSrc: "data:image/png;base64,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",
    isBase64: true,
    description: (
      <>
        Technique de <strong>médecine traditionnelle</strong> utilisant des <strong>ventouses thérapeutiques</strong> pour soulager les <strong>douleurs musculaires</strong>, améliorer la <strong>circulation sanguine</strong> et favoriser la <strong>détoxification</strong>.
      </>
    ),
  },
  {
    title: "Prises de sang",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-prise_20de_20sang-5.svg",
    description: (
      <>
        <strong>Prélèvements sanguins</strong> à domicile ou au cabinet sur ordonnance médicale. <strong>Tests sanguins</strong>, <strong>bilans sanguins</strong> et analyses médicales.
      </>
    ),
  },
  {
    title: "Injections & Perfusions",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-injection-6.svg",
    description: (
      <>
        Administration professionnelle de <strong>traitements injectables</strong>, <strong>vaccins</strong> et <strong>perfusions</strong>. Suivi et surveillance personnalisés.
      </>
    ),
  },
  {
    title: "Pansements & Soins de plaies",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-bandage-7.svg",
    description: (
      <>
        <strong>Soins des plaies</strong> chroniques et aigües, <strong>changements de pansements</strong> et suivi de <strong>cicatrisation</strong> personnalisé.
      </>
    ),
  },
  {
    title: "Soins à domicile & Personnes âgées",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-soins-8.svg",
    description: (
      <>
        <strong>Soins infirmiers à domicile</strong> personnalisés pour <strong>personnes âgées</strong> ou à <strong>mobilité réduite</strong>. Accompagnement quotidien et suivi régulier.
      </>
    ),
  },
  {
    title: "Surveillance médicale & Diabète",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-suivi_20medical-9.svg",
    description: (
      <>
        Contrôle des <strong>constantes vitales</strong>, <strong>suivi glycémique</strong>, <strong>surveillance diabétique</strong> et adaptation des traitements selon prescription.
      </>
    ),
  },
  {
    title: "Soins post-opératoires",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-hopital-10.svg",
    description: (
      <>
        Prise en charge complète après intervention : <strong>méchage</strong>, soins d'<strong>escarres</strong>, traitement des <strong>brûlures</strong>, <strong>ulcères</strong> veineux et artériels.
      </>
    ),
  },
  {
    title: "Chimiothérapie à domicile",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-chimio-11.svg",
    description: (
      <>
        Soins sur <strong>chambre implantable</strong> (PAC), <strong>surveillance spécialisée</strong> et accompagnement personnalisé pré et post-<strong>chimiothérapie</strong>.
      </>
    ),
  },
  {
    title: "Administration de médicaments",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/svgs/icon-medicaments-12.svg",
    description: (
      <>
        Distribution et <strong>administration sécurisée</strong> de traitements selon prescription médicale. <strong>Interventions programmées</strong> et <strong>urgentes</strong> possibles.
      </>
    ),
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col">
    <div className="mx-auto mb-6 flex-shrink-0">
      <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center">
        {service.isBase64 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={service.iconSrc} alt={`Icône ${service.title}`} className="w-10 h-10" />
        ) : (
          <Image src={service.iconSrc} alt={`Icône ${service.title}`} width={40} height={40} />
        )}
      </div>
    </div>
    <div className="flex-grow">
      <h4 className="text-lg font-bold text-dark-navy mb-3">{service.title}</h4>
      <p className="text-sm text-text-gray leading-relaxed">{service.description}</p>
    </div>
  </div>
);

const ServicesGrid = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/img-bg-services-10.webp"
          alt="Arrière-plan décoratif avec des outils médicaux"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center text-3xl font-bold text-[#0087A0] mb-12 md:mb-16">
          Nos services de soins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;