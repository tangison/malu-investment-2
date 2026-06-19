import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malu Investment CC — Moving Okahandja Forward",
  description:
    "Professional transport, construction, logistics, and cleaning services in Okahandja, Namibia. Registered CC (CC/2017/00248). Trusted. Local. Reliable.",
  keywords: [
    "Malu Investment",
    "Okahandja",
    "taxi",
    "transport",
    "Namibia",
    "close corporation",
    "construction",
    "logistics",
    "cleaning services",
  ],
  authors: [{ name: "Malu Investment CC" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Malu Investment CC — Moving Okahandja Forward",
    description:
      "Professional transport, construction, logistics, and cleaning services. Registered. Trusted. Local.",
    type: "website",
    locale: "en_NA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malu Investment CC — Moving Okahandja Forward",
    description:
      "Professional transport, construction, logistics, and cleaning services in Okahandja, Namibia.",
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
        className={`${outfit.variable} ${plusJakarta.variable} antialiased bg-malu-obsidian text-malu-cream`}
      >
        {children}
      </body>
    </html>
  );
}
