"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const faqData = [
  {
    question: "Quel est le rôle de l'Infirmièr(e) libéral(e)?",
    answer:
      "L'infirmier(e) libéral(e) réalise des soins à domicile tels que les pansements, les injections et l'administration des traitements. Il/elle assure le suivi de l'état de santé du patient, aide au maintien de l'autonomie, et veille à la coordination avec d'autres professionnels de santé. De plus, il/elle prend en charge les démarches administratives liées aux soins et informe le médecin traitant de l'évolution du patient.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/faq-1-4.webp",
    alt: "Infirmière libérale prodiguant un soin à un patient.",
  },
  {
    question:
      "Les soins à domicile sont-ils remboursés par la Sécurité Sociale ?",
    answer:
      "Oui, les soins infirmiers à domicile sont généralement pris en charge par la Sécurité Sociale, à condition d'avoir une prescription médicale. Nous nous chargeons de la facturation et pouvons vous renseigner sur les démarches à suivre.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/faq-2-5.webp",
    alt: "Carte vitale pour le remboursement des soins infirmiers.",
  },
  {
    question: "Acceptez-vous les urgences ?",
    answer:
      "Oui, nous intervenons en urgence selon la disponibilité de notre équipe. Si vous avez besoin de soins urgents, n’hésitez pas à nous contacter directement pour organiser une intervention rapide.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/faq-3-6.webp",
    alt: "Matériel médical pour les interventions d'urgence.",
  },
  {
    question: "Comment se passe le suivi de mes soins à domicile ?",
    answer:
      "Nous mettons en place un suivi personnalisé en fonction de vos besoins de santé. Chaque intervention est planifiée et adaptée en fonction de votre évolution. Notre équipe est à votre écoute pour toute question ou besoin supplémentaire durant votre traitement.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/faq-4-7.webp",
    alt: "Infirmière effectuant le suivi des soins à domicile d'un patient.",
  },
  {
    question:
      "Que faire en cas de changement de mon état de santé ou si mes soins évoluent ?",
    answer:
      "Si votre état de santé change ou si vous avez de nouvelles prescriptions, il est important de nous en informer rapidement. Nous adapterons les soins en fonction de l'évolution de votre situation. Vous pouvez nous contacter directement pour discuter de toute modification nécessaire.",
    imageSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/faq-5-8.webp",
    alt: "Gros plan sur une seringue pour l'administration de médicaments.",
  },
];

const FaqSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-[#F8F6F3] py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-center mb-16">Foire aux questions</h2>
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-start gap-6"
              variants={itemVariants}
            >
              <div className="w-full md:w-[180px] flex-shrink-0">
                <div className="shadow-md rounded-md overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={180}
                    height={135}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h5 className="mb-2">{item.question}</h5>
                <p className="text-[15px] text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
