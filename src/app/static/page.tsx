"use client";

export default function StaticLP() {
  return (
    <div
      className="relative bg-[#0d0d0d] text-white overflow-hidden"
      style={{ width: "1200px", minHeight: "5000px" }}
    >

      {/* ===== HERO ===== */}
      <section className="relative h-[1100px]">
        <div className="absolute inset-0">
          <img
            src="/demilp10.jpg"
            alt="DemiCo Relax"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#0d0d0d]" />
        </div>

        <div className="relative h-full flex flex-col">
          {/* ロゴ */}
          <div className="pt-12 pl-16">
            <img src="/rogo.png" alt="DemiCo Relax" className="w-36 opacity-90" />
          </div>

          {/* メインコピー */}
          <div className="flex-1 flex items-end pb-32 pl-16 pr-16">
            <div className="[text-shadow:_0_4px_30px_rgb(0_0_0_/_90%)]">
              <p className="text-[13px] tracking-[0.6em] text-[#c9a86c] mb-6 font-light">
                PRIVATE RELAXATION SALON
              </p>
              <h1 className="font-serif-jp text-[64px] leading-[1.3] tracking-wide mb-8">
                回復する力を、<br />
                呼び覚ます。
              </h1>
              <p className="text-[18px] text-white/70 leading-[2.2] font-light max-w-[600px]">
                世界が認めた4つの技術を、ひとつの施術に。<br />
                ハマム温熱、医療由来MLD、未精製アルガンオイル、<br />
                調香された精油が、あなたの身体を本来の状態へ導きます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="relative py-40 px-16 bg-[#0d0d0d]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[12px] tracking-[0.5em] text-[#c9a86c]/80 mb-8">PHILOSOPHY</p>
          <h2 className="font-serif-jp text-[42px] leading-[1.7] mb-16">
            「癒し」ではなく<br />
            「回復」を。
          </h2>
          <div className="w-16 h-px bg-[#c9a86c]/40 mx-auto mb-16" />
          <p className="text-[16px] text-white/60 leading-[2.4] font-light">
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

      {/* ===== THE FOUR METHODS ===== */}
      <section className="relative bg-[#0d0d0d]">
        <div className="py-32 px-16">
          <div className="text-center mb-24">
            <p className="text-[12px] tracking-[0.5em] text-[#c9a86c]/80 mb-6">THE FOUR METHODS</p>
            <h2 className="font-serif-jp text-[38px]">すべてに、理由がある。</h2>
          </div>

          {/* 01 HAMAM */}
          <div className="flex items-center gap-20 mb-32">
            <div className="w-[400px] h-[500px] relative flex-shrink-0">
              <img src="/riraku2.jpg" alt="ハマム" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[72px] font-extralight text-white/20">01</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[11px] tracking-[0.4em] text-[#c9a86c] mb-4">HAMAM — トルコ発祥・世界基準の温熱療法</p>
              <h3 className="font-serif-jp text-[36px] mb-6">温める</h3>
              <p className="text-[15px] text-white/60 leading-[2.2] font-light mb-8">
                冷えや緊張で滞った身体を、ハマムの高温多湿スチームで<br />
                やさしくゆるめていきます。<br /><br />
                これは単なる温めではありません。<br />
                血管、リンパ、自律神経が「流れ出せる状態」へと<br />
                整えるための、すべての土台となる工程です。
              </p>
              <div className="w-12 h-px bg-[#c9a86c]/30" />
            </div>
          </div>

          {/* 02 MLD */}
          <div className="flex items-center gap-20 mb-32 flex-row-reverse">
            <div className="w-[400px] h-[500px] relative flex-shrink-0">
              <img src="/shijutsu.jpg" alt="MLD" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8">
                <span className="text-[72px] font-extralight text-white/20">02</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <p className="text-[11px] tracking-[0.4em] text-[#c9a86c] mb-4">MLD — 1930年Vodder式・医療由来リンパ技術</p>
              <h3 className="font-serif-jp text-[36px] mb-6">流す</h3>
              <p className="text-[15px] text-white/60 leading-[2.2] font-light mb-8 text-left ml-auto max-w-[500px]">
                リンパは、強い圧では流れません。<br /><br />
                医療由来のMLDは、皮膚へのごく軽い刺激で<br />
                リンパの生理的な動きを呼び起こし、<br />
                出口から自然な排出を促す繊細な手技。<br /><br />
                力ではなく、技術で流す。<br />
                それが本当のリンパドレナージュです。
              </p>
              <div className="w-12 h-px bg-[#c9a86c]/30 ml-auto" />
            </div>
          </div>

          {/* 03 ARGAN */}
          <div className="flex items-center gap-20 mb-32">
            <div className="w-[400px] h-[500px] relative flex-shrink-0">
              <img src="/arugan.png" alt="アルガンオイル" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[72px] font-extralight text-white/20">03</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[11px] tracking-[0.4em] text-[#c9a86c] mb-4">ARGAN — モロッコ産・最高級未精製アルガンオイル</p>
              <h3 className="font-serif-jp text-[36px] mb-6">届ける</h3>
              <p className="text-[15px] text-white/60 leading-[2.2] font-light mb-8">
                精製されていない「生」のアルガンオイルは、<br />
                人の皮脂に近い成分構成を持ち、<br />
                肌に残らず深部へと浸透していきます。<br /><br />
                表面を滑らせるのではなく、<br />
                皮膚だけを正確に動かすことで<br />
                MLDの繊細な手技を最大限に活かすことができます。
              </p>
              <div className="w-12 h-px bg-[#c9a86c]/30" />
            </div>
          </div>

          {/* 04 AROMA */}
          <div className="flex items-center gap-20 flex-row-reverse">
            <div className="w-[400px] h-[500px] relative flex-shrink-0">
              <img src="/seiyu1.jpg" alt="精油" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8">
                <span className="text-[72px] font-extralight text-white/20">04</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <p className="text-[11px] tracking-[0.4em] text-[#c9a86c] mb-4">AROMA — 大脳辺縁系へ届くオーダー精油</p>
              <h3 className="font-serif-jp text-[36px] mb-6">調律する</h3>
              <p className="text-[15px] text-white/60 leading-[2.2] font-light mb-8 text-left ml-auto max-w-[500px]">
                精油の香りは、脳と自律神経に直接働きかけます。<br />
                皮膚からも全身へと巡り、<br />
                呼吸・神経・リンパの反応を整えていく。<br /><br />
                その日の状態に合わせてブレンドされた精油が、<br />
                身体全体を調律し、回復へのプロセスを完成させます。
              </p>
              <div className="w-12 h-px bg-[#c9a86c]/30 ml-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONCEPT MESSAGE ===== */}
      <section className="relative py-48 bg-[#0d0d0d]">
        <div className="absolute inset-0 opacity-30">
          <img src="/demilp11.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d0d0d]/80" />
        </div>
        <div className="relative text-center px-16">
          <p className="font-serif-jp text-[44px] leading-[1.9] text-white">
            4つの技術が重なり、<br />
            身体は「回復できる状態」へ戻る。
          </p>
        </div>
      </section>

      {/* ===== SALON INFO ===== */}
      <section className="relative py-40 px-16 bg-[#0d0d0d]">
        <div className="max-w-[800px] mx-auto text-center">

          <img src="/rogo.png" alt="DemiCo Relax" className="w-52 mx-auto mb-12 opacity-90" />

          <p className="font-serif-jp text-[28px] tracking-[0.15em] mb-4">
            DemiCo Relax Aromatherapy
          </p>
          <p className="text-[14px] text-white/50 tracking-[0.2em] mb-16">
            大阪・南森町｜完全予約制｜女性専用
          </p>

          <div className="w-24 h-px bg-[#c9a86c]/30 mx-auto mb-16" />

          <p className="text-[15px] text-white/60 leading-[2.2] font-light mb-20">
            南森町駅から徒歩3分。<br />
            完全予約制のプライベート空間で、<br />
            あなただけの回復の時間をお過ごしください。
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-[320px] py-5 border border-[#c9a86c]/60 text-[#c9a86c] text-[14px] tracking-[0.3em] flex items-center justify-center">
              VIEW MORE →
            </div>
            <p className="text-[12px] text-white/40 tracking-wider">
              メニュー・ご予約はホームページから
            </p>
          </div>

        </div>
      </section>

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
  );
}
