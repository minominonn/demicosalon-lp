"use client";

export default function StaticLP() {
  return (
    <div
      className="relative bg-[#1a1612]"
      style={{ width: "1200px", height: "5000px" }}
    >
      {/* ===== セクション1：HERO（0px - 1000px） ===== */}
      <section className="absolute top-0 left-0 w-full h-[1000px]">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src="/demilp10.jpg"
            alt="DemiCo Relax"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-60% to-black/95" />
        </div>

        {/* コンテンツ */}
        <div className="relative h-full px-16 flex flex-col justify-end pb-44">
          <div className="[text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)] max-w-[600px]">
            <p className="text-[14px] tracking-[0.5em] text-white/80 mb-4">
              PRIVATE SALON
            </p>
            <h1 className="font-serif-jp text-[52px] text-white tracking-wider mb-6 leading-[1.4]">
              癒しを超えて、<br />
              <span className="text-[#e8d4a8]">整う</span>という考え方
            </h1>
            <p className="text-[17px] text-white/70 leading-[2.0]">
              世界基準のハマム温熱 × 医療由来リンパMLD<br />
              × 最高級未精製アルガンオイル × 良質な精油<br />
              回復できる身体を、根本からつくる
            </p>
          </div>
        </div>

        {/* ロゴ */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <img
            src="/rogo.png"
            alt="DemiCo Relax"
            className="w-48 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
          <svg className="w-6 h-6 mt-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="#c9a86c">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== セクション2：THE METHODOLOGY（1000px - 3200px） ===== */}
      <section className="absolute top-[1000px] left-0 w-full h-[2200px]">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src="/demilp11.jpg"
            alt="DemiCo Relax サロンイメージ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/30 via-20% to-black/70" />
        </div>

        {/* コンテンツ */}
        <div className="relative h-full px-16 py-24 flex flex-col [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)]">

          {/* タイトル */}
          <div className="text-center mb-20">
            <p className="text-[14px] tracking-[0.5em] text-white/90 mb-3">THE METHODOLOGY</p>
            <h2 className="font-serif-jp text-[48px] text-white leading-[1.5] font-medium">
              すべてに、理由がある。
            </h2>
          </div>

          {/* 01〜04 グリッド */}
          <div className="flex-1 flex flex-col justify-center gap-16 max-w-[1000px] mx-auto">

            {/* 01 温める */}
            <div className="flex items-start gap-8">
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)" }}>
                <img src="/riraku2.jpg" alt="ハマム" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[36px] font-extralight text-white">01</span>
                  <span className="text-[13px] tracking-[0.15em] text-[#e8d4a8]">HAMAM</span>
                </div>
                <p className="text-[13px] text-white/70 mb-1">トルコ発祥・世界基準の温熱療法</p>
                <h3 className="font-serif-jp text-[22px] text-white mb-2">温める</h3>
                <p className="text-[14px] text-white/80 leading-[1.8]">
                  冷えや緊張で滞った体を、ハマムの高温多湿スチームでやさしくゆるめ、<br />
                  血管・リンパ・自律神経が「流れ出せる状態」へ整える土台工程です。
                </p>
              </div>
            </div>

            {/* 02 流す */}
            <div className="flex items-start gap-8 flex-row-reverse">
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)" }}>
                <img src="/shijutsu.jpg" alt="MLD" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-baseline gap-3 mb-1 justify-end">
                  <span className="text-[36px] font-extralight text-white">02</span>
                  <span className="text-[13px] tracking-[0.15em] text-[#e8d4a8]">MLD</span>
                </div>
                <p className="text-[13px] text-white/70 mb-1">1930年Vodder式・医療由来リンパ技術</p>
                <h3 className="font-serif-jp text-[22px] text-white mb-2">流す</h3>
                <p className="text-[14px] text-white/80 leading-[1.8] text-left">
                  リンパは強い圧では流れず、医療由来のMLDは皮膚へのごく軽い刺激で<br />
                  リンパの生理的な動きを呼び起こし、出口から自然な排出を促す手技です。
                </p>
              </div>
            </div>

            {/* 03 届ける */}
            <div className="flex items-start gap-8">
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)" }}>
                <img src="/arugan.png" alt="アルガン" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[36px] font-extralight text-white">03</span>
                  <span className="text-[13px] tracking-[0.15em] text-[#e8d4a8]">ARGAN</span>
                </div>
                <p className="text-[13px] text-white/70 mb-1">モロッコ産・最高級未精製アルガンオイル</p>
                <h3 className="font-serif-jp text-[22px] text-white mb-2">届ける</h3>
                <p className="text-[14px] text-white/80 leading-[1.8]">
                  未精製の生アルガンオイルは皮脂に近く肌に残らず深部に浸透するため、<br />
                  皮膚だけを正確に動かすことでMLDの繊細な手技を最大限に活かすことができます。
                </p>
              </div>
            </div>

            {/* 04 調律する */}
            <div className="flex items-start gap-8 flex-row-reverse">
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: "0 0 10px 8px rgba(255,255,255,0.3), 0 0 20px 15px rgba(255,255,255,0.15)" }}>
                <img src="/seiyu1.jpg" alt="精油" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-right">
                <div className="flex items-baseline gap-3 mb-1 justify-end">
                  <span className="text-[36px] font-extralight text-white">04</span>
                  <span className="text-[13px] tracking-[0.15em] text-[#e8d4a8]">AROMA</span>
                </div>
                <p className="text-[13px] text-white/70 mb-1">大脳辺縁系へ届くオーダー精油</p>
                <h3 className="font-serif-jp text-[22px] text-white mb-2">調律する</h3>
                <p className="text-[14px] text-white/80 leading-[1.8] text-left">
                  精油は香りによって脳と自律神経に直接働きかけ、皮膚からも全身へ巡るため、<br />
                  その日の状態に合わせたブレンドが呼吸・神経・リンパの反応を整えます。
                </p>
              </div>
            </div>
          </div>

          {/* コンセプト文 */}
          <div className="text-center mt-20">
            <p className="font-serif-jp text-[32px] text-white leading-[1.8]">
              4つの技術が重なり<br />
              身体は「回復できる状態」へ戻る
            </p>
          </div>
        </div>
      </section>

      {/* ===== セクション3：FIRST TRIAL + フッター（3200px - 5000px） ===== */}
      <section className="absolute top-[3200px] left-0 w-full h-[1800px] bg-[#1a1612]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

        <div className="relative h-full px-16 py-32 flex flex-col justify-center items-center [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_100%)]">

          {/* FIRST TRIAL */}
          <div className="text-center mb-32">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-24 h-px bg-white/50" />
              <span className="text-[14px] tracking-[0.5em] text-white/80">FIRST TRIAL</span>
              <div className="w-24 h-px bg-white/50" />
            </div>

            <h3 className="font-serif-jp text-[36px] text-white mb-4 tracking-wide">
              ハマム温活 & 本格アロマリンパ
            </h3>
            <p className="text-[16px] text-white/70 mb-8 tracking-widest">
              90min ― counseling included
            </p>

            <div>
              <span className="text-[72px] font-extralight text-white tracking-wider">¥17,000</span>
              <span className="text-[16px] text-white/60 ml-3">tax in</span>
            </div>
          </div>

          {/* DemiCo Relax */}
          <div className="text-center">
            <img
              src="/rogo.png"
              alt="DemiCo Relax"
              className="w-56 mx-auto mb-8 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
            <p className="font-serif-jp text-[32px] text-white tracking-[0.15em] mb-4">
              DemiCo Relax Aromatherapy
            </p>
            <p className="text-[15px] text-white/70 mb-12 tracking-widest">
              南森町 徒歩3分｜8:00-22:00｜完全予約制｜女性専用
            </p>

            <div className="flex gap-6 justify-center [text-shadow:none]">
              <div className="w-[200px] py-5 border border-white/50 text-white text-[15px] tracking-[0.25em] flex items-center justify-center">
                LINE予約
              </div>
              <div className="w-[200px] py-5 border border-white/50 text-white text-[15px] tracking-[0.25em] flex items-center justify-center">
                HOMEPAGE
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
