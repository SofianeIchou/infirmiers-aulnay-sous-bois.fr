import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Image */}
          <div data-aos="zoom-in" data-aos-duration="800">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/infirmi_C3_A8re_20avec_20patient-2.webp"
              alt="Infirmière à domicile souriante utilisant un ordinateur portable"
              width={552}
              height={552}
              className="h-auto w-full rounded-lg border border-border shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h2 className="mb-6 text-[32px] font-bold leading-tight text-foreground">
              Cabinet Infirmier à Aulnay-sous-Bois : Soins infirmiers à domicile
              24h/24 et 7j/7
            </h2>
            <div className="space-y-4 text-base leading-[1.8] text-muted-foreground">
              <p>
                Notre{" "}
                <strong className="font-semibold text-primary">
                  cabinet infirmier à Aulnay-sous-Bois (93600)
                </strong>{" "}
                situé au{" "}
                <strong className="font-semibold text-primary">
                  65 allées Pluton
                </strong>{" "}
                réunit une équipe d'
                <strong className="font-semibold text-primary">
                  infirmières diplômées d'État
                </strong>{" "}
                pour des{" "}
                <strong className="font-semibold text-primary">
                  soins infirmiers à domicile
                </strong>{" "}
                dans tout le secteur. Disponibles{" "}
                <strong className="font-semibold text-primary">
                  24h/24 et 7j/7
                </strong>
                , nous intervenons au cabinet et à domicile pour assurer vos
                soins.
              </p>
              <p>
                Nos services infirmiers comprennent :{" "}
                <strong className="font-semibold text-primary">
                  prises de sang à domicile Aulnay-sous-Bois
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  pansements simples et complexes
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  injections
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  perfusions
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  prélèvements sanguins
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  surveillance glycémique
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  chimiothérapie à domicile
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  soins palliatifs
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  cupping thérapie
                </strong>{" "}
                et{" "}
                <strong className="font-semibold text-primary">
                  aide à la toilette
                </strong>
                . Notre cabinet infirmier à Aulnay-sous-Bois est équipé pour
                vous accueillir dans un environnement moderne et confortable.
              </p>
              <p>
                Notre équipe d'infirmières intervient principalement à{" "}
                <strong className="font-semibold text-primary">
                  Aulnay-sous-Bois
                </strong>
                . Nous couvrons tous les quartiers d'Aulnay-sous-Bois :{" "}
                <strong className="font-semibold text-primary">Les 3000</strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  Centre-ville
                </strong>
                ,{" "}
                <strong className="font-semibold text-primary">
                  Rose des Vents
                </strong>
                , <strong className="font-semibold text-primary">Amitié</strong>
                , garantissant des{" "}
                <strong className="font-semibold text-primary">
                  soins infirmiers de proximité
                </strong>{" "}
                à Aulnay-sous-Bois.
              </p>
              <p>
                Cabinet{" "}
                <strong className="font-semibold text-primary">
                  conventionné secteur 1
                </strong>{" "}
                pratiquant le{" "}
                <strong className="font-semibold text-primary">
                  tiers-payant intégral
                </strong>
                . Notre{" "}
                <strong className="font-semibold text-primary">
                  permanence téléphonique 24h/24
                </strong>{" "}
                vous permet de prendre rendez-vous à tout moment, pour des{" "}
                <strong className="font-semibold text-primary">
                  soins infirmiers programmés
                </strong>{" "}
                ou des{" "}
                <strong className="font-semibold text-primary">
                  situations d'urgence
                </strong>
                .
              </p>
              <p>
                Nos{" "}
                <strong className="font-semibold text-primary">
                  infirmières à Aulnay-sous-Bois
                </strong>{" "}
                dispensent les soins dans le respect strict des protocoles
                sanitaires, avec une attention particulière au confort du
                patient. Notre approche privilégie l'écoute et l'
                <strong className="font-semibold text-primary">
                  accompagnement personnalisé
                </strong>
                , garantissant une{" "}
                <strong className="font-semibold text-primary">
                  prise en charge infirmière
                </strong>{" "}
                de qualité par des professionnels inscrits à l'
                <a
                  href="https://www.ordre-infirmiers.fr/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ordre national des infirmiers de Paris
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
