import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { AppProvider } from "@/src/store/AppProvider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azmilsolar.com"),
  title: {
    default: "AZMIL Power | Solar Energy Solutions in Nigeria",
    template: "%s | AZMIL Power",
  },
  description:
    "AZMIL Power provides reliable solar energy solutions in Nigeria. We offer solar panels, inverters, batteries, and complete solar installations for homes and businesses.",

  keywords: [
    "solar energy Nigeria",
    "solar panels Lagos",
    "inverter batteries Nigeria",
    "renewable energy Nigeria",
    "solar installation company",
    "AZMIL Power",
    "AZMIL Solar",
  ],

  authors: [{ name: "AZMIL Power" }],
  creator: "AZMIL Power",
  publisher: "AZMIL Power",

  openGraph: {
    title: "AZMIL Power | Solar Energy Solutions",
    description:
      "Power your home and business with clean, reliable solar energy.",
    url: "https://azmilsolar.com",
    siteName: "AZMIL Solar",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AZMIL Power Solar Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AZMIL Power | Solar Energy Solutions",
    description:
      "Affordable solar solutions for homes and businesses in Nigeria.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://azmilsolar.com",
  },

  category: "energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <Header />
          {children}
          <Analytics />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AZMIL Power",
                url: "https://azmilsolar.com",
                logo: "https://azmilsolar.com/logo.png",
                sameAs: [
                  "https://facebook.com/azmilsolar",
                  "https://instagram.com/azmilsolar",
                  "https://tiktok.com/@azmilsolar",
                  "https://linkedin.com/company/azmilsolar",
                ],
              }),
            }}
          />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
