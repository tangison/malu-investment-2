import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MiWay from "@/components/MiWay";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <MiWay />
        <About />
        <Testimonials />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
