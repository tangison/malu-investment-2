import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";
import ServicesPage from "./ServicesPage";

export const metadata = { title: "Services — MI-WAY by Malu Investment" };

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1 pt-20"><ServicesPage /></main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
