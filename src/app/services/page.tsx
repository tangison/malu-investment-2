import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";
import ServicesPage from "./ServicesPage";

export const metadata = {
  title: "Services",
  description: "Taxi transport across Oshakati, Ongwediva & Ondangwa. Construction, logistics, cleaning coming soon. WhatsApp booking +264 81 211 1920.",
  openGraph: {
    title: "Our Services, MI-WAY by Malu Investment",
    description: "Taxi transport, construction, logistics, and cleaning services across Northern Namibia.",
    type: "website",
  },
  alternates: { canonical: "https://www.mi-way.org/services" },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main" className="flex-1 pt-20"><ServicesPage /></main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
