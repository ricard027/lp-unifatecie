import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geração Gamer Brasil - Formação Digital em e-Sports",
  description:
    "Formação online e gratuita para jovens de 15 a 29 anos. Do zero ao pro player: cursos rápidos com certificados digitais e acesso ao mercado gamer.",
  keywords:
    "e-sports, games, formação digital, cursos gratuitos, gamer, pro player, certificado digital",
  authors: [{ name: "Geração Gamer Brasil" }],
  openGraph: {
    title: "Geração Gamer Brasil - Formação Digital em e-Sports",
    description:
      "Formação online e gratuita para jovens de 15 a 29 anos. Do zero ao pro player: cursos rápidos com certificados digitais e acesso ao mercado gamer.",
    url: "https://ggbr.fatecie.edu.br",
    siteName: "Geração Gamer Brasil",
    images: [
      {
        url: "/ggbr.png",
        width: 1200,
        height: 630,
        alt: "Geração Gamer Brasil - Formação Digital em e-Sports",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geração Gamer Brasil - Formação Digital em e-Sports",
    description:
      "Formação online e gratuita para jovens de 15 a 29 anos. Do zero ao pro player: cursos rápidos com certificados digitais e acesso ao mercado gamer.",
    images: ["/ggbr.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Geração Gamer Brasil",
    description:
      "Formação online e gratuita para jovens de 15 a 29 anos. Do zero ao pro player: cursos rápidos com certificados digitais e acesso ao mercado gamer.",
    url: "https://ggbr.fatecie.edu.br",
    logo: "https://ggbr.fatecie.edu.br/ggbr.png",
    image: "https://ggbr.fatecie.edu.br/ggbr.png",
    telephone: "+55 (44) 3045-9898",
    email: "ggbr@fatecie.edu.br",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "Paraná",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Cursos gratuitos de formação digital em e-Sports",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Formação Digital em e-Sports",
      itemListElement: [
        {
          "@type": "Course",
          name: "Formação Digital em e-Sports",
          description:
            "Cursos para os jovens que vão liderar o futuro dos games",
          provider: {
            "@type": "Organization",
            name: "Geração Gamer Brasil",
          },
          courseMode: "online",
          educationalLevel: "intermediate",
          timeRequired: "PT30H",
        },
      ],
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-[#17191B] `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
