import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <span className="font-display text-[8rem] text-amber/20 leading-none block">404</span>
          <h1 className="font-display text-3xl text-text-primary -mt-4 mb-4">PAGE NOT FOUND</h1>
          <p className="font-sans text-sm text-text-secondary mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try one of these instead.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-amber text-base font-sans text-xs uppercase tracking-[0.1em] font-bold px-6 py-3 hover:bg-amber-light transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border border-base-border text-text-secondary font-sans text-xs uppercase tracking-[0.1em] px-6 py-3 hover:border-amber/50 hover:text-amber transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
