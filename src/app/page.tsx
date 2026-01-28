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
                    "description": "世界基準のハマム温熱療法と医療由来MLDを組み合わせた150分のシグネチャーコース"
                  },
                  "price": "23000",
                  "priceCurrency": "JPY"
                }
              ]
            }
          })
        }}
      />

      <main className={`transition-opacity duration-1000 ${shown ? "opacity-100" : "opacity-0"}`}>

        {/* ===== 1枚目：HERO ===== */}
        <section className="relative h-screen min-h-[700px] overflow-hidden" aria-label="ヒーローセクション">
          <div
            className="absolute inset-0"
          >
            <img
              src="/demilp10.jpg"
              alt="DemiCo Relax フェイシャルトリートメントの様子"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          </div>

          <div className="relative h-full flex flex-col justify-end pb-16 px-6">
            <div className="max-w-sm mx-auto w-full">
              <p className="text-[10px] tracking-[0.5em] text-white/80 mb-3 animate-fade-in-up">
                PRIVATE SALON
              </p>
              <h1 className="font-serif-jp text-3xl text-white tracking-wider mb-4 leading-relaxed animate-fade-in-up animation-delay-100">
                癒しを超えて、<br />
                <span className="text-[#e8d4a8]">整う</span>という考え方
              </h1>
              <p className="text-[11px] text-white/70 leading-[2.2] mb-8 animate-fade-in-up animation-delay-200">
                世界基準のハマム温熱 × 医療由来リンパMLD<br />
                × 最高級未精製アルガンオイル × 良質な精油<br />
                回復できる身体を、根本からつくる
              </p>
              <a
                href="#trial"
                className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-[#3a3a3a] text-[11px] tracking-[0.2em] transition-all duration-300 hover:bg-[#e8d4a8] hover:scale-[1.02] animate-fade-in-up animation-delay-300"
              >
                <span>初回限定プランを見る</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[8px] tracking-[0.3em] text-white/50">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        {/* ===== 2枚目：フルイメージ + テクニック ===== */}
        <section className="relative" aria-label="トリートメント技術紹介">
          <img
            src="/demilp11.jpg"
            alt="DemiCo Relax サロンイメージ"
            className="w-full h-auto"
          />

          {/* 暗幕オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 pointer-events-none" />

          {/* オーバーレイコンテンツ - 5セクション均等配置 */}
          <div className="absolute inset-0 [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)] flex flex-col justify-evenly py-4">

            {/* セクション1: すべてに、理由がある。 */}
            <div
              ref={section2.ref}
              className={`text-center px-6 transition-all duration-1000 ${
                section2.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-[9px] tracking-[0.5em] text-white/90 mb-2">THE METHODOLOGY</p>
              <h2 className="font-serif-jp text-[22px] text-white leading-[1.6] font-medium">
                すべてに、<br />理由がある。
              </h2>
            </div>

            {/* セクション2: 01〜04 */}
            <div className="px-8">
              {/* 01 温める - 画像左 */}
              <div
                ref={method01.ref}
                className={`flex items-start gap-3 mb-2 transition-all duration-700 ${
                  method01.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="w-[95px] flex-shrink-0 mt-2">
                  <div
                    className="w-[95px] h-[95px] rounded-[50%] overflow-hidden"
                    style={{
                      boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                    }}
                  >
                    <img
                      src="/riraku2.jpg"
                      alt="ハマム"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[18px] font-extralight text-white">01</span>
                    <span className="text-[7px] tracking-[0.15em] text-[#e8d4a8]">HAMAM</span>
                  </div>
                  <p className="text-[7px] text-white/70">トルコ発祥・世界基準の温熱療法</p>
                  <h3 className="font-serif-jp text-[11px] text-white">温める</h3>
                  <p className="text-[7px] text-white/80 leading-[1.5]">冷えや緊張で滞った体を、ハマムの高温多湿スチームでやさしくゆるめ、<br />血管・リンパ・自律神経が「流れ出せる状態」へ整える土台工程です。</p>
                </div>
              </div>

              {/* 02 流す - 画像右 */}
              <div
                ref={method02.ref}
                className={`flex items-start justify-end gap-3 mb-2 transition-all duration-700 ${
                  method02.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="text-[18px] font-extralight text-white">02</span>
                    <span className="text-[7px] tracking-[0.15em] text-[#e8d4a8]">MLD</span>
                  </div>
                  <p className="text-[7px] text-white/70">1930年Vodder式・医療由来リンパ技術</p>
                  <h3 className="font-serif-jp text-[11px] text-white">流す</h3>
                  <p className="text-[7px] text-white/80 leading-[1.5]">リンパは強い圧では流れず、医療由来のMLDは皮膚へのごく軽い刺激で<br />リンパの生理的な動きを呼び起こし、出口から自然な排出を促す手技です。</p>
                </div>
                <div className="w-[95px] flex-shrink-0 mt-2">
                  <div
                    className="w-[95px] h-[95px] rounded-[50%] overflow-hidden"
                    style={{
                      boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                    }}
                  >
                    <img
                      src="/shijutsu.jpg"
                      alt="MLD"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 03 届ける - 画像左 */}
              <div
                ref={method03.ref}
                className={`flex items-start gap-3 mb-2 transition-all duration-700 ${
                  method03.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="w-[95px] flex-shrink-0 mt-2">
                  <div
                    className="w-[95px] h-[95px] rounded-[50%] overflow-hidden"
                    style={{
                      boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                    }}
                  >
                    <img
                      src="/arugan.png"
                      alt="アルガン"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[18px] font-extralight text-white">03</span>
                    <span className="text-[7px] tracking-[0.15em] text-[#e8d4a8]">ARGAN</span>
                  </div>
                  <p className="text-[7px] text-white/70">モロッコ産・最高級未精製アルガンオイル</p>
                  <h3 className="font-serif-jp text-[11px] text-white">届ける</h3>
                  <p className="text-[7px] text-white/80 leading-[1.5]">未精製の生アルガンオイルは皮脂に近く肌に残らず深部に浸透するため、<br />皮膚だけを正確に動かすことでMLDの繊細な手技を最大限に活かすことができます。</p>
                </div>
              </div>

              {/* 04 調律する - 画像右 */}
              <div
                ref={method04.ref}
                className={`flex items-start justify-end gap-3 transition-all duration-700 ${
                  method04.isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="text-[18px] font-extralight text-white">04</span>
                    <span className="text-[7px] tracking-[0.15em] text-[#e8d4a8]">AROMA</span>
                  </div>
                  <p className="text-[7px] text-white/70">大脳辺縁系へ届くオーダー精油</p>
                  <h3 className="font-serif-jp text-[11px] text-white">調律する</h3>
                  <p className="text-[7px] text-white/80 leading-[1.5]">精油は香りによって脳と自律神経に直接働きかけ、皮膚からも全身へ巡るため、<br />その日の状態に合わせたブレンドが呼吸・神経・リンパの反応を整えます。</p>
                </div>
                <div className="w-[95px] flex-shrink-0 mt-2">
                  <div
                    className="w-[95px] h-[95px] rounded-[50%] overflow-hidden"
                    style={{
                      boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)",
                    }}
                  >
                    <img
                      src="/seiyu1.jpg"
                      alt="精油"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* セクション3: 4つの技術が重なり */}
            <div
              ref={concept.ref}
              className={`text-center px-6 transition-all duration-1000 ${
                concept.isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <p className="font-serif-jp text-[18px] text-white leading-[1.9]">
                4つの技術が重なり<br />
                身体は「回復できる状態」へ戻る
              </p>
            </div>

            {/* セクション4: ハマム温活＆本格アロマリンパ */}
            <div
              id="trial"
              ref={pricing.ref}
              className={`px-6 transition-all duration-1000 ${
                pricing.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="max-w-[260px] mx-auto">
                <article className="relative text-center">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="w-10 h-px bg-white/50" />
                    <span className="text-[7px] tracking-[0.5em] text-white/80">FIRST TRIAL</span>
                    <div className="w-10 h-px bg-white/50" />
                  </div>

                  <h3 className="font-serif-jp text-[15px] text-white mb-2 tracking-wide">
                    ハマム温活 & 本格アロマリンパ
                  </h3>
                  <p className="text-[8px] text-white/70 mb-3 tracking-widest">
                    90min ― counseling included
                  </p>

                  <div className="mb-4">
                    <span className="text-[28px] font-extralight text-white tracking-wider">¥17,000</span>
                    <span className="text-[8px] text-white/60 ml-2">tax in</span>
                  </div>

                  <a
                    href={LINE_URL}
                    className="inline-block w-full py-2.5 border border-white/70 text-white text-[8px] tracking-[0.4em] transition-all duration-300 hover:bg-white hover:text-[#2a2a2a] [text-shadow:none]"
                  >
                    RESERVE
                  </a>
                </article>
              </div>
            </div>

            {/* セクション5: DemiCo Relax */}
            <div
              ref={footer.ref}
              className={`px-5 transition-all duration-1000 ${
                footer.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="max-w-[280px] mx-auto text-center">
                <p className="font-serif-jp text-[15px] text-white tracking-[0.15em] mb-2">DEMICO RELAX & DETOX</p>
                <p className="text-[7px] text-white/70 mb-4 tracking-widest">
                  南森町 徒歩3分｜8:00-22:00｜完全予約制｜女性専用
                </p>

                <div className="flex gap-3 [text-shadow:none]">
                  <a
                    href={LINE_URL}
                    className="flex-1 py-2 border border-white/50 text-white text-[7px] tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-[#2a2a2a]"
                  >
                    LINE予約
                  </a>
                  <a
                    href={HP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 border border-white/50 text-white text-[7px] tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-[#2a2a2a]"
                  >
                    HOMEPAGE
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
