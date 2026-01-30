"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";

// シード付き乱数生成器（サーバー・クライアントで同じ値を生成）
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function StaticLP() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // パーティクル生成（シード付きで一貫性を保つ）
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 1) * 100,
      y: seededRandom(i * 2) * 100,
      size: seededRandom(i * 3) * 4 + 1,
      duration: seededRandom(i * 4) * 20 + 10,
      delay: seededRandom(i * 5) * 10,
    })), []
  );

  // マウス追従
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top + window.scrollY,
      });
    }
  }, []);

  // スクロール追従
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // ドラマチックなローディング演出
    setTimeout(() => setLoaded(true), 500);
    setTimeout(() => setShowContent(true), 1500);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <>
      {/* ===== ローディングスクリーン ===== */}
      <div
        className={`fixed inset-0 z-50 bg-[#0d0d0d] flex items-center justify-center transition-all duration-1000 ${
          showContent ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <div
            className={`w-32 h-32 mx-auto mb-8 relative transition-all duration-1000 ${
              loaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <img src="/rogo.png" alt="" className="w-full h-full object-contain" />
            <div className="absolute inset-0 animate-ping opacity-30">
              <img src="/rogo.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[#c9a86c] to-transparent overflow-hidden">
            <div
              className={`h-full bg-[#c9a86c] transition-all duration-1000 ${
                loaded ? "w-full" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`relative bg-[#0d0d0d] text-white overflow-hidden transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: "1200px",
          margin: "0 auto",
          transformOrigin: "top left",
        }}
      >
        {/* ===== 浮遊パーティクル ===== */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-[#c9a86c]/30 animate-float-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                boxShadow: "0 0 10px rgba(201, 168, 108, 0.5)",
              }}
            />
          ))}
        </div>

        {/* ===== マウス追従グロー ===== */}
        <div
          className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-opacity duration-300"
          style={{
            left: mousePos.x - 300,
            top: mousePos.y - 300,
            background: "radial-gradient(circle, rgba(201,168,108,0.08) 0%, transparent 70%)",
            opacity: showContent ? 1 : 0,
          }}
        />

        {/* ===== HERO ===== */}
        <section className="relative h-[1100px] overflow-hidden">
          {/* 背景画像 - パララックス + ズーム */}
          <div className="absolute inset-0">
            <div
              className={`w-full h-[120%] transition-transform duration-[8000ms] ease-out ${
                showContent ? "scale-110" : "scale-100"
              }`}
              style={{
                transform: `translateY(${scrollY * -0.2}px) scale(${showContent ? 1.1 : 1})`,
              }}
            >
              <img
                src="/demilp10.jpg"
                alt="DemiCo Relax"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#0d0d0d]" />

            {/* シマーエフェクト */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(105deg, transparent 40%, rgba(201,168,108,0.4) 45%, transparent 50%)`,
                backgroundSize: "200% 100%",
                animation: "shimmer 3s infinite",
              }}
            />
          </div>

          <div className="relative h-full flex flex-col">
            {/* ロゴ - 3D回転フェードイン */}
            <div className="pt-12 pl-16 perspective-1000">
              <img
                src="/rogo.png"
                alt="DemiCo Relax"
                className={`w-36 transition-all duration-1500 ease-out ${
                  showContent
                    ? "opacity-90 translate-y-0 rotate-y-0"
                    : "opacity-0 -translate-y-8 rotate-y-90"
                }`}
                style={{
                  transitionDelay: "300ms",
                  transformStyle: "preserve-3d",
                }}
              />
            </div>

            {/* メインコピー */}
            <div className="flex-1 flex items-end pb-32 pl-16 pr-16">
              <div className="[text-shadow:_0_4px_30px_rgb(0_0_0_/_90%)]">
                {/* サブタイトル - タイピングエフェクト */}
                <p
                  className={`text-[13px] tracking-[0.6em] text-[#c9a86c] mb-6 font-light overflow-hidden ${
                    showContent ? "animate-typing" : ""
                  }`}
                  style={{
                    width: showContent ? "100%" : "0",
                    whiteSpace: "nowrap",
                    borderRight: showContent ? "2px solid #c9a86c" : "none",
                    animation: showContent
                      ? "typing 2s steps(30) 0.8s forwards, blink 0.5s step-end 5s forwards"
                      : "none",
                  }}
                >
                  PRIVATE RELAXATION SALON
                </p>

                {/* メインタイトル - グリッチ + フェード */}
                <h1 className="font-serif-jp text-[64px] leading-[1.3] tracking-wide mb-8">
                  <span
                    className={`block transition-all duration-1200 ease-out relative ${
                      showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: "1200ms" }}
                  >
                    <span className="relative inline-block">
                      回復する力を、
                      <span
                        className="absolute inset-0 text-[#c9a86c]/20 animate-glitch-1"
                        aria-hidden="true"
                      >
                        回復する力を、
                      </span>
                    </span>
                  </span>
                  <span
                    className={`block transition-all duration-1200 ease-out ${
                      showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: "1500ms" }}
                  >
                    <span className="relative inline-block">
                      呼び覚ます。
                      <span
                        className="absolute inset-0 text-[#c9a86c]/20 animate-glitch-2"
                        aria-hidden="true"
                      >
                        呼び覚ます。
                      </span>
                    </span>
                  </span>
                </h1>

                {/* 説明文 - ブラーフェードイン */}
                <p
                  className={`text-[21px] text-white/70 leading-[2.2] font-light max-w-[650px] transition-all duration-1500 ease-out ${
                    showContent
                      ? "opacity-100 translate-y-0 blur-0"
                      : "opacity-0 translate-y-8 blur-sm"
                  }`}
                  style={{ transitionDelay: "2000ms" }}
                >
                  世界が認めた4つの技術を、ひとつの施術に。<br />
                  ハマム温熱、医療由来MLD、未精製アルガンオイル、<br />
                  調香された精油が、あなたの身体を本来の状態へ導きます。
                </p>
              </div>
            </div>

            {/* スクロールインジケーター - バウンス */}
            <div
              className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "2800ms" }}
            >
              <span className="text-[11px] tracking-[0.3em] text-white/40 animate-pulse">SCROLL</span>
              <div className="relative">
                <div className="w-px h-12 bg-gradient-to-b from-[#c9a86c]/60 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-4 bg-[#c9a86c] animate-scroll-line" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHY ===== */}
        <section
          id="philosophy"
          ref={(el) => { sectionRefs.current["philosophy"] = el; }}
          className="relative py-40 px-16 bg-[#0d0d0d]"
        >
          <div className="max-w-[900px] mx-auto text-center">
            <p
              className={`text-[12px] tracking-[0.5em] text-[#c9a86c]/80 mb-8 transition-all duration-1000 ${
                isVisible("philosophy") ? "opacity-100 tracking-[0.5em]" : "opacity-0 tracking-[1em]"
              }`}
            >
              PHILOSOPHY
            </p>

            {/* メインタイトル - 文字が1つずつ出現 */}
            <h2 className="font-serif-jp text-[42px] leading-[1.7] mb-16 overflow-hidden">
              <span className="block">
                {"「癒し」だけでなく".split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-all duration-700 ${
                      isVisible("philosophy")
                        ? "opacity-100 translate-y-0 rotate-0"
                        : "opacity-0 translate-y-8 rotate-12"
                    }`}
                    style={{ transitionDelay: `${200 + i * 50}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="block">
                {"「回復」を。".split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-all duration-700 ${
                      isVisible("philosophy")
                        ? "opacity-100 translate-y-0 rotate-0"
                        : "opacity-0 translate-y-8 rotate-12"
                    }`}
                    style={{ transitionDelay: `${600 + i * 50}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h2>

            {/* ゴールドライン - 爆発的に広がる */}
            <div className="relative h-px mb-16 flex justify-center overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-transparent via-[#c9a86c] to-transparent transition-all duration-1000 ease-out ${
                  isVisible("philosophy") ? "w-64 opacity-100" : "w-0 opacity-0"
                }`}
                style={{ transitionDelay: "900ms" }}
              />
              {/* スパークエフェクト */}
              {isVisible("philosophy") && (
                <>
                  <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-[#c9a86c] rounded-full animate-spark-left" />
                  <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-[#c9a86c] rounded-full animate-spark-right" />
                </>
              )}
            </div>

            <p
              className={`text-[19px] text-white/60 leading-[2.4] font-light transition-all duration-1500 ${
                isVisible("philosophy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              一時的な気持ちよさを追い求めるのではなく、<br />
              身体が本来持っている「回復する力」を引き出すこと。<br />
              それがDemiCo Relaxの考える、本当のリラクゼーションです。<br /><br />
              世界各地で認められた4つの技術を融合させ、<br />
              温め、流し、届け、調律する——<br />
              この一連のプロセスが、あなたの身体を<br />
              回復できる状態へと整えていきます。
            </p>
          </div>
        </section>

        {/* ===== 3セクション以降：背景画像1枚で統一 ===== */}
        <div className="relative">
          {/* 共通背景画像 - パララックス */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/demilp11.jpg"
              alt=""
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${(scrollY - 1500) * 0.1}px)`,
              }}
            />
          </div>

          {/* ===== THE FOUR METHODS ===== */}
          <section
            id="methods"
            ref={(el) => { sectionRefs.current["methods"] = el; }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#0d0d0d]/88" />
            <div
              className="absolute top-0 left-0 right-0 h-32 bg-[#0d0d0d]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)" }}
            />
            <div className="relative py-32 px-16">
              <div className="text-center mb-24">
                <p
                  className={`text-[12px] tracking-[0.5em] text-[#c9a86c]/80 mb-6 transition-all duration-1000 ${
                    isVisible("methods") ? "opacity-100" : "opacity-0"
                  }`}
                >
                  THE FOUR METHODS
                </p>
                <h2
                  className={`font-serif-jp text-[38px] transition-all duration-1200 ${
                    isVisible("methods") ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  すべてに、理由がある。
                </h2>
              </div>

              {/* 01 HAMAM */}
              <div
                id="method1"
                ref={(el) => { sectionRefs.current["method1"] = el; }}
                className="flex items-center gap-20 mb-32"
              >
                <div
                  className={`w-[400px] h-[500px] relative flex-shrink-0 overflow-hidden transition-all duration-1500 ${
                    isVisible("method1") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                  }`}
                  style={{
                    transform: isVisible("method1")
                      ? "translateX(0) rotateY(0deg)"
                      : "translateX(-80px) rotateY(-15deg)",
                    transformStyle: "preserve-3d",
                    transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <img
                    src="/riraku2.jpg"
                    alt="ハマム"
                    className={`w-full h-full object-cover transition-transform duration-[3000ms] ${
                      isVisible("method1") ? "scale-100" : "scale-125"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                  {/* 光のスイープ */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                      isVisible("method1") ? "translate-x-full" : "-translate-x-full"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  />
                  <div
                    className={`absolute bottom-8 left-8 transition-all duration-1000 ${
                      isVisible("method1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <span className="text-[72px] font-extralight text-white/20">01</span>
                  </div>
                </div>
                <div
                  className={`flex-1 transition-all duration-1500 ${
                    isVisible("method1") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-[13px] tracking-[0.4em] text-[#c9a86c] mb-4">
                    HAMAM — トルコ発祥・世界基準の温熱療法
                  </p>
                  <h3 className="font-serif-jp text-[36px] mb-6">温める</h3>
                  <p className="text-[18px] text-white/60 leading-[2.2] font-light mb-8">
                    冷えや緊張で滞った身体を、ハマムの高温多湿スチームで<br />
                    やさしくゆるめていきます。<br /><br />
                    これは単なる温めではありません。<br />
                    血管、リンパ、自律神経が「流れ出せる状態」へと<br />
                    整えるための、すべての土台となる工程です。
                  </p>
                  <div
                    className={`h-px bg-[#c9a86c]/30 transition-all duration-1000 ${
                      isVisible("method1") ? "w-12" : "w-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  />
                </div>
              </div>

              {/* 02 MLD */}
              <div
                id="method2"
                ref={(el) => { sectionRefs.current["method2"] = el; }}
                className="flex items-center gap-20 mb-32 flex-row-reverse"
              >
                <div
                  className={`w-[400px] h-[500px] relative flex-shrink-0 overflow-hidden`}
                  style={{
                    transform: isVisible("method2")
                      ? "translateX(0) rotateY(0deg)"
                      : "translateX(80px) rotateY(15deg)",
                    opacity: isVisible("method2") ? 1 : 0,
                    transformStyle: "preserve-3d",
                    transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <img
                    src="/shijutsu.jpg"
                    alt="MLD"
                    className={`w-full h-full object-cover transition-transform duration-[3000ms] ${
                      isVisible("method2") ? "scale-100" : "scale-125"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                      isVisible("method2") ? "-translate-x-full" : "translate-x-full"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  />
                  <div
                    className={`absolute bottom-8 right-8 transition-all duration-1000 ${
                      isVisible("method2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <span className="text-[72px] font-extralight text-white/20">02</span>
                  </div>
                </div>
                <div
                  className={`flex-1 text-right transition-all duration-1500 ${
                    isVisible("method2") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-[13px] tracking-[0.4em] text-[#c9a86c] mb-4">
                    MLD — 1930年Vodder式・医療由来リンパ技術
                  </p>
                  <h3 className="font-serif-jp text-[36px] mb-6">流す</h3>
                  <p className="text-[18px] text-white/60 leading-[2.2] font-light mb-8 text-left ml-auto max-w-[500px]">
                    リンパは、強い圧では流れません。<br /><br />
                    医療由来のMLDは、皮膚へのごく軽い刺激で<br />
                    リンパの生理的な動きを呼び起こし、<br />
                    出口から自然な排出を促す繊細な手技。<br /><br />
                    力ではなく、技術で流す。<br />
                    それが本当のリンパドレナージュです。
                  </p>
                  <div
                    className={`h-px bg-[#c9a86c]/30 ml-auto transition-all duration-1000 ${
                      isVisible("method2") ? "w-12" : "w-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  />
                </div>
              </div>

              {/* 03 ARGAN */}
              <div
                id="method3"
                ref={(el) => { sectionRefs.current["method3"] = el; }}
                className="flex items-center gap-20 mb-32"
              >
                <div
                  className={`w-[400px] h-[500px] relative flex-shrink-0 overflow-hidden`}
                  style={{
                    transform: isVisible("method3")
                      ? "translateX(0) rotateY(0deg)"
                      : "translateX(-80px) rotateY(-15deg)",
                    opacity: isVisible("method3") ? 1 : 0,
                    transformStyle: "preserve-3d",
                    transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <img
                    src="/arugan.png"
                    alt="アルガンオイル"
                    className={`w-full h-full object-cover transition-transform duration-[3000ms] ${
                      isVisible("method3") ? "scale-100" : "scale-125"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                      isVisible("method3") ? "translate-x-full" : "-translate-x-full"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  />
                  <div
                    className={`absolute bottom-8 left-8 transition-all duration-1000 ${
                      isVisible("method3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <span className="text-[72px] font-extralight text-white/20">03</span>
                  </div>
                </div>
                <div
                  className={`flex-1 transition-all duration-1500 ${
                    isVisible("method3") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-[13px] tracking-[0.4em] text-[#c9a86c] mb-4">
                    ARGAN — モロッコ産・最高級未精製アルガンオイル
                  </p>
                  <h3 className="font-serif-jp text-[36px] mb-6">届ける</h3>
                  <p className="text-[18px] text-white/60 leading-[2.2] font-light mb-8">
                    精製されていない「生」のアルガンオイルは、<br />
                    人の皮脂に近い成分構成を持ち、<br />
                    肌に残らず深部へと浸透していきます。<br /><br />
                    表面を滑らせるのではなく、<br />
                    皮膚だけを正確に動かすことで<br />
                    MLDの繊細な手技を最大限に活かすことができます。
                  </p>
                  <div
                    className={`h-px bg-[#c9a86c]/30 transition-all duration-1000 ${
                      isVisible("method3") ? "w-12" : "w-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  />
                </div>
              </div>

              {/* 04 AROMA */}
              <div
                id="method4"
                ref={(el) => { sectionRefs.current["method4"] = el; }}
                className="flex items-center gap-20 flex-row-reverse"
              >
                <div
                  className={`w-[400px] h-[500px] relative flex-shrink-0 overflow-hidden`}
                  style={{
                    transform: isVisible("method4")
                      ? "translateX(0) rotateY(0deg)"
                      : "translateX(80px) rotateY(15deg)",
                    opacity: isVisible("method4") ? 1 : 0,
                    transformStyle: "preserve-3d",
                    transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <img
                    src="/seiyu.png"
                    alt="精油"
                    className={`w-full h-full object-cover transition-transform duration-[3000ms] ${
                      isVisible("method4") ? "scale-100" : "scale-125"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                      isVisible("method4") ? "-translate-x-full" : "translate-x-full"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  />
                  <div
                    className={`absolute bottom-8 right-8 transition-all duration-1000 ${
                      isVisible("method4") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <span className="text-[72px] font-extralight text-white/20">04</span>
                  </div>
                </div>
                <div
                  className={`flex-1 text-right transition-all duration-1500 ${
                    isVisible("method4") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-[13px] tracking-[0.4em] text-[#c9a86c] mb-4">
                    AROMA — 大脳辺縁系へ届くオーダー精油
                  </p>
                  <h3 className="font-serif-jp text-[36px] mb-6">調律する</h3>
                  <p className="text-[18px] text-white/60 leading-[2.2] font-light mb-8 text-left ml-auto max-w-[500px]">
                    精油の香りは、脳と自律神経に直接働きかけます。<br />
                    皮膚からも全身へと巡り、<br />
                    呼吸・神経・リンパの反応を整えていく。<br /><br />
                    その日の状態に合わせてブレンドされた精油が、<br />
                    身体全体を調律し、回復へのプロセスを完成させます。
                  </p>
                  <div
                    className={`h-px bg-[#c9a86c]/30 ml-auto transition-all duration-1000 ${
                      isVisible("method4") ? "w-12" : "w-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ===== CONCEPT MESSAGE ===== */}
          <section
            id="concept"
            ref={(el) => { sectionRefs.current["concept"] = el; }}
            className="relative py-48"
          >
            <div
              className="absolute inset-0 bg-[#0d0d0d]/88"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 80px, 0 0)" }}
            />
            <div
              className="absolute inset-0 bg-[#0d0d0d]/70"
              style={{ clipPath: "polygon(0 0, 100% 80px, 100% 100%, 0 100%)" }}
            />
            <div className="relative text-center px-16">
              {/* 輝くテキスト */}
              <p className="font-serif-jp text-[44px] leading-[1.9] text-white overflow-hidden">
                <span
                  className={`block transition-all duration-1500 ${
                    isVisible("concept") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                  style={{
                    textShadow: isVisible("concept")
                      ? "0 0 40px rgba(201, 168, 108, 0.5), 0 0 80px rgba(201, 168, 108, 0.3)"
                      : "none",
                    transition: "all 1.5s ease-out, text-shadow 2s ease-out 0.5s",
                  }}
                >
                  4つの技術が重なり、
                </span>
                <span
                  className={`block transition-all duration-1500 ${
                    isVisible("concept") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                  style={{
                    transitionDelay: "400ms",
                    textShadow: isVisible("concept")
                      ? "0 0 40px rgba(201, 168, 108, 0.5), 0 0 80px rgba(201, 168, 108, 0.3)"
                      : "none",
                    transition: "all 1.5s ease-out 0.4s, text-shadow 2s ease-out 0.9s",
                  }}
                >
                  身体は「回復できる状態」へ戻る。
                </span>
              </p>
            </div>
          </section>

          {/* ===== SALON INFO ===== */}
          <section
            id="salon"
            ref={(el) => { sectionRefs.current["salon"] = el; }}
            className="relative py-40 px-16"
          >
            <div className="absolute inset-0 bg-[#0d0d0d]/80" />
            <div className="relative max-w-[800px] mx-auto text-center">
              {/* ロゴ - 回転しながら登場 */}
              <div
                className={`w-52 h-52 mx-auto mb-12 transition-all duration-[2000ms] ${
                  isVisible("salon") ? "opacity-90" : "opacity-0"
                }`}
                style={{
                  transform: isVisible("salon") ? "scale(1) rotateY(0deg)" : "scale(0.5) rotateY(180deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <img src="/rogo.png" alt="DemiCo Relax" className="w-full h-full object-contain" />
              </div>

              <p
                className={`font-serif-jp text-[28px] tracking-[0.15em] mb-4 transition-all duration-1200 ${
                  isVisible("salon") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                DemiCo Relax Aromatherapy
              </p>
              <p
                className={`text-[16px] text-white/50 tracking-[0.2em] mb-16 transition-all duration-1200 ${
                  isVisible("salon") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                大阪・南森町｜完全予約制｜女性専用
              </p>

              {/* ゴールドライン */}
              <div className="relative h-px mb-16 flex justify-center">
                <div
                  className={`h-full bg-gradient-to-r from-transparent via-[#c9a86c] to-transparent transition-all duration-1000 ease-out ${
                    isVisible("salon") ? "w-32 opacity-100" : "w-0 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                />
              </div>

              <p
                className={`text-[18px] text-white/60 leading-[2.2] font-light mb-20 transition-all duration-1500 ${
                  isVisible("salon") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                南森町駅から徒歩3分。<br />
                完全予約制のプライベート空間で、<br />
                あなただけの回復の時間をお過ごしください。
              </p>

              {/* CTA - 豪華なホバーエフェクト */}
              <div
                className={`flex flex-col items-center gap-6 transition-all duration-1500 ${
                  isVisible("salon") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: "1100ms" }}
              >
                <div className="group relative w-[320px] py-5 border border-[#c9a86c]/60 text-[#c9a86c] text-[16px] tracking-[0.3em] flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#c9a86c] hover:shadow-[0_0_50px_rgba(201,168,108,0.4)]">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0d0d0d]">
                    VIEW MORE →
                  </span>
                  {/* 波紋エフェクト */}
                  <div className="absolute inset-0 bg-[#c9a86c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c9a86c] via-[#e8d4a8] to-[#c9a86c] animate-shimmer-fast" />
                  </div>
                </div>
                <p className="text-[14px] text-white/40 tracking-wider">
                  メニュー・ご予約はホームページから
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== FOOTER ===== */}
        <section className="py-16 px-16 bg-[#080808] border-t border-white/5">
          <div className="flex justify-between items-center">
            <img src="/rogo.png" alt="DemiCo Relax" className="w-24 opacity-60" />
            <p className="text-[11px] text-white/30 tracking-wider">
              © DemiCo Relax Aromatherapy. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>

      {/* ===== カスタムアニメーション用スタイル ===== */}
      <style jsx global>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from {
            border-color: #c9a86c;
          }
          to {
            border-color: transparent;
          }
        }

        @keyframes glitch-1 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-2 {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, -2px);
          }
          40% {
            transform: translate(2px, 2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(-2px, 2px);
          }
        }

        @keyframes scroll-line {
          0% {
            top: 0;
            opacity: 1;
          }
          100% {
            top: 48px;
            opacity: 0;
          }
        }

        @keyframes spark-left {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-150px, -50%) scale(0);
            opacity: 0;
          }
        }

        @keyframes spark-right {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(100px, -50%) scale(0);
            opacity: 0;
          }
        }

        @keyframes shimmer-fast {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-glitch-1 {
          animation: glitch-1 0.3s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-glitch-2 {
          animation: glitch-2 0.3s ease-in-out infinite;
          animation-delay: 2.15s;
        }

        .animate-scroll-line {
          animation: scroll-line 1.5s ease-in-out infinite;
        }

        .animate-spark-left {
          animation: spark-left 0.8s ease-out forwards;
        }

        .animate-spark-right {
          animation: spark-right 0.8s ease-out forwards;
        }

        .animate-shimmer-fast {
          background-size: 200% 100%;
          animation: shimmer-fast 1.5s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-90 {
          transform: rotateY(90deg);
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </>
  );
}
