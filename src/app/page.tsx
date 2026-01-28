"use client";

import { useEffect, useState, useRef } from "react";

export default function LandingPage() {
  const LINE_URL = process.env.NEXT_PUBLIC_LINE_URL ?? "#";
  const HP_URL = "https://demico-relax.com";
  const [shown, setShown] = useState(false);

  // Intersection Observer for scroll animations
  const useInView = (threshold = 0.1) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
  };

  const section2 = useInView(0.2);
  const method01 = useInView(0.3);
  const method02 = useInView(0.3);
  const method03 = useInView(0.3);
  const method04 = useInView(0.3);
  const concept = useInView(0.3);
  const pricing = useInView(0.2);
  const footer = useInView(0.3);

  useEffect(() => {
    const timer = setTimeout(() => setShown(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DaySpa",
            "name": "DemiCo Relax",
            "description": "大阪・南森町の完全予約制プライベートサロン。世界基準のハマム温熱療法と医療由来リンパドレナージュ（MLD）で、回復できる身体をつくります。",
            "url": "https://demico-relax.com",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "天神橋1-11-3 アクアスイート南森町202",
              "addressLocality": "大阪市北区",
              "addressRegion": "大阪府",
              "postalCode": "530-0041",
              "addressCountry": "JP"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.6937,
              "longitude": 135.5146
            },
            "openingHours": "Mo-Su 08:00-22:00",
            "priceRange": "¥¥¥",
            "image": "https://demico-relax.com/demilp10.jpg",
            "sameAs": [
              "https://www.instagram.com/demico_relax/"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "トリートメントメニュー",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ハマム温活＆本格アロマリンパボディ",
                    "description": "世界基準のハマム温熱療法と医療由来MLDを組み合わせた90分のシグネチャーコース"
                  },
                  "price": "17000",
                  "priceCurrency": "JPY"
                }
              ]
            }
          })
        }}
      />

      {/* メインコンテナ - 横スクロール防止 */}
      <main className={`w-full overflow-x-hidden transition-opacity duration-1000 ${shown ? "opacity-100" : "opacity-0"}`}>

        {/* ===== 1枚目：HERO ===== */}
        <section className="relative h-screen min-h-[600px] md:min-h-[700px] lg:min-h-[800px]" aria-label="ヒーローセクション">
          {/* 背景画像 - 画面幅100% */}
          <div className="absolute inset-0">
            <img
              src="/demilp10.jpg"
              alt="DemiCo Relax フェイシャルトリートメントの様子"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-60% to-black/95" />
          </div>

          {/* コンテンツ - 左寄せ */}
          <div className="relative h-full w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="h-full flex flex-col justify-end pb-36 md:pb-44 lg:pb-48">
              <div className="[text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)] max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.5em] text-white/80 mb-3 md:mb-4 animate-fade-in-up">
                  PRIVATE SALON
                </p>
                <h1 className="font-serif-jp text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[58px] text-white tracking-wider mb-4 md:mb-6 leading-[1.4] animate-fade-in-up animation-delay-200">
                  癒しを超えて、<br />
                  <span className="text-[#e8d4a8]">整う</span>という考え方
                </h1>
                <p className="text-[13px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-white/70 leading-[1.9] md:leading-[2.0] animate-fade-in-up animation-delay-300 mb-8 md:mb-10">
                  世界基準のハマム温熱 × 医療由来リンパMLD<br />
                  × 最高級未精製アルガンオイル × 良質な精油<br />
                  回復できる身体を、根本からつくる
                </p>
              </div>
            </div>
          </div>

          {/* ロゴ + スクロールインジケーター - セクション間に中央配置 */}
          <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float">
            <img
              src="/rogo.png"
              alt="DemiCo Relax"
              className="w-28 md:w-36 lg:w-44 xl:w-52 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
            <svg className="w-5 h-5 mt-1 opacity-80" fill="none" viewBox="0 0 24 24" stroke="#c9a86c">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </section>

        {/* ===== 2枚目：フルイメージ + テクニック ===== */}
        <section className="relative" aria-label="トリートメント技術紹介">
          {/* 背景画像 - 画面幅100%、高さは内容に合わせる */}
          <div className="relative w-full min-h-screen lg:h-screen">
            {/* 背景画像を絶対配置で全画面に */}
            <div className="absolute inset-0">
              <img
                src="/demilp11.jpg"
                alt="DemiCo Relax サロンイメージ"
                className="w-full h-full object-cover"
              />
              {/* 暗幕オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/30 via-20% to-black/50 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent" />
            </div>

            {/* モバイル/タブレット用レイアウト */}
            <div className="lg:hidden relative w-full max-w-[1400px] mx-auto min-h-screen [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)] flex flex-col justify-evenly py-16 md:py-20 px-5 md:px-8 gap-12 md:gap-16">

              {/* セクション1: すべてに、理由がある。 */}
              <div
                ref={section2.ref}
                className={`text-center transition-all duration-[4000ms] ${
                  section2.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-[11px] md:text-[13px] tracking-[0.5em] text-white/90 mb-2 md:mb-3">THE METHODOLOGY</p>
                <h2 className="font-serif-jp text-[24px] md:text-[32px] text-white leading-[1.5] font-medium">
                  すべてに、<br className="md:hidden" />理由がある。
                </h2>
              </div>

              {/* 01〜04 縦積み */}
              <div className="w-full flex flex-col gap-10 md:gap-12">

                {/* 01 温める */}
                <div
                  ref={method01.ref}
                  className={`flex items-start gap-4 md:gap-5 transition-all duration-[3500ms] ${
                    method01.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="w-[80px] md:w-[100px] flex-shrink-0">
                    <div
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                      }}
                    >
                      <img src="/riraku2.jpg" alt="ハマム" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[20px] md:text-[24px] font-extralight text-white">01</span>
                      <span className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#e8d4a8]">HAMAM</span>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-white/70">トルコ発祥・世界基準の温熱療法</p>
                    <h3 className="font-serif-jp text-[14px] md:text-[16px] text-white my-1">温める</h3>
                    <p className="text-[11px] md:text-[12px] text-white/80 leading-[1.7]">
                      冷えや緊張で滞った体を、ハマムの高温多湿スチームでやさしくゆるめ、血管・リンパ・自律神経が「流れ出せる状態」へ整える土台工程です。
                    </p>
                  </div>
                </div>

                {/* 02 流す */}
                <div
                  ref={method02.ref}
                  className={`flex items-start gap-4 md:gap-5 flex-row-reverse transition-all duration-[3500ms] ${
                    method02.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                >
                  <div className="w-[80px] md:w-[100px] flex-shrink-0">
                    <div
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                      }}
                    >
                      <img src="/shijutsu.jpg" alt="MLD" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-right">
                    <div className="flex items-baseline gap-2 justify-end">
                      <span className="text-[20px] md:text-[24px] font-extralight text-white">02</span>
                      <span className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#e8d4a8]">MLD</span>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-white/70">1930年Vodder式・医療由来リンパ技術</p>
                    <h3 className="font-serif-jp text-[14px] md:text-[16px] text-white my-1">流す</h3>
                    <p className="text-[11px] md:text-[12px] text-white/80 leading-[1.7]">
                      リンパは強い圧では流れず、医療由来のMLDは皮膚へのごく軽い刺激でリンパの生理的な動きを呼び起こし、出口から自然な排出を促す手技です。
                    </p>
                  </div>
                </div>

                {/* 03 届ける */}
                <div
                  ref={method03.ref}
                  className={`flex items-start gap-4 md:gap-5 transition-all duration-[3500ms] ${
                    method03.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                >
                  <div className="w-[80px] md:w-[100px] flex-shrink-0">
                    <div
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                      }}
                    >
                      <img src="/arugan.png" alt="アルガン" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[20px] md:text-[24px] font-extralight text-white">03</span>
                      <span className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#e8d4a8]">ARGAN</span>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-white/70">モロッコ産・最高級未精製アルガンオイル</p>
                    <h3 className="font-serif-jp text-[14px] md:text-[16px] text-white my-1">届ける</h3>
                    <p className="text-[11px] md:text-[12px] text-white/80 leading-[1.7]">
                      未精製の生アルガンオイルは皮脂に近く肌に残らず深部に浸透するため、皮膚だけを正確に動かすことでMLDの繊細な手技を最大限に活かすことができます。
                    </p>
                  </div>
                </div>

                {/* 04 調律する */}
                <div
                  ref={method04.ref}
                  className={`flex items-start gap-4 md:gap-5 flex-row-reverse transition-all duration-[3500ms] ${
                    method04.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                >
                  <div className="w-[80px] md:w-[100px] flex-shrink-0">
                    <div
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                      }}
                    >
                      <img src="/seiyu1.jpg" alt="精油" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-right">
                    <div className="flex items-baseline gap-2 justify-end">
                      <span className="text-[20px] md:text-[24px] font-extralight text-white">04</span>
                      <span className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#e8d4a8]">AROMA</span>
                    </div>
                    <p className="text-[10px] md:text-[11px] text-white/70">大脳辺縁系へ届くオーダー精油</p>
                    <h3 className="font-serif-jp text-[14px] md:text-[16px] text-white my-1">調律する</h3>
                    <p className="text-[11px] md:text-[12px] text-white/80 leading-[1.7]">
                      精油は香りによって脳と自律神経に直接働きかけ、皮膚からも全身へ巡るため、その日の状態に合わせたブレンドが呼吸・神経・リンパの反応を整えます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PC用レイアウト - 左にタイトル＋コンテンツ、右は背景を活かす */}
            <div className="hidden lg:flex relative h-full w-full max-w-[1800px] mx-auto [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)]">

              {/* 左側コンテンツエリア - 40% */}
              <div className="w-[45%] xl:w-[40%] h-full flex flex-col justify-center py-16 xl:py-20 pl-12 xl:pl-20 2xl:pl-28 pr-8">

                {/* タイトル */}
                <div
                  ref={section2.ref}
                  className={`mb-16 xl:mb-20 transition-all duration-[4000ms] ${
                    section2.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-[13px] xl:text-[14px] tracking-[0.5em] text-white/90 mb-3">THE METHODOLOGY</p>
                  <h2 className="font-serif-jp text-[36px] xl:text-[44px] 2xl:text-[52px] text-white leading-[1.4] font-medium">
                    すべてに、<br />理由がある。
                  </h2>
                </div>

                {/* 01〜04 縦積み */}
                <div className="flex flex-col gap-10 xl:gap-12">

                  {/* 01 */}
                  <div
                    ref={method01.ref}
                    className={`flex items-center gap-5 xl:gap-6 transition-all duration-[3500ms] ${
                      method01.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                  >
                    <div
                      className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.25), 0 0 20px 15px rgba(255,255,255,0.1)",
                      }}
                    >
                      <img src="/riraku2.jpg" alt="ハマム" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[28px] xl:text-[32px] font-extralight text-white">01</span>
                        <span className="text-[11px] xl:text-[12px] tracking-[0.2em] text-[#e8d4a8]">HAMAM</span>
                        <span className="font-serif-jp text-[16px] xl:text-[18px] text-white ml-2">温める</span>
                      </div>
                      <p className="text-[12px] xl:text-[13px] text-white/70 leading-[1.8]">
                        ハマムの高温多湿スチームで体をゆるめ、流れ出せる状態へ。
                      </p>
                    </div>
                  </div>

                  {/* 02 */}
                  <div
                    ref={method02.ref}
                    className={`flex items-center gap-5 xl:gap-6 transition-all duration-[3500ms] ${
                      method02.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                  >
                    <div
                      className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.25), 0 0 20px 15px rgba(255,255,255,0.1)",
                      }}
                    >
                      <img src="/shijutsu.jpg" alt="MLD" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[28px] xl:text-[32px] font-extralight text-white">02</span>
                        <span className="text-[11px] xl:text-[12px] tracking-[0.2em] text-[#e8d4a8]">MLD</span>
                        <span className="font-serif-jp text-[16px] xl:text-[18px] text-white ml-2">流す</span>
                      </div>
                      <p className="text-[12px] xl:text-[13px] text-white/70 leading-[1.8]">
                        医療由来の繊細な手技でリンパの自然な排出を促す。
                      </p>
                    </div>
                  </div>

                  {/* 03 */}
                  <div
                    ref={method03.ref}
                    className={`flex items-center gap-5 xl:gap-6 transition-all duration-[3500ms] ${
                      method03.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                  >
                    <div
                      className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.25), 0 0 20px 15px rgba(255,255,255,0.1)",
                      }}
                    >
                      <img src="/arugan.png" alt="アルガン" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[28px] xl:text-[32px] font-extralight text-white">03</span>
                        <span className="text-[11px] xl:text-[12px] tracking-[0.2em] text-[#e8d4a8]">ARGAN</span>
                        <span className="font-serif-jp text-[16px] xl:text-[18px] text-white ml-2">届ける</span>
                      </div>
                      <p className="text-[12px] xl:text-[13px] text-white/70 leading-[1.8]">
                        未精製アルガンオイルが深部に浸透し手技を最大化。
                      </p>
                    </div>
                  </div>

                  {/* 04 */}
                  <div
                    ref={method04.ref}
                    className={`flex items-center gap-5 xl:gap-6 transition-all duration-[3500ms] ${
                      method04.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                  >
                    <div
                      className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden flex-shrink-0"
                      style={{
                        boxShadow: "0 0 10px 8px rgba(255,255,255,0.25), 0 0 20px 15px rgba(255,255,255,0.1)",
                      }}
                    >
                      <img src="/seiyu1.jpg" alt="精油" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[28px] xl:text-[32px] font-extralight text-white">04</span>
                        <span className="text-[11px] xl:text-[12px] tracking-[0.2em] text-[#e8d4a8]">AROMA</span>
                        <span className="font-serif-jp text-[16px] xl:text-[18px] text-white ml-2">調律する</span>
                      </div>
                      <p className="text-[12px] xl:text-[13px] text-white/70 leading-[1.8]">
                        オーダー精油が脳と自律神経に働きかけ全身を整える。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側 - 背景画像を見せるための空白エリア */}
              <div className="flex-1" />
            </div>
          </div>
        </section>

        {/* ===== 3枚目：コンセプト + 料金 + フッター ===== */}
        <section className="relative" aria-label="コンセプトと料金">
          <div className="relative w-full min-h-screen bg-[#1a1612]">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            <div className="relative w-full max-w-[1400px] mx-auto min-h-screen [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)] flex flex-col justify-evenly py-16 md:py-20 lg:py-28 xl:py-32 px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

              {/* セクション3: 4つの技術が重なり */}
              <div
                ref={concept.ref}
                className={`text-center transition-all duration-[4000ms] ${
                  concept.isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <p className="font-serif-jp text-[18px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-white leading-[1.8]">
                  4つの技術が重なり<br />
                  身体は「回復できる状態」へ戻る
                </p>
              </div>

              {/* セクション4: ハマム温活＆本格アロマリンパ */}
              <div
                id="trial"
                ref={pricing.ref}
                className={`transition-all duration-[4000ms] ${
                  pricing.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div className="max-w-[320px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px] mx-auto">
                  <article className="relative text-center">
                    <div className="flex items-center justify-center gap-4 mb-3 md:mb-4 lg:mb-5">
                      <div className="w-10 md:w-16 lg:w-20 h-px bg-white/50" />
                      <span className="text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] tracking-[0.5em] text-white/80">FIRST TRIAL</span>
                      <div className="w-10 md:w-16 lg:w-20 h-px bg-white/50" />
                    </div>

                    <h3 className="font-serif-jp text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-white mb-2 md:mb-3 tracking-wide">
                      ハマム温活 & 本格アロマリンパ
                    </h3>
                    <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-white/70 mb-3 md:mb-4 lg:mb-5 tracking-widest">
                      90min ― counseling included
                    </p>

                    <div className="mb-4 md:mb-6 lg:mb-8">
                      <span className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-extralight text-white tracking-wider">¥17,000</span>
                      <span className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-white/60 ml-2">tax in</span>
                    </div>

                                      </article>
                </div>
              </div>

              {/* セクション5: DemiCo Relax */}
              <div
                ref={footer.ref}
                className={`transition-all duration-[4000ms] ${
                  footer.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="max-w-[320px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[560px] mx-auto text-center">
                  <p className="font-serif-jp text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-white tracking-[0.15em] mb-2 md:mb-3 lg:mb-4">DemiCo Relax Aromatherapy</p>
                  <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-white/70 mb-4 md:mb-6 lg:mb-8 tracking-widest">
                    南森町 徒歩3分｜8:00-22:00｜完全予約制｜女性専用
                  </p>

                  <div className="flex gap-3 md:gap-4 lg:gap-5 [text-shadow:none]">
                    <a
                      href={LINE_URL}
                      className="flex-1 py-3 md:py-4 lg:py-5 border border-white/50 text-white text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-[#2a2a2a] min-h-[48px] md:min-h-[56px] flex items-center justify-center"
                    >
                      LINE予約
                    </a>
                    <a
                      href={HP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 md:py-4 lg:py-5 border border-white/50 text-white text-[11px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-[#2a2a2a] min-h-[48px] md:min-h-[56px] flex items-center justify-center"
                    >
                      HOMEPAGE
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
