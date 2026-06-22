import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "MI-WAY by Malu Investment — Moving Namibia Forward",
  description:
    "Northern Namibia multi-service enterprise. Taxi transport across Oshakati, Ongwediva, Ondangwa. Construction, logistics, cleaning — and MI-WAY fleet management.",
  keywords: [
    "Malu Investment",
    "MI-WAY",
    "Oshakati",
    "Ongwediva",
    "Ondangwa",
    "Northern Namibia",
    "taxi",
    "transport",
    "fleet management",
    "construction",
    "logistics",
    "cleaning",
  ],
  authors: [{ name: "Malu Investment" }],
  icons: {
    icon: "/assets/brand/brand-asset-01.webp",
  },
  openGraph: {
    title: "MI-WAY by Malu Investment — Moving Namibia Forward",
    description:
      "Taxi transport across Oshakati, Ongwediva, and Ondangwa. Construction, logistics, cleaning — and MI-WAY fleet management.",
    type: "website",
    locale: "en_NA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${spaceGrotesk.variable} antialiased grain-overlay`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
