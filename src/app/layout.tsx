import ErrorReporter from "@/components/ErrorReporter";
import type { Metadata } from "next";
import Script from "next/script";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infirmière à Aulnay-sous-Bois | Soins infirmiers à domicile 24h/24",
  description:
    "Cabinet infirmier à Aulnay-sous-Bois (93600) - Soins infirmiers à domicile et au cabinet. Prise de sang, pansements, injections, perfusions, chimiothérapie à domicile. Disponible 24h/24 et 7j/7. Tiers-payant intégral. Adresse: 65 allées Pluton, Aulnay-sous-Bois.",
  keywords: [
    "infirmière Aulnay-sous-Bois",
    "infirmière à domicile Aulnay-sous-Bois",
    "soins infirmiers Aulnay-sous-Bois",
    "cabinet infirmier Aulnay-sous-Bois",
    "prise de sang Aulnay-sous-Bois",
    "infirmière libérale Aulnay-sous-Bois",
    "soins à domicile Aulnay-sous-Bois",
    "pansements Aulnay-sous-Bois",
    "injections Aulnay-sous-Bois",
    "chimiothérapie à domicile Aulnay-sous-Bois",
    "infirmière 93600",
    "soins infirmiers 24h/24 Aulnay-sous-Bois",
    "infirmière Sevran",
    "infirmière Villepinte",
    "infirmière Livry-Gargan",
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
    title: "Infirmière à Aulnay-sous-Bois | Soins infirmiers à domicile 24h/24",
    description:
      "Cabinet infirmier à Aulnay-sous-Bois (93600). Soins infirmiers à domicile et au cabinet. Disponible 24h/24 et 7j/7. Tiers-payant intégral.",
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
    title: "Infirmière à Aulnay-sous-Bois | Soins infirmiers à domicile",
    description:
      "Cabinet infirmier à Aulnay-sous-Bois. Soins infirmiers à domicile 24h/24 et 7j/7.",
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
