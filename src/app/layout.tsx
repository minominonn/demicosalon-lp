import "./globals.css";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import type { Metadata, Viewport } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1A0F12",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://demico-relax.com"),
  title: "DemiCo Relax｜大阪・南森町のハマム&リンパドレナージュ専門サロン【初回¥17,000】",
  description: "大阪・南森町駅徒歩3分。世界基準のハマム温熱療法×医療由来Vodder式リンパドレナージュ（MLD）×モロッコ産未精製アルガンオイル。4つの技術で「回復できる身体」をつくる完全予約制プライベートサロン。初回体験150分¥17,000。",
  keywords: [
    "大阪 ハマム",
    "南森町 リンパマッサージ",
    "大阪 リンパドレナージュ",
    "MLD マッサージ 大阪",
    "Vodder式 リンパ",
    "アルガンオイル トリートメント",
    "プライベートサロン 大阪",
    "完全予約制 エステ",
    "女性専用サロン 大阪",
    "温活 サロン",
    "デトックス 大阪",
    "むくみ解消 大阪",
    "冷え性改善 サロン",
    "アロマトリートメント 大阪",
    "南森町 エステ",
  ],
  authors: [{ name: "DemiCo Relax" }],
  creator: "DemiCo Relax",
  publisher: "DemiCo Relax",
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: false,
  },
  openGraph: {
    title: "DemiCo Relax｜大阪・南森町のハマム&リンパドレナージュ専門サロン",
    description: "世界基準のハマム温熱療法×医療由来Vodder式MLD×未精製アルガンオイル。4つの技術で「回復できる身体」をつくる。初回体験150分¥17,000。",
    url: "https://demico-relax.com/lp",
    siteName: "DemiCo Relax - 大阪・南森町のプライベートサロン",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/demilp10.jpg",
        width: 1200,
        height: 630,
        alt: "DemiCo Relax - フェイシャルトリートメント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DemiCo Relax｜大阪・南森町のハマム&リンパドレナージュ専門サロン",
    description: "世界基準のハマム×医療由来MLD×未精製アルガン。初回体験150分¥17,000。完全予約制・女性専用。",
    images: ["/demilp10.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://demico-relax.com/lp",
  },
  category: "beauty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Additional SEO meta tags for LLMO */}
        <meta name="geo.region" content="JP-27" />
        <meta name="geo.placename" content="大阪市北区" />
        <meta name="geo.position" content="34.6937;135.5146" />
        <meta name="ICBM" content="34.6937, 135.5146" />
      </head>
      <body className={`${cormorant.variable} ${notoSerifJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
