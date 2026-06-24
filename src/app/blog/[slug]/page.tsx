import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MiaChatbot from "@/components/MiaChatbot";

const blogPosts: Record<string, { title: string; category: string; date: string; description: string; content: string[] }> = {
  "how-to-book-taxi-oshakati": {
    title: "Book a Taxi in Oshakati",
    category: "Guide",
    date: "June 2026",
    description: "A practical guide to booking taxi rides across Oshakati, Ongwediva, and Ondangwa with Malu Investment via WhatsApp.",
    content: [
      "Getting around northern Namibia just got easier. If you're in Oshakati, Ongwediva, or Ondangwa and need a reliable ride, here's everything you need to know about booking with Malu Investment.",
      "The simplest way to book is through WhatsApp. Save our number, +264 81 211 1920, and send us a message anytime. We operate 24/7, so whether it's a 5 AM airport run or a late-night ride home, we're available. Just tell us your pickup location and where you're going, and we'll confirm your ride within minutes.",
      "Our MI-WAY dispatch system ensures the nearest available driver is assigned to you. This means shorter wait times and more reliable service. Every ride is tracked, every driver is vetted, and every trip is logged for accountability.",
      "We cover the full northern corridor: Oshakati to Ongwediva (approximately 10 minutes), Oshakati to Ondangwa (approximately 30 minutes), and everywhere in between. We also serve surrounding areas and can arrange longer trips on request.",
      "Pricing is fair and distance-based. No surge pricing, no hidden fees. When you book, we'll give you an upfront estimate so there are no surprises. For regular riders, ask about our community group on WhatsApp for updates and occasional promotions.",
      "Tips for the best experience: Book 15-30 minutes ahead during peak hours (morning commute, Friday evenings). Have your exact pickup location ready. Save our number in your phone for quick access. Join our WhatsApp community for real-time updates."
    ],
  },
  "mi-way-building-namibia-fleet-app": {
    title: "Building Namibia's Fleet App",
    category: "Tech",
    date: "June 2026",
    description: "From one taxi in Oshakati to a dispatch platform covering three cities. The story behind MI-WAY.",
    content: [
      "MI-WAY started from a simple frustration: when you're running a taxi service across three cities with just a phone and a WhatsApp group, things fall through the cracks. Missed rides, untracked vehicles, no accountability. We needed a system, so we built one.",
      "The core problem was dispatch coordination. When a customer calls for a ride in Ondangwa but all available drivers are in Oshakati, you need to know that instantly, not after 15 minutes of phone calls. MI-WAY's dispatch module matches riders with the nearest available driver in real-time.",
      "Then there's tracking. Every MI-WAY vehicle has GPS tracking built in. As an operator, you can see where every car is, how long a trip should take, and whether a driver is available for the next pickup. For passengers, this means accountability. You know your ride is actually coming.",
      "The fleet management layer handles the operational side: maintenance schedules, driver performance metrics, daily trip logs, and revenue tracking. It's the kind of tool that large fleet operators in Windhoek or Johannesburg have, but built specifically for the realities of operating in northern Namibia.",
      "We're currently in v2.6, still in development, but already handling real rides every day across Oshakati and Ongwediva. The feedback from drivers and passengers has been invaluable. They're the ones shaping what MI-WAY becomes.",
      "The roadmap includes passenger-side booking (currently WhatsApp-based), route optimization, fare estimation, and eventually, a driver app. We're building this one feature at a time, one ride at a time. No rush, no shortcuts. Just reliable software for reliable service."
    ],
  },
  "northern-namibia-open-for-business": {
    title: "Northern Namibia Business Guide",
    category: "Insights",
    date: "June 2026",
    description: "Why Oshakati, Ongwediva, and Ondangwa are becoming the next business frontier in Namibia.",
    content: [
      "For decades, Namibia's economic story has been told from Windhoek southward. But the north is changing fast. Oshakati, Ongwediva, and Ondangwa form a triangle of growing urban centers with a combined population that rivals Windhoek, and they're underserved.",
      "The Oshana and Oshikoto regions are experiencing rapid urbanization. More people are moving to cities for work and education, which means more demand for services: transport, housing, construction, logistics, and professional services of all kinds. The gap between demand and supply is where opportunity lives.",
      "Infrastructure investment is accelerating. New roads, expanded commercial hubs, and growing residential developments are reshaping the landscape. The Oshakati Open Market, the Ongwediva Annual Trade Fair, and the steady growth of small businesses all point to an economy that's diversifying beyond traditional sectors.",
      "For entrepreneurs and service providers, the north offers something the capital can't: less competition and more room to build relationships. When you operate in a community where word-of-mouth is the primary marketing channel, quality service doesn't just retain customers, it multiplies them.",
      "At Malu Investment, we're betting on the north. Not because it's easy. Operating here comes with real challenges, from infrastructure gaps to seasonal demand fluctuations. But the fundamentals are strong: population growth, urbanization, and underserved demand make a strong case for long-term investment.",
      "If you're thinking about expanding north, our advice is simple: start small, be consistent, and invest in relationships. The north rewards patience and reliability. Show up on time, deliver what you promise, and this market will reward you with loyalty that no advertising budget can buy."
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description || post.content[0]?.slice(0, 160) || "",
    openGraph: {
      title: post.title,
      description: post.description || post.content[0]?.slice(0, 160) || "",
      type: "article",
    },
    alternates: { canonical: `https://www.mi-way.org/blog/${slug}` },
  };
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // For static generation, we need to handle this differently
  // Using async params pattern for Next.js 15
  return <BlogPostContent params={params} />;
}

async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main" className="flex-1 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/blog" className="inline-flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-[11px] tracking-[0.12em] text-amber uppercase hover:text-amber-light transition-colors mb-8">
            ← Back to Blog
          </Link>
          <span className="font-[family-name:var(--font-space-grotesk)] text-[9px] tracking-[0.15em] text-amber uppercase font-bold block mb-3">{post.category}</span>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-text-primary leading-[0.95] mb-4">{post.title}</h1>
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-text-muted block mb-8">{post.date}</span>
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="font-[family-name:var(--font-space-grotesk)] text-base text-text-secondary leading-[1.8]">{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 border-t border-base-border pt-8">
            <h2 className="font-display text-xl text-text-primary mb-4">Need a ride? Talk to us.</h2>
            <a
              href="https://wa.me/264812111920?text=Hi+Malu!+I'd+like+to+book+a+ride."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber text-base font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-[0.1em] font-bold px-6 py-3 hover:bg-amber-light transition-colors"
            >
              Book a Ride on WhatsApp →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MiaChatbot />
    </div>
  );
}
