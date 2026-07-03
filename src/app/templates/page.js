import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplatesNav from "@/components/TemplatesNav";

export const metadata = {
  title: "Gaming Banner Templates Directory | GAMINGBANNER",
  description: "Browse 50+ premium gaming banner templates for YouTube, Twitch, Discord, and Twitter. Search by game universe, genre, or style.",
};

export default function TemplatesDirectory() {
  const categories = [
    {
      id: "youtube",
      name: "YouTube Banners",
      dims: "2560 x 1440 px",
      desc: "Channel art with mobile safe-zones",
      href: "/youtube-banners",
      color: "border-[#ef4444]",
    },
    {
      id: "twitch",
      name: "Twitch Offline Screens",
      dims: "1200 x 480 px",
      desc: "Offline layouts & starting soon screens",
      href: "/twitch-banners",
      color: "border-[#a855f7]",
    },
    {
      id: "discord",
      name: "Discord Server Banners",
      dims: "960 x 540 px",
      desc: "Server backgrounds & community covers",
      href: "/discord-banners",
      color: "border-[#5865f2]",
    },
    {
      id: "twitter",
      name: "Twitter/X Headers",
      dims: "1500 x 500 px",
      desc: "Profile headers with avatar spacing",
      href: "/twitter-headers",
      color: "border-[#0ea5e9]",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gamingbanner.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Templates",
        "item": "https://gamingbanner.com/templates"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 min-h-screen py-24 px-md md:px-xl w-full max-w-[1440px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-background">
            Gaming Banner Templates Directory
          </h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Select your target platform below to view our game-inspired banner layouts, customize your gaming tags, and export watermark-free high-res files instantly.
          </p>
        </section>

        {/* Catalog Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {categories.map((cat, idx) => (
            <div key={idx} className={`bento-card p-lg bg-surface-container border-t-4 ${cat.color} rounded-xl shadow-lg flex flex-col justify-between h-56 transition-all hover:scale-[1.02]`}>
              <div>
                <span className="text-xs text-outline/80 font-data-mono font-bold uppercase">{cat.dims}</span>
                <h2 className="text-xl font-bold text-on-background mt-xs">{cat.name}</h2>
                <p className="text-xs text-outline mt-2 leading-relaxed">{cat.desc}</p>
              </div>
              <Link
                href={cat.href}
                className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-bold text-xs py-2.5 rounded transition-all block"
              >
                Browse Templates
              </Link>
            </div>
          ))}
        </section>

        {/* Informational specs section */}
        <section className="max-w-[800px] mx-auto w-full py-lg border-t border-outline-variant/65 flex flex-col gap-lg mt-lg">
          <div className="border-l-4 border-primary-container pl-lg">
            <h2 className="text-xl font-bold text-on-background">Why Choose GamingBanner?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md text-sm text-outline leading-relaxed">
            <p>
              Branding is key to growing your channel. Whether you stream on YouTube, Twitch, or host a Discord server community, having a coordinated cover banner builds trust, credibility, and authority instantly.
            </p>
            <p>
              GamingBanner gives you instant template access matching the exact sizing specifications. No software installs, Photoshop files, or advanced graphic editing skills required. Just pick a theme, type your name, and edit colors to match your brand style.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
