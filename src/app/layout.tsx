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
  title: "Malu Investment CC — Moving Namibia Forward",
  description:
    "Okahandja-founded close corporation operating nationally. Transport, construction, logistics, cleaning — and MI-WAY fleet management software. CC/2017/00248.",
  keywords: [
    "Malu Investment",
    "Okahandja",
    "Namibia",
    "close corporation",
    "MI-WAY",
    "fleet management",
    "taxi",
    "transport",
    "construction",
    "logistics",
    "cleaning",
  ],
  authors: [{ name: "Malu Investment CC" }],
  icons: {
    icon: "/assets/brand/malu-investment-icon.webp",
  },
  openGraph: {
    title: "Malu Investment CC — Moving Namibia Forward",
    description:
      "Okahandja-founded, operating nationally. Transport, construction, logistics, cleaning — and MI-WAY fleet management.",
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
        className={`${outfit.variable} ${plusJakarta.variable} antialiased bg-white text-malu-navy`}
      >
        {children}
      </body>
    </html>
  );
}
