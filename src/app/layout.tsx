import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";


const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dr. Vitor de Castro | Endocrinologia e Metabologia em São José dos Campos",
  description: "Especialista em Emagrecimento, Performance e Reposição Hormonal. Atendimento humanizado em São José dos Campos (Aquarius).",
  keywords: [
    "Endocrinologista São José dos Campos", 
    "Emagrecimento em São José dos Campos", 
    "Performance Esportiva em São José dos Campos", 
    "Reposição Hormonal em São José dos Campos", 
    "Dr Vitor de Castro"
  ],
  authors: [{ name: "Dr. Vitor de Castro" }],
  creator: "LYP IA® Soluções de Tecnologia e Marketing",

// Open Graph (WhatsApp, Facebook, Instagram)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.drvitordecastro.com.br",
    title: "Dr. Vitor de Castro | Medicina de Precisão",
    description: "Transforme sua saúde com acompanhamento médico especializado em Emagrecimento e Performance.",
    siteName: "Dr. Vitor de Castro",
    images: [
      {
        url: "/dr-vitor-about.jpeg", 
        width: 1200,
        height: 630,
        alt: "Dr. Vitor de Castro - Medicina de Precisão",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vitor de Castro | Medicina de Precisão",
    description: "Especialista em Emagrecimento e Performance.",
    images: ["/dr-vitor-about.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Vitor de Castro - Endocrinologia e Metabologia",
              "image": "https://www.drvitordecastro.com.br/logo-vc.png",
              "telephone": "+5512988743885",
              "url": "https://www.drvitordecastro.com.br",
              "priceRange": "$$$",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. São João, 2375 - sala 701 - Aquarius",
                  "addressLocality": "São José dos Campos",
                  "addressRegion": "SP",
                  "postalCode": "12242-000",
                  "addressCountry": "BR"
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            }),
          }}
        />
      </head>
      <body className="bg-brand-beige text-brand-dark antialiased">
        {children}
        <WhatsAppFloating />
        <CookieConsent />
      </body>
    </html>
  );
}