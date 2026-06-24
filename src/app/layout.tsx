import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import LenisProvider from "@/providers/LenisProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2a4a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mi-way.org"),
  title: {
    default: "MI-WAY by Malu Investment, Moving Namibia Forward",
    template: "%s | MI-WAY by Malu Investment",
  },
  description:
    "Northern Namibia multi-service enterprise. Taxi transport across Oshakati, Ongwediva, Ondangwa. Construction, logistics, cleaning, and MI-WAY fleet management.",
  authors: [{ name: "Malu Investment" }],
  icons: {
    icon: [
      { url: "/assets/brand/miway-shield-logo.png", sizes: "32x32" },
    ],
    apple: "/assets/brand/miway-shield-logo.png",
  },
  openGraph: {
    title: "MI-WAY by Malu Investment, Moving Namibia Forward",
    description:
      "Taxi transport across Oshakati, Ongwediva, and Ondangwa. Construction, logistics, cleaning, and MI-WAY fleet management.",
    type: "website",
    locale: "en_NA",
    siteName: "MI-WAY by Malu Investment",
    images: [{ url: "/assets/brand/miway-shield-logo.png", width: 432, height: 577, alt: "MI-WAY by Malu Investment" }],
    url: "https://www.mi-way.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "MI-WAY by Malu Investment, Moving Namibia Forward",
    description: "Taxi transport across Oshakati, Ongwediva, and Ondangwa. Construction, logistics, cleaning, and MI-WAY fleet management.",
    images: ["/assets/brand/miway-shield-logo.png"],
  },
  alternates: {
    canonical: "https://www.mi-way.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${spaceGrotesk.variable} antialiased grain-overlay`}
      >
        <LenisProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:text-base focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-bold focus:uppercase"
          >
            Skip to content
          </a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Malu Investment",
                url: "https://www.mi-way.org",
                description: "Northern Namibia multi-service enterprise. Taxi transport, construction, logistics, cleaning, and MI-WAY fleet management.",
                foundingDate: "2017",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Oshakati",
                  addressRegion: "Oshana",
                  addressCountry: "NA",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+264-81-211-1920",
                  contactType: "customer service",
                  availableLanguage: "English",
                },
                sameAs: [
                  "https://www.facebook.com/share/p/1HoFSQW4o2/",
                ],
              }),
            }}
          />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
