import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplatesNav from "@/components/TemplatesNav";

export const metadata = {
  title: "Discord Server Banner Maker & Profile Banners | GAMINGBANNER",
  description: "Make professional Discord server banners and profile headers. Choose from active community, clan, and cyberpunk themes optimized for Discord.",
};

export default function DiscordBanners() {

  const templates = [
    { id: "discord-blurple", name: "Discord Blurple", category: "Neon", desc: "Signature blurple gradient with gamer grid lines", style: { background: "radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%), linear-gradient(135deg, #5865f2 0%, #1e1b4b 100%)" } },
    { id: "neon-server", name: "Neon Server", category: "Neon", desc: "Cyan and pink neon light sticks backdrop", style: { background: "radial-gradient(circle at 100% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 70%), linear-gradient(135deg, #09090b 0%, #1f1a3a 100%)", textShadow: "0 0 16px rgba(0, 212, 255, 0.6)" } },
    { id: "anime-guild", name: "Anime Guild", category: "Anime", desc: "Warm orange clouds sketch style", style: { background: "linear-gradient(to top, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.2)), linear-gradient(180deg, #ea580c 0%, #311005 100%)", color: "#f97316" } },
    { id: "gaming-clan", name: "Gaming Clan", category: "Esports", desc: "Brushed metal texture with cyan glows", style: { background: "radial-gradient(circle at 90% 90%, rgba(0, 212, 255, 0.12) 0%, transparent 60%), linear-gradient(135deg, #1e293b 0%, #030712 100%)", color: "#00d4ff" } },
    { id: "roleplay-kingdom", name: "Roleplay Kingdom", category: "Retro", desc: "Gilded parchment borders for medieval servers", style: { background: "radial-gradient(circle at 50% 50%, rgba(180, 83, 9, 0.1) 0%, transparent 70%), linear-gradient(135deg, #3b0764 0%, #030712 100%)", color: "#dfc8a5" } },
    { id: "music-bot", name: "Music Bot Hub", category: "Minimalist", desc: "Music waves and sound particles mockup", style: { background: "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 60%), linear-gradient(135deg, #09090b 0%, #020617 100%)" } },
    { id: "community-portal", name: "Community Portal", category: "Dark", desc: "Deep navy matrix code background overlay", style: { background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)", border: "1px solid rgba(255,255,255,0.05)" } },
  ];



  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen py-24 px-md md:px-xl w-full max-w-[1440px] mx-auto flex flex-col gap-xl overflow-x-hidden">
        <TemplatesNav activeTab="discord" />

        {/* Page Hero */}
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-on-background">
            Free Discord Server Banner Templates
          </h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            Design eye-catching Discord server banners and profile banners. Server banners at 960 x 540, profile banners at 680 x 240.
          </p>


        </section>

        {/* Template Catalog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {templates.map((template, idx) => (
            <div key={idx} className="bento-card overflow-hidden rounded-xl shadow-lg border-outline-variant/50">
              <div className="aspect-video relative flex items-center justify-end font-gamertag uppercase p-lg overflow-hidden pr-[8%]" style={{ ...template.style, containerType: "inline-size" }}>
                {/* Simulated Discord Server Icon */}
                <div className="absolute bottom-[6%] left-[6%] w-[18%] aspect-square rounded-[18%] bg-surface-container-high border border-outline-variant/50 flex items-center justify-center text-[2.5cqw] font-bold text-outline font-sans select-none shadow-lg">
                  DS
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="font-black tracking-wide leading-none" style={{ fontSize: "clamp(12px, 6.5cqw, 22px)" }}>YOUR COMMUNITY</span>
                  <span className="tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded mt-xs font-sans normal-case font-bold leading-none" style={{ fontSize: "clamp(5px, 2.2cqw, 9px)" }}>
                    Discord Server Active
                  </span>
                </div>
              </div>
              <div className="p-lg bg-surface-container-high flex flex-col justify-between h-40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-background">{template.name}</span>
                  </div>
                  <p className="text-xs text-outline mt-1">{template.desc}</p>
                </div>

                <Link
                  href={`/customize/${template.id}`}
                  className="w-full bg-primary-container hover:bg-primary-container/90 text-on-primary-container text-center font-bold text-xs py-2.5 rounded transition-all block mt-md"
                >
                  Customize & Download
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Size Guide & Upload specs */}
        <section className="max-w-[800px] mx-auto w-full py-lg border-t border-outline-variant/65 flex flex-col gap-lg">
          <div className="border-l-4 border-primary-container pl-lg">
            <h2 className="text-2xl font-bold text-on-background">Discord Banner Size Guide</h2>
            <p className="text-sm text-outline mt-1 leading-relaxed">
              Discord supports Server Banners (available at Level 2 Boosts) and user Profile Banners (requires Discord Nitro). Safe margins are vital to prevent overlay crops from server icons.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
