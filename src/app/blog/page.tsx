import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

export const metadata = {
  title: "Blog",
  description: "Guides, stories, and insights from Northern Namibia. Practical info for Malu Investment riders and behind-the-scenes looks at MI-WAY.",
  openGraph: {
    title: "Blog, MI-WAY by Malu Investment",
    description: "Insights from Northern Namibia: taxi guides, tech stories, and business tips.",
    type: "website",
  },
  alternates: { canonical: "https://malu-investment-2.vercel.app/blog" },
};

const articles = [
  {
    slug: "how-to-book-taxi-oshakati",
    title: "How to Book a Taxi in Oshakati, Ongwediva & Ondangwa",
    excerpt: "A practical guide to getting around northern Namibia with Malu Investment's taxi service. WhatsApp booking, coverage areas, and what to expect.",
    category: "Guide",
    date: "June 2026",
  },
  {
    slug: "mi-way-building-namibia-fleet-app",
    title: "MI-WAY: How We're Building Namibia's First Local Fleet Management App",
    excerpt: "From one taxi in Oshakati to a dispatch platform covering three cities. The story behind MI-WAY and why we're building it ourselves.",
    category: "Tech",
    date: "June 2026",
  },
  {
    slug: "northern-namibia-open-for-business",
    title: "Northern Namibia is Open for Business, Here's What You Need to Know",
    excerpt: "The north is growing fast. Here's why Oshakati, Ongwediva, and Ondangwa are becoming the next business frontier in Namibia.",
    category: "Insights",
    date: "June 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.2em] text-amber uppercase block mb-3">Blog & Resources</span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-text-primary leading-[0.9] mb-4">INSIGHTS</h1>
          <p className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary max-w-2xl mb-12">
            Guides, stories, and insights from northern Namibia. Practical info for our riders and behind-the-scenes looks at how we operate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-base-card border border-base-border hover:border-amber/20 transition-colors overflow-hidden">
                <div className="bg-amber-muted p-6 border-b border-base-border">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[9px] tracking-[0.15em] text-amber uppercase font-bold">{article.category}</span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl text-text-primary group-hover:text-amber transition-colors mb-3 leading-tight">{article.title}</h2>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-secondary leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] tracking-[0.12em] text-text-muted uppercase">{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
