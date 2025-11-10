import ErrorReporter from "@/components/ErrorReporter";
import type { Metadata } from "next";
import Script from "next/script";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infirmière à Domicile Aulnay-sous-Bois 24h/24 | Cabinet Infirmier 93600",
  description:
    "🏥 Cabinet infirmier à Aulnay-sous-Bois - Soins à domicile 24h/24. Prise de sang, pansements, injections, chimiothérapie. Conventionné Sécurité Sociale. Urgences acceptées. ☎️ 06 08 75 99 28",
  keywords: [
    "infirmière à domicile Aulnay-sous-Bois",
    "soins infirmiers Aulnay-sous-Bois 93600",
    "cabinet infirmier Aulnay-sous-Bois",
    "prise de sang domicile Aulnay",
    "infirmière libérale 93600",
    "infirmière urgence Aulnay-sous-Bois",
    "pansements domicile Aulnay-sous-Bois",
    "injections domicile 93600",
    "chimiothérapie domicile Aulnay",
    "soins palliatifs Aulnay-sous-Bois",
    "surveillance diabète domicile",
    "infirmière Rose des Vents Aulnay",
    "soins infirmiers 3000 Aulnay",
    "cabinet infirmier centre-ville Aulnay",
    "infirmière Sevran domicile",
    "soins infirmiers Villepinte",
    "infirmière Livry-Gargan",
    "cabinet infirmier Tremblay-en-France",
    "infirmière garde 24h Aulnay-sous-Bois",
    "cabinet infirmier conventionné 93600",
  ],
  authors: [{ name: "Cabinet Infirmier Aulnay-sous-Bois" }],
  creator: "Cabinet Infirmier Aulnay-sous-Bois",
  publisher: "Cabinet Infirmier Aulnay-sous-Bois",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://infirmiere-aulnay-sous-bois.fr"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cabinet Infirmier à Aulnay-sous-Bois | Soins à Domicile 24h/24",
    description:
      "Cabinet infirmier professionnel à Aulnay-sous-Bois (93600). Interventions à domicile 24h/24. Conventionné Sécurité Sociale. Urgences acceptées.",
    url: "/",
    siteName: "Cabinet Infirmier Aulnay-sous-Bois",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/img-infirmiere_20et_20patient-9.webp",
        width: 1200,
        height: 630,
        alt: "Infirmière à Aulnay-sous-Bois - Soins infirmiers à domicile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet Infirmier Aulnay-sous-Bois | Soins à Domicile 24h/24",
    description:
      "Soins infirmiers professionnels à domicile à Aulnay-sous-Bois. Disponible 24h/24 et 7j/7. Conventionné Sécurité Sociale.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2262fed0-22e7-46b0-ab76-c4945eba013b-infirmiere-liberale-sevran-fr/assets/images/img-infirmiere_20et_20patient-9.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="geo.region" content="FR-93" />
        <meta name="geo.placename" content="Aulnay-sous-Bois" />
        <meta name="geo.position" content="48.9539;2.4944" />
        <meta name="ICBM" content="48.9539, 2.4944" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalBusiness"],
              "name": "Cabinet Infirmier Aulnay-sous-Bois",
              "description": "Cabinet infirmier professionnel proposant des soins infirmiers à domicile et au cabinet à Aulnay-sous-Bois et alentours. Disponible 24h/24 et 7j/7.",
              "url": "https://infirmiere-aulnay-sous-bois.fr",
              "telephone": "+33608759928",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "65 allées Pluton",
                "addressLocality": "Aulnay-sous-Bois",
                "postalCode": "93600",
                "addressRegion": "Seine-Saint-Denis",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.9539,
                "longitude": 2.4944
              },
              "areaServed": [
                {"@type": "City", "name": "Aulnay-sous-Bois"},
                {"@type": "City", "name": "Sevran"},
                {"@type": "City", "name": "Villepinte"},
                {"@type": "City", "name": "Livry-Gargan"}
              ],
              "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
              "priceRange": "€€",
              "paymentAccepted": "Carte Vitale, Sécurité Sociale, Mutuelles",
              "currenciesAccepted": "EUR"
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
