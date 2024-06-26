const CONFIG = {
  // profile setting (required)
  profile: {
    name: "goosull",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "love myself",
    bio: "I'm finding what I should do",
    email: "2060won@naver.com",
    linkedin: "",
    github: "",
    instagram: "goo__sull",
  },
  projects: [
    {
      name: `musinsa snap`,
      href: "https://www.musinsa.com/snap/profile/f14e78bef7d8028c6f0fe8cfee9920d5",
    },
  ],

  // blog setting (required)
  blog: {
    title: "goosullog",
    description: "welcome to goosullog!",
  },

  // CONFIG configration (required)
  link: "https://goosullog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "G-XNJ8QCENCT",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "J1M-uuT5V0_cHp-LXnGMVw4BShJt3tmrRDLPUUj9XTM",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "077b8285923fea7f4afdedfed9f8d8ccfd279690",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "goosull/comments",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
