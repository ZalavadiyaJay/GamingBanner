import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blogPostsContent = {
    "best-youtube-banner-ideas-2025": {
      title: "Top 10 YouTube Gaming Banner Ideas for 2025",
      desc: "Discover the best YouTube gaming banner ideas and design templates to brand your channel in 2025. Level up your gaming identity today."
    },
    "how-to-grow-your-gaming-channel": {
      title: "How to Grow Your Gaming Channel in 2025: Definitive Guide",
      desc: "Proven strategies and tips to grow your gaming channel this year. Learn how banner art, SEO titles, and layout design drive subscribers."
    },
    "free-vs-paid-banner-makers": {
      title: "Free vs Paid Banner Makers: Which is Best for Gamers?",
      desc: "A detailed comparison of free banner tools versus professional graphic design. Find the best solution for your gaming channel header."
    }
  };
  const post = blogPostsContent[id] || { title: "Gaming Blog", desc: "Tips, tutorials, and inspiration for gaming graphic design and brand identity." };
  return {
    title: `${post.title} | GAMINGBANNER`,
    description: post.desc,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;

  // Blog content data
  const blogPostsContent = {
    "best-youtube-banner-ideas-2025": {
      title: "Top 10 YouTube Gaming Banner Ideas for 2025",
      date: "June 28, 2025",
      readTime: "5 min read",
      category: "Design",
      body: (
        <article className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Branding your channel is key to capturing subscribers. In 2025, esports grids, glowing cyan particles, and deep neon palettes dominate channel art aesthetics.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. The Neon Esports Vibe
          </h2>
          <p>
            Vibrant glowing borders, dark carbon textures, and Orbitron font layouts. Perfect for competitive shooter streams and Valorant or Apex legends content.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Minimalist Metallic Sleek
          </h2>
          <p>
            Minimalist layouts using dark gray gradients, clean white sans-serif types, and central focus points. Ideal for tech review hosts and high-end gamers.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            3. The Fantasy Guild Layout
          </h2>
          <p>
            Gold runic lines, medieval parchment papers, and serif fonts. Brings immersive fantasy and RPG elements straight onto your Twitch channel profile.
          </p>
        </article>
      ),
    },
    "how-to-grow-your-gaming-channel": {
      title: "How to Grow Your Gaming Channel: 5 Creator Tips",
      date: "June 15, 2025",
      readTime: "7 min read",
      category: "Growth",
      body: (
        <article className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Scaling a gaming channel takes consistency and design polish. Here are five simple rules to grow your subscriber counts.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. Optimize Channel Graphics
          </h2>
          <p>
            A high-quality custom banner immediately tells viewers your stream is professional. Keep important social handles centered inside the mobile safe-zone crop area.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Focus on Video CTR
          </h2>
          <p>
            Custom thumbnail colors should match the channel banner palette to build consistent visual branding.
          </p>
        </article>
      ),
    },
    "free-vs-paid-banner-makers": {
      title: "Free vs Paid Banner Makers: Which is Best?",
      date: "May 30, 2025",
      readTime: "4 min read",
      category: "Branding",
      body: (
        <article className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Many creators ask if paid Photoshop suites are worth the investment compared to free banner template platforms.
          </p>
          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            The Case for Free Template Tools
          </h2>
          <p>
            Online customizers provide rapid, calibrated dimensions matching safe-zones out of the box. No software install is required, and download output is completely watermark-free.
          </p>
        </article>
      ),
    },
  };

  const currentPost = blogPostsContent[id] || {
    title: "Article Not Found",
    date: "N/A",
    readTime: "N/A",
    category: "Branding",
    body: <p>We could not find the blog article you are looking for.</p>,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": currentPost.title,
    "datePublished": "2025-06-28T08:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "GamingBanner Design Team",
      "url": "https://gamingbanner.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GAMINGBANNER"
    },
    "description": currentPost.title
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[800px] mx-auto flex flex-col gap-lg">
        {/* Breadcrumb */}
        <div className="text-xs text-outline/80 font-data-mono">
          <Link href="/" className="hover:text-on-background">Home</Link> &gt;{" "}
          <Link href="/blog" className="hover:text-on-background">Blog</Link> &gt;{" "}
          <span className="text-primary-container">{id}</span>
        </div>

        {/* Title Block */}
        <header className="border-b border-outline-variant/65 pb-sm">
          <span className="text-xs bg-primary-container/10 border border-primary-container/30 px-2 py-0.5 rounded text-primary-container font-data-mono uppercase tracking-wider">
            {currentPost.category}
          </span>
          <h1 className="text-3xl font-extrabold text-on-background mt-xs leading-tight">
            {currentPost.title}
          </h1>
          <div className="flex items-center gap-sm text-xs text-outline/70 font-data-mono mt-xs">
            <span>By GamingBanner Design Team</span>
            <span>&bull;</span>
            <span>{currentPost.date}</span>
            <span>&bull;</span>
            <span>{currentPost.readTime}</span>
          </div>
        </header>

        {/* Article Body */}
        <section className="bg-surface-container/60 border border-outline-variant/50 p-lg rounded-xl shadow-lg">
          {currentPost.body}
        </section>

        {/* CTA */}
        <section className="bg-surface-container-high border border-outline-variant/60 rounded-xl p-lg text-center flex flex-col items-center gap-sm mt-md">
          <h3 className="font-bold text-on-background text-lg">Ready to Level Up Your Branding?</h3>
          <p className="text-xs text-outline">Create a custom channel art using our responsive templates catalog.</p>
          <Link
            href="/youtube-banners"
            className="bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-extrabold text-xs px-lg py-2.5 rounded transition-all block w-full max-w-[240px] mt-2 shadow shadow-primary-container/20"
          >
            Browse Free Templates
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
