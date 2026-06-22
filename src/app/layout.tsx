import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MALU INVESTMENT — Moving Namibia Forward",
  description:
    "Northern Namibia multi-service enterprise. Transport, construction, logistics, cleaning — and MI-WAY fleet management. Operating across Oshakati, Ongwediva, and Ondangwa.",
  keywords: [
    "Malu Investment",
    "Oshakati",
    "Ongwediva",
    "Ondangwa",
    "Northern Namibia",
    "MI-WAY",
    "fleet management",
    "taxi",
    "transport",
    "construction",
    "logistics",
    "cleaning",
  ],
  authors: [{ name: "Malu Investment" }],
  icons: {
    icon: "/assets/brand/brand-asset-01.webp",
  },
  openGraph: {
    title: "MALU INVESTMENT — Moving Namibia Forward",
    description:
      "Operating across Oshakati, Ongwediva, and Ondangwa. Transport, construction, logistics, cleaning — and MI-WAY fleet management.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased mechanical-noise`}
      >
        {children}
      </body>
    </html>
  );
}
