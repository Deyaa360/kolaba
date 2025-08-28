// =====================================================
// Kolaba — Dark Theme JS (nav, i18n, small helpers)
// =====================================================
"use strict";

/* ---------- i18n dictionary ---------- */
const i18n = {
  en: {
    hero_title: "Creator-made UGC for skincare brands in Turkey",
    hero_sub: "Fast, affordable, premium content that sells.",
    cta_talk: "Talk to us",
    cta_view_work: "See our work",
    trust_1: "50+ creators in Turkey",
    trust_2: "3–7 day delivery",
    trust_3: "Ad-ready for Meta & TikTok",

    about_title: "About Kolaba",
    about_p1: "Kolaba connects skincare brands with a vetted pool of Turkish micro-creators to produce high-performing UGC: short videos and photos crafted for ads, product pages, and social.",
    about_p2: "We focus on speed, creative quality, and performance. You brief us once—we handle casting, direction, and delivery.",
    about_deliver_title: "What we deliver",
    about_deliver_1: "Hook-driven 15–45s videos (ad-ready, vertical).",
    about_deliver_2: "Short product explainers and before/after style demos.",
    about_deliver_3: "3–8 high-quality photos per video set for PDP and socials.",
    about_deliver_4: "Captions, on-screen text, and export for Meta/TikTok.",
    about_focus_title: "What we’re best at",
    about_focus_1: "Acne, oil control, pores, texture, sensitivity.",
    about_focus_2: "Serums (Niacinamide, Salicylic, Vitamin C), cleansers, SPF.",
    about_focus_3: "Routine storytelling (AM/PM), ingredient education, claims clarity.",
    about_stat_1n: "50+ creators",
    about_stat_1t: "vetted in Turkey",
    about_stat_2n: "3–7 days",
    about_stat_2t: "typical delivery",
    about_stat_3n: "Ad-ready",
    about_stat_3t: "Meta & TikTok",
    about_cta: "Ask for packages & pricing",

    how_title: "How it works",
    how_step1_t: "1) Brief — share goals, product, and platforms",
    how_step1_b1: "Tell us your KPI (CTR, CPA, PDP dwell, etc.) and audience.",
    how_step1_b2: "Pick angles: routine, demo, testimonial, ingredient-led.",
    how_step1_b3: "Ship product to creator or send assets if virtual demo is fine.",
    how_step2_t: "2) Match & script — we shortlist creators and write hooks",
    how_step2_b1: "Shortlist matched by skin type/tone, vibe, camera presence.",
    how_step2_b2: "3–6 opening hooks + CTA frames aligned to your claim-safe copy.",
    how_step2_b3: "You approve creator + script in one pass.",
    how_step3_t: "3) Shoot — creator records per brief",
    how_step3_b1: "Natural light, clean audio, readable on-screen text sizes.",
    how_step3_b2: "Framing for 9:16 by default; 1:1/16:9 on request.",
    how_step3_b3: "Raw takes kept for alternates and future edits.",
    how_step4_t: "4) Edit — cuts, captions, compliance",
    how_step4_b1: "Beat-matched cuts, branded CTA card, safe language review.",
    how_step4_b2: "Readable captions/subtitles; color & audio leveling.",
    how_step4_b3: "Export presets for Meta/TikTok; filenames you can track.",
    how_step5_t: "5) Deliver & iterate — test, learn, repeat",
    how_step5_b1: "1–2 revision rounds within 5 business days.",
    how_step5_b2: "We suggest next hooks based on your early performance.",
    how_step5_b3: "Usage: ads + web + organic for 3 months (extendable).",
    how_stat_1n: "Day 0",
    how_stat_1t: "Brief & creator shortlist",
    how_stat_2n: "Day 1–2",
    how_stat_2t: "Script & approval",
    how_stat_3n: "Day 3–5",
    how_stat_3t: "Shoot & edit",
    how_stat_4n: "Day 6–7",
    how_stat_4t: "Delivery & revisions",
    how_cta: "Book a pilot",

    why_title: "Why Kolaba",
    why_p1: "Beauty-native creators: we handpick talent who know skincare language and compliance rules.",
    why_p2: "Performance-first scripting: iterative hooks, CTAs, and frameworks aligned with paid social best practices.",
    why_p3: "Reliable delivery: transparent timelines, revisions included, ad-ready formats every time.",
    why_ext_title: "What makes us different",
    why_ext_1: "100% focus on skincare & beauty — no generic creator marketplace.",
    why_ext_2: "Compliance-checked copy: clear, claim-safe, no medical promises.",
    why_ext_3: "Affordable packages vs. agencies; faster turnaround than in-house.",
    why_ext_4: "Creators across skin types, tones, and routines — inclusive by design.",
    why_ext_5: "Ad-ready outputs tested across Meta, TikTok, PDPs.",
    why_stat_1n: "50+",
    why_stat_1t: "skincare creators",
    why_stat_2n: "7 days",
    why_stat_2t: "typical delivery",
    why_stat_3n: "100%",
    why_stat_3t: "claim-safe content",
    why_cta: "Why not start with a pilot?",

    ugc_title: "Recent UGC",
    contact_title: "Work with us",
    contact_body: 'Email us at <a href="mailto:hello@kolaba.live">hello@kolaba.live</a> or WhatsApp to book a pilot.'
  },

  tr: {
    hero_title: "Türkiye’deki cilt bakım markaları için yaratıcı UGC",
    hero_sub: "Hızlı, uygun fiyatlı ve satış getiren premium içerik.",
    cta_talk: "Bizimle konuşun",
    cta_view_work: "İşlerimizi gör",
    trust_1: "Türkiye’de 50+ içerik üreticisi",
    trust_2: "3–7 günde teslim",
    trust_3: "Meta & TikTok için reklama hazır",

    about_title: "Kolaba Hakkında",
    about_p1: "Kolaba, cilt bakım markalarını seçili Türkiye’li mikro içerik üreticileriyle buluşturarak yüksek performanslı UGC üretir: reklamlar, ürün sayfaları ve sosyal medya için kısa videolar ve fotoğraflar.",
    about_p2: "Odağımız hız, yaratıcı kalite ve performans. Bize bir defa brief verin—casting, yönlendirme ve teslimatı biz üstlenelim.",
    about_deliver_title: "Ne teslim ediyoruz",
    about_deliver_1: "Kanca odaklı 15–45 sn videolar (reklama hazır, dikey).",
    about_deliver_2: "Kısa ürün açıklamaları ve önce/sonra tarzı demolar.",
    about_deliver_3: "Her video seti için PDP ve sosyal için 3–8 yüksek kaliteli fotoğraf.",
    about_deliver_4: "Altyazılar, ekranda metin ve Meta/TikTok’a uygun dışa aktarma.",
    about_focus_title: "En iyi yaptıklarımız",
    about_focus_1: "Akne, yağ kontrolü, gözenek, doku, hassasiyet.",
    about_focus_2: "Serumlar (Niasinamid, Salisilik, C Vitamini), temizleyiciler, SPF.",
    about_focus_3: "Rutin hikayeleştirme (sabah/akşam), içerik eğitimi, iddia açıklığı.",
    about_stat_1n: "50+ içerik üreticisi",
    about_stat_1t: "Türkiye’de seçili",
    about_stat_2n: "3–7 gün",
    about_stat_2t: "tipik teslim",
    about_stat_3n: "Reklama hazır",
    about_stat_3t: "Meta & TikTok",
    about_cta: "Paketler ve fiyatları sorun",

    how_title: "Nasıl çalışır",
    how_step1_t: "1) Brief — hedefler, ürün ve platformlar",
    how_step1_b1: "KPI’nızı (TO, MBB, PDP etkileşimi vb.) ve hedef kitleyi paylaşın.",
    how_step1_b2: "Açıları seçin: rutin, demo, referans, içerik odaklı.",
    how_step1_b3: "Ürünü üreticiye gönderin veya sanal demo için varlık sağlayın.",
    how_step2_t: "2) Eşleşme & senaryo — kısa liste ve kancalar",
    how_step2_b1: "Cilt tipi/tonu, stil ve kamera hakimiyetine göre eşleştirme.",
    how_step2_b2: "İddiaya uygun 3–6 açılış kancası + CTA çerçeveleri.",
    how_step2_b3: "Üretici + senaryoyu tek seferde onaylarsınız.",
    how_step3_t: "3) Çekim — brief’e göre kayıt",
    how_step3_b1: "Doğal ışık, temiz ses, okunur ekran yazıları.",
    how_step3_b2: "Varsayılan 9:16; istek üzerine 1:1/16:9.",
    how_step3_b3: "Ham çekimler alternatif ve gelecek düzenlemeler için saklanır.",
    how_step4_t: "4) Kurgu — kesimler, altyazı, uyumluluk",
    how_step4_b1: "Ritme uygun kesimler, markalı CTA kartı, güvenli dil kontrolü.",
    how_step4_b2: "Okunur altyazılar; renk ve ses seviyeleri.",
    how_step4_b3: "Meta/TikTok için dışa aktarma; takip edilebilir dosya adları.",
    how_step5_t: "5) Teslim & iterasyon — test et, öğren, tekrarla",
    how_step5_b1: "5 iş günü içinde 1–2 revizyon turu.",
    how_step5_b2: "Erken performansa göre sonraki kancaları öneririz.",
    how_step5_b3: "Kullanım: 3 ay reklam + web + organik (uzatılabilir).",
    how_stat_1n: "Gün 0",
    how_stat_1t: "Brief & kısa liste",
    how_stat_2n: "Gün 1–2",
    how_stat_2t: "Senaryo & onay",
    how_stat_3n: "Gün 3–5",
    how_stat_3t: "Çekim & kurgu",
    how_stat_4n: "Gün 6–7",
    how_stat_4t: "Teslim & revizyon",
    how_cta: "Pilot ayırtın",

    why_title: "Neden Kolaba",
    why_p1: "Güzellik odaklı üreticiler: cilt bakım dili ve uyumluluğa hakim.",
    why_p2: "Performans odaklı senaryo: ücretli sosyal en iyi uygulamalarına uygun kancalar ve CTA’lar.",
    why_p3: "Güvenilir teslim: şeffaf zaman çizelgesi, revizyon dahil, reklama hazır formatlar.",
    why_ext_title: "Farkımız",
    why_ext_1: "Yüzde 100 güzellik & cilt bakımı odağı — genel pazar yeri değil.",
    why_ext_2: "Uyumluluk kontrolü: net, güvenli, medikal vaatsiz metin.",
    why_ext_3: "Ajanslara göre uygun paketler; in-house’tan daha hızlı.",
    why_ext_4: "Farklı cilt tipleri/tonları ve rutinler — kapsayıcı.",
    why_ext_5: "Meta, TikTok ve PDP’lerde test edilmiş çıktılar.",
    why_stat_1n: "50+",
    why_stat_1t: "içerik üreticisi",
    why_stat_2n: "7 gün",
    why_stat_2t: "tipik teslim",
    why_stat_3n: "100%",
    why_stat_3t: "güvenli içerik",
    why_cta: "Bir pilotla başlayalım mı?",

    ugc_title: "Son UGC Çalışmaları",
    contact_title: "Bizimle çalışın",
    contact_body: 'Pilot için <a href="mailto:hello@kolaba.live">hello@kolaba.live</a> adresine e-posta atın veya WhatsApp’tan yazın.'
  }
};

/* ---------- language switching ---------- */
function setLanguage(lang){
  const dict = i18n[lang] || i18n.en;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val == null) { console.warn("[i18n] Missing key:", key); return; }
    /[<>&]/.test(val) ? el.innerHTML = val : el.textContent = val;
  });

  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.classList.toggle("is-active", btn.dataset.lang===lang);
  });

  try { localStorage.setItem("kolaba_lang", lang); } catch(e){}
}
const saved = (localStorage.getItem("kolaba_lang") || "en").toLowerCase();
setLanguage(saved);
document.querySelectorAll("[data-lang]").forEach(btn=>{
  btn.addEventListener("click", ()=> setLanguage(btn.dataset.lang));
});

/* ---------- hamburger / drawer ---------- */
const menuToggle = document.getElementById("menu-toggle");
const navDrawer  = document.getElementById("nav-drawer");
if (menuToggle && navDrawer){
  menuToggle.addEventListener("click", ()=>{
    const open = navDrawer.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navDrawer.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      navDrawer.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded","false");
    });
  });
  document.addEventListener("keydown", e=>{
    if(e.key==="Escape"){ navDrawer.classList.remove("is-open"); menuToggle.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded","false"); }
  });
}

/* ---------- smooth scroll ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href'); const t=document.querySelector(id);
    if(!t) return; e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

/* ---------- videos: pause others when one plays ---------- */
(() => {
  const vids = [...document.querySelectorAll('.grid--reels .vid, .grid .vid')];
  vids.forEach(v => v.addEventListener('play', () => {
    vids.forEach(o => { if (o !== v && !o.paused) o.pause(); });
  }));
})();

/* ---------- footer year ---------- */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
