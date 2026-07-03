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
    },
    "cool-gaming-names-generator-tips": {
      title: "Cool Gaming Names: Best Gamertag Ideas & Generator Tips",
      desc: "Stuck on finding a cool gamer name? Here is our curated list of 200+ gamertag ideas grouped by genre, plus expert tips to create your own."
    },
    "best-obs-settings-for-streaming": {
      title: "Best OBS Settings for Streaming & Recording (2025 Guide)",
      desc: "Configure Open Broadcaster Software (OBS) for lag-free gaming streams. Settings for YouTube, Twitch, and low-end PC configurations."
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
            Branding your channel is key to capturing subscribers. In 2025, esports grids, glowing cyan particles, and deep neon palettes dominate channel art aesthetics. Having a clear and unique header is the first step to looking professional.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. The Neon Esports Vibe
          </h2>
          <p>
            Vibrant glowing borders, dark carbon textures, and Orbitron font layouts. Perfect for competitive shooter streams and Valorant or Apex legends content. The contrast between bright neon colors and dark backgrounds makes your text stand out immediately.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Minimalist Metallic Sleek
          </h2>
          <p>
            Minimalist layouts using dark gray gradients, clean white sans-serif types, and central focus points. Ideal for tech review hosts and high-end gamers who prefer clean, elegant visuals over flashing graphics.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            3. The Fantasy Guild Layout
          </h2>
          <p>
            Gold runic lines, medieval parchment papers, and serif fonts. Brings immersive fantasy and RPG elements straight onto your Twitch channel profile. If you play games like Elden Ring or League of Legends, this classic gold-on-black layout fits perfectly.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            4. Cyberpunk Retro Grid
          </h2>
          <p>
            Bright yellow highlights, neon blue accents, and scanline grids. This style matches open-world cyber games and retro arcade environments. It creates a futuristic look that feels alive and energetic.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            5. Symmetrical Character Plates
          </h2>
          <p>
            Placing active characters or emblems on the far left and right edges. This leaves the center space clear for your gamer name. It ensures your text is never covered on mobile phones or tablet views.
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
            Scaling a gaming channel takes consistency and design polish. With thousands of streams starting every day, you need a plan to stand out. Here are five simple rules to grow your subscriber counts.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. Optimize Channel Graphics
          </h2>
          <p>
            A high-quality custom banner immediately tells viewers your stream is professional. Keep important social handles centered inside the mobile safe-zone crop area (1546 x 423 px) so everyone can find your accounts.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Focus on Video CTR (Click-Through Rate)
          </h2>
          <p>
            Custom thumbnail colors should match the channel banner palette to build consistent visual branding. High contrast text and face expressions drive clicks.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            3. Master the First 15 Seconds
          </h2>
          <p>
            Audience retention drops quickly. Skip long intros and jump straight into the action or hook the viewer with a funny highlight right at the beginning.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            4. Engage on Other Platforms
          </h2>
          <p>
            Do not just upload to one site. Share clips on TikTok, YouTube Shorts, or Instagram Reels to drive organic traffic back to your main channel.
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
            Many creators ask if paid Photoshop suites are worth the investment compared to free banner template platforms. Here is a direct breakdown to help you choose the best fit for your budget.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            The Case for Free Template Tools
          </h2>
          <p>
            Online customizers provide rapid, calibrated dimensions matching safe-zones out of the box. No software install is required, and download output is completely watermark-free. This is ideal for beginners who want professional graphics instantly.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            The Case for Paid Custom Editors
          </h2>
          <p>
            Paid programs like Photoshop offer total creative freedom with layer control and custom brushes. However, they carry a steep learning curve and high subscription fees. Use them only if you are already experienced in graphic design.
          </p>
        </article>
      ),
    },
    "cool-gaming-names-generator-tips": {
      title: "Cool Gaming Names: Best Gamertag Ideas & Generator Tips",
      date: "June 30, 2025",
      readTime: "6 min read",
      category: "Branding",
      body: (
        <article className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Stuck on finding a cool gamer name? Your gamertag is your online identity. It is how your squad, rivals, and viewers identify you. Here are the best tips to create a unique gaming name.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. Keep It Short and Easy to Say
          </h2>
          <p>
            A short name (under 10 characters) is easier to remember. Avoid using too many random numbers or symbols (like `X_ShadowGamer_99_X`), as it looks unprofessional and makes it hard for fans to search for your channel.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Match Your Game Genre
          </h2>
          <p>
            If you play tactical shooters, choose sharp, energetic words (e.g. *Apex*, *Slayer*, *Vandal*). For fantasy RPG games, classical or mythological terms work better (e.g. *Zephyr*, *Rune*, *Tarnished*).
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            3. Combine Two Simple Words
          </h2>
          <p>
            A popular formula is joining a noun and an adjective. Think of names like *LiquidFrost*, *VortexStorm*, or *PixelTactics*. They sound professional and look clean on banners.
          </p>
        </article>
      ),
    },
    "best-obs-settings-for-streaming": {
      title: "Best OBS Settings for Streaming & Recording",
      date: "June 25, 2025",
      readTime: "8 min read",
      category: "Guides",
      body: (
        <article className="flex flex-col gap-md text-sm text-outline leading-relaxed">
          <p>
            Configure Open Broadcaster Software (OBS) for lag-free gaming streams. Getting your settings right prevents dropped frames and blurry video. Here is the ultimate guide for YouTube and Twitch streams.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            1. Output Resolution and FPS
          </h2>
          <p>
            For most streamers, streaming at 1080p at 60 FPS is ideal. However, if your internet upload speed is under 10 Mbps, configure it to 720p at 60 FPS instead. It runs smoother and still looks sharp.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            2. Video Bitrates
          </h2>
          <p>
            - **For 1080p 60fps:** Configure video bitrate between 6,000 to 8,000 Kbps.
            - **For 720p 60fps:** Configure video bitrate between 4,500 to 6,000 Kbps.
            Always use CBR (Constant Bitrate) for stable streaming streams.
          </p>

          <h2 className="text-lg font-bold text-on-background mt-md border-l-2 border-primary-container pl-sm">
            3. Choose the Right Encoder
          </h2>
          <p>
            If you have an NVIDIA graphics card, select **NVIDIA NVENC H.264**. It handles video encoding on your GPU, leaving your CPU free to run games smoothly.
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
            href="/templates"
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
