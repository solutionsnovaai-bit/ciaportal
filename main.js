/* =============================================
   CIA PAINEL — MAIN.JS
   Firebase Auth integrado
   ============================================= */

// ─── FIREBASE CONFIG ──────────────────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA332oTHML5gASd-rRPVmAB-U0sgUjYfJc",
  authDomain: "conteudo-infinito-com-ia.firebaseapp.com",
  projectId: "conteudo-infinito-com-ia",
  storageBucket: "conteudo-infinito-com-ia.firebasestorage.app",
  messagingSenderId: "533796175753",
  appId: "1:533796175753:web:587608fb59b2c625916b58",
  measurementId: "G-J5ZQ528LG4"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ─── DADOS DOS AGENTES ───────────────────────────────────────────────────────
const AGENTS = [
  {
    id: 1, emoji: "🏋️", name: "Fitness & Personal", tag: "Fitness",
    desc: "Conteúdo especializado para personal trainers e marcas fitness.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1a5p9Ihz8KRrPz8nm3PZWjylUg3UcmqGm?usp=sharing",
      feed:      "https://gemini.google.com/gem/1OmD3fbBfF-d0nORmz3VTfJJ4OWuJ_Uu0?usp=sharing",
      stories:   "https://gemini.google.com/gem/12iGRc3Vor13BuG09OxWr0xBe3ZOgmYpj?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Roteiros prontos para vídeos curtos de treino." },
      { icon: "✍️", name: "Legendas", desc: "Copies engajadores para posts de fitness." },
      { icon: "🧵", name: "Carrossel", desc: "Estrutura de slides para educação em saúde." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de nutrição para leads e clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos otimizados sobre treino e hábitos." },
    ],
  },
  {
    id: 2, emoji: "🥗", name: "Nutricionistas", tag: "Nutrição",
    desc: "Agente para nutricionistas que querem crescer nas redes e atrair pacientes.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1rDtwK_Tvn4z7p5_mLOxm3rt3JaGRVaG-?usp=sharing",
      feed:      "https://gemini.google.com/gem/13fTf-f-_ctxlm_wO-qr26COLySN5QdAA?usp=sharing",
      stories:   "https://gemini.google.com/gem/1cJI5hFtXSnrRdAGxXgdilioEw2EZ7_gp?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas rápidas de alimentação e receitas saudáveis." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que geram autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Guias nutricionais em formato de slides." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências para captação e fidelização de pacientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre dieta, saúde e alimentação." },
    ],
  },
  {
    id: 3, emoji: "🧠", name: "Psicólogos", tag: "Psicologia",
    desc: "Para psicólogos e terapeutas que querem gerar autoridade e atrair clientes online.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1dRIzP0GodxLF2jJFx_iLtVwb6o3p7TSK?usp=sharing",
      feed:      "https://gemini.google.com/gem/1gv7zHY-u1WIrTvd5w57_BtiGypG-eFPV?usp=sharing",
      stories:   "https://gemini.google.com/gem/1iEcb0yXImdUzkXsmeyMRJxdHK3zrxlg1?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Reflexões e dicas de saúde mental em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Textos que geram conexão emocional e autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Técnicas de autoconhecimento e bem-estar." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de captação e nutrição de leads." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre saúde mental e autoestima." },
    ],
  },
  {
    id: 4, emoji: "🍕", name: "Restaurantes", tag: "Gastronomia",
    desc: "Agente para restaurantes, chefs e food businesses que vendem pela internet.",
    gems: {
      carrossel: "https://gemini.google.com/gem/17bTmMW2dZuxyFDaW36zc4O72VthswdSN?usp=sharing",
      feed:      "https://gemini.google.com/gem/1ziu6UUgfDkD5cn_ifP3ui6JPEnS348mQ?usp=sharing",
      stories:   "https://gemini.google.com/gem/1B7jsx9lycZ8176Pavd0fm-BSAJjTNtJJ?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Bastidores de cozinha, pratos e promoções." },
      { icon: "✍️", name: "Legendas", desc: "Descrições irresistíveis de pratos e cardápios." },
      { icon: "🧵", name: "Carrossel", desc: "Receitas passo a passo e apresentação de menu." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters de promoções e eventos do restaurante." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre culinária e tendências gastronômicas." },
    ],
  },
  {
    id: 5, emoji: "🏠", name: "Corretores & Imobiliárias", tag: "Imóveis",
    desc: "Para corretores e imobiliárias que vendem imóveis pelas redes sociais.",
    gems: {
      carrossel: "https://gemini.google.com/gem/15CqkVKec62Q-aZJBrsCwEMJuOGG0XnBJ?usp=sharing",
      feed:      "https://gemini.google.com/gem/1lyvNI4gqPan9shwX_QNw90h-uRg_cyKe?usp=sharing",
      stories:   "https://gemini.google.com/gem/1BP5JBXjWwoCH05Nf60ZDerS8X9O-BRYD?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Tours virtuais e apresentação de imóveis em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies persuasivos para anúncios e lançamentos." },
      { icon: "🧵", name: "Carrossel", desc: "Dicas de compra, venda e investimento imobiliário." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de follow-up e apresentação de imóveis." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre mercado imobiliário e financiamento." },
    ],
  },
  {
    id: 6, emoji: "💄", name: "Estética & Beleza", tag: "Beleza",
    desc: "Para salões, esteticistas, maquiadores e marcas de beleza e cosméticos.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1k2xu-0uszOotLQBIEZeZRl11FBzktSe9?usp=sharing",
      feed:      "https://gemini.google.com/gem/1kfSnufKak2fbsv0bQ0E5SAILoD6b_dpp?usp=sharing",
      stories:   "https://gemini.google.com/gem/1_x735faL9SNwpmAd0YA74shBzmnYk7ZD?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Tutoriais de maquiagem, skincare e procedimentos." },
      { icon: "✍️", name: "Legendas", desc: "Copies de serviços, promoções e antes/depois." },
      { icon: "🧵", name: "Carrossel", desc: "Rotinas de beleza, dicas de produtos e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de agendamento, promoções e fidelização." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre tendências de beleza e cuidados." },
    ],
  },
  {
    id: 7, emoji: "⚖️", name: "Advogados & Jurídico", tag: "Jurídico",
    desc: "Para advogados e escritórios que querem gerar autoridade e atrair clientes online.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1ucp35ru20wFlB4JKfMttQfLKB115SlUu?usp=sharing",
      feed:      "https://gemini.google.com/gem/1WpHNUeRrlLtIlqtQPxMPPpgGD3QTKdEY?usp=sharing",
      stories:   "https://gemini.google.com/gem/19yWzWC2ZOFJ1FMPJTcLcpCXI5jpZ3GnJ?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Esclarecimentos jurídicos rápidos em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que constroem autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Direitos, dicas legais e casos explicados." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters jurídicas e captação de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre áreas do direito e orientações legais." },
    ],
  },
  {
    id: 8, emoji: "🏗️", name: "Arquitetura & Reformas", tag: "Construção",
    desc: "Para arquitetos, designers de interiores e empresas de reforma.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1hWPE8hbFz2A5opInqJ23gg8Tvq_TKE0A?usp=sharing",
      feed:      "https://gemini.google.com/gem/1rrBjgLaKVNR1GLxyPX3EkXRjCyi8srBU?usp=sharing",
      stories:   "https://gemini.google.com/gem/1gK06K02jNV34sHcharhb-BdY7QsOKAHw?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Obras em andamento, antes/depois e projetos." },
      { icon: "✍️", name: "Legendas", desc: "Copies técnicos e inspiradores de projetos." },
      { icon: "🧵", name: "Carrossel", desc: "Dicas de decoração, materiais e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Orçamentos, portfólio e captação de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre design, construção e reforma." },
    ],
  },
  {
    id: 9, emoji: "🔧", name: "Reformas & Construção", tag: "Reformas",
    desc: "Para construtoras, empreiteiras e empresas de reforma e manutenção.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1V1cyxLhNVGmjEL2WULpEEbTrC5SYQgS6?usp=sharing",
      feed:      "https://gemini.google.com/gem/1sWdq17OfcmEre-nMF6daBHIXUwHdv398?usp=sharing",
      stories:   "https://gemini.google.com/gem/1i1nnexZ8F0phFWhQCyYO2noayuwNKmaq?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Antes/depois de obras e serviços em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies de captação e apresentação de serviços." },
      { icon: "🧵", name: "Carrossel", desc: "Portfólio de obras e dicas de reforma." },
      { icon: "📧", name: "Email Marketing", desc: "Orçamentos e follow-up de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre reforma, materiais e manutenção." },
    ],
  },
  {
    id: 10, emoji: "📊", name: "Gestores de Tráfego", tag: "Marketing",
    desc: "Para gestores de tráfego e agências de marketing digital.",
    gems: {
      carrossel: "https://gemini.google.com/gem/14r9RIURclojLX81FzeKpJK5XViE9zDz0?usp=sharing",
      feed:      "https://gemini.google.com/gem/1JgXlSWSGEbY95ZsmICzdcrslk0Paiheb?usp=sharing",
      stories:   "https://gemini.google.com/gem/1s17TmwCTgXd6IuKYluxYhlMVFNxdGsA9?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Cases, resultados e bastidores de campanhas." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram autoridade no marketing digital." },
      { icon: "🧵", name: "Carrossel", desc: "Estratégias de tráfego e dicas de anúncios." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de prospecção e apresentação de serviços." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre tráfego pago e marketing digital." },
    ],
  },
  {
    id: 11, emoji: "🩺", name: "Médicos", tag: "Saúde",
    desc: "Para médicos e clínicas que querem construir autoridade e atrair pacientes online.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1GbGubB4sVRpu5DyOgbqD4s9fQGp9W45r?usp=sharing",
      feed:      "https://gemini.google.com/gem/1dxsqyJt1OdHe6vDoUUtABrD4mYaYfLaX?usp=sharing",
      stories:   "https://gemini.google.com/gem/1VgEnYU-D88SyiJMUXv-qX_3N2U20Ii6f?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Educação em saúde e dicas médicas em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que constroem autoridade médica." },
      { icon: "🧵", name: "Carrossel", desc: "Informações de saúde, prevenção e tratamentos." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de captação e relacionamento com pacientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos médicos de autoridade e prevenção." },
    ],
  },
  {
    id: 12, emoji: "✂️", name: "Barbearias", tag: "Barbearia",
    desc: "Para barbearias e barbeiros que querem lotar a agenda pelas redes sociais.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1Z7HrNDcEgoYgfILQ_W_XF5CXCIvMG5JA?usp=sharing",
      feed:      "https://gemini.google.com/gem/1_hMjvCQn-nTTN3fd9iXygyyzrTk7Hrdd?usp=sharing",
      stories:   "https://gemini.google.com/gem/1kPIcw99tyFkkQ-DWMjbF260hfq5onx1B?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Transformações, técnicas e bastidores da barbearia." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram agendamentos e fidelizam clientes." },
      { icon: "🧵", name: "Carrossel", desc: "Tendências de corte, barba e cuidados masculinos." },
      { icon: "📧", name: "Email Marketing", desc: "Promoções, agendamento e fidelização de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre cuidados masculinos e tendências." },
    ],
  },
  {
    id: 13, emoji: "🔢", name: "Contadores", tag: "Contabilidade",
    desc: "Para contadores e escritórios de contabilidade que querem atrair empresas online.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1YM0_DV2LVlDxYMaJR7x4L90ZrnLMmtEC?usp=sharing",
      feed:      "https://gemini.google.com/gem/1fChi8yDCofryxVZ9plkese2OKh4v8StV?usp=sharing",
      stories:   "https://gemini.google.com/gem/1eyCbhQTjOqQ1pZJAajmTMC1fNSeCh9Ti?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas fiscais e contábeis em formato de vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos sobre impostos e gestão financeira." },
      { icon: "🧵", name: "Carrossel", desc: "Obrigações fiscais, dicas e calendário contábil." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters contábeis e captação de empresas." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre contabilidade, impostos e negócios." },
    ],
  },
  {
    id: 14, emoji: "🦷", name: "Dentistas", tag: "Odontologia",
    desc: "Para dentistas e clínicas odontológicas que querem atrair pacientes online.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1oLoeXqVJ2p527xijkqBvmcNlgdx7H5JP?usp=sharing",
      feed:      "https://gemini.google.com/gem/1fzcACVtfILTbs9I0N9HQ_YixKzt7_IZX?usp=sharing",
      stories:   "https://gemini.google.com/gem/1vBDJaDTi2hhfTzqQKCF8p83trbwHSJxh?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Antes/depois, procedimentos e dicas de saúde bucal." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram confiança e agendamentos." },
      { icon: "🧵", name: "Carrossel", desc: "Cuidados com a boca, tratamentos e prevenção." },
      { icon: "📧", name: "Email Marketing", desc: "Lembretes de consulta e captação de pacientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre saúde bucal e procedimentos." },
    ],
  },
  {
    id: 15, emoji: "🌍", name: "Idiomas", tag: "Educação",
    desc: "Para escolas de idiomas, professores e criadores de conteúdo de línguas.",
    gems: {
      carrossel: "https://gemini.google.com/gem/1uA3E0-pFQsx-mSfPIW3rXNZeltokKOD1?usp=sharing",
      feed:      "https://gemini.google.com/gem/1VEshRF4Bxe3VZcl-CFSfKbgGm_96K8kj?usp=sharing",
      stories:   "https://gemini.google.com/gem/1imZmjHwjRGhFUgk5d0zeiaExosGXJQJn?usp=sharing",
    },
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas rápidas de idiomas e expressões em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies que engajam estudantes de línguas." },
      { icon: "🧵", name: "Carrossel", desc: "Vocabulário, gramática e dicas de fluência." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de matrícula e nutrição de alunos." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre aprendizado de idiomas e dicas." },
    ],
  },
];

// ─── ESTADO ───────────────────────────────────────────────────────────────────
let activeAgentId = null;

// ─── ESTILOS ──────────────────────────────────────────────────────────────────
(function injectStyles() {
  const s = document.createElement("style");
  s.textContent = `
    #globalCursor { position:fixed;width:8px;height:8px;background:#00FF88;border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);mix-blend-mode:difference; }
    #globalCursorRing { position:fixed;width:36px;height:36px;border:1.5px solid rgba(0,255,136,0.5);border-radius:50%;pointer-events:none;z-index:99998;transform:translate(-50%,-50%);transition:width .3s,height .3s,border-color .3s; }
    body:has(a:hover) #globalCursorRing,body:has(button:hover) #globalCursorRing,body:has(.agent-item:hover) #globalCursorRing{width:54px;height:54px;border-color:#00FF88;}
    @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
    @keyframes emojiFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-5px) scale(1.1)}}
    @keyframes emojiWiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg) scale(1.12)}75%{transform:rotate(10deg) scale(1.12)}}
    @keyframes emojiBounce{0%,100%{transform:translateY(0)}30%{transform:translateY(-7px) scale(1.14)}60%{transform:translateY(-2px) scale(1.05)}}
    @keyframes emojiPulse{0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.18);filter:brightness(1.4)}}
    @keyframes emojiSpin{0%{transform:rotate(0)}25%{transform:rotate(-12deg) scale(1.1)}75%{transform:rotate(12deg) scale(1.1)}100%{transform:rotate(0)}}
    .agent-item:nth-child(5n+1) .agent-item-emoji{animation:emojiFloat 3.5s ease-in-out infinite}
    .agent-item:nth-child(5n+2) .agent-item-emoji{animation:emojiWiggle 4s ease-in-out infinite}
    .agent-item:nth-child(5n+3) .agent-item-emoji{animation:emojiBounce 3.8s ease-in-out infinite}
    .agent-item:nth-child(5n+4) .agent-item-emoji{animation:emojiPulse 4.2s ease-in-out infinite}
    .agent-item:nth-child(5n+5) .agent-item-emoji{animation:emojiSpin 4.5s ease-in-out infinite}
    .agent-item:nth-child(1) .agent-item-emoji{animation-delay:0s}.agent-item:nth-child(2) .agent-item-emoji{animation-delay:.3s}.agent-item:nth-child(3) .agent-item-emoji{animation-delay:.6s}.agent-item:nth-child(4) .agent-item-emoji{animation-delay:.9s}.agent-item:nth-child(5) .agent-item-emoji{animation-delay:1.2s}.agent-item:nth-child(6) .agent-item-emoji{animation-delay:.15s}.agent-item:nth-child(7) .agent-item-emoji{animation-delay:.45s}.agent-item:nth-child(8) .agent-item-emoji{animation-delay:.75s}.agent-item:nth-child(9) .agent-item-emoji{animation-delay:1.05s}.agent-item:nth-child(10) .agent-item-emoji{animation-delay:.2s}.agent-item:nth-child(11) .agent-item-emoji{animation-delay:.5s}.agent-item:nth-child(12) .agent-item-emoji{animation-delay:.8s}.agent-item:nth-child(13) .agent-item-emoji{animation-delay:1.1s}.agent-item:nth-child(14) .agent-item-emoji{animation-delay:.35s}.agent-item:nth-child(15) .agent-item-emoji{animation-delay:.65s}
    .agent-item:hover .agent-item-emoji{animation-play-state:paused}
    @keyframes detailFloat{0%,100%{transform:translateY(0) rotate(0)}33%{transform:translateY(-7px) rotate(-4deg)}66%{transform:translateY(-3px) rotate(4deg)}}
    .detail-emoji{animation:detailFloat 4s ease-in-out infinite!important}
    .content-type-card .ct-icon{display:inline-block;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
    .content-type-card:hover .ct-icon{transform:scale(1.4) rotate(-6deg)}
    @keyframes slideUpDetail{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    .agent-detail.animate{animation:slideUpDetail .4s cubic-bezier(.22,1,.36,1) both}

    .login-tabs{display:flex;background:rgba(255,255,255,.04);border-radius:10px;padding:4px;margin-bottom:24px;}
    .login-tab{flex:1;padding:9px;background:none;border:none;color:var(--muted);font-family:var(--font-d);font-size:13px;font-weight:700;letter-spacing:.05em;border-radius:7px;cursor:none;transition:background .2s,color .2s;}
    .login-tab.active{background:var(--surface-3);color:var(--text);}
    .forgot-link{text-align:right;margin-top:-8px;}
    .forgot-link button{background:none;border:none;color:var(--primary);font-family:var(--font-m);font-size:11px;letter-spacing:.1em;cursor:none;opacity:.8;transition:opacity .2s;}
    .forgot-link button:hover{opacity:1;}
    .verify-notice{background:rgba(0,255,136,.06);border:1px solid rgba(0,255,136,.2);border-radius:10px;padding:14px 16px;font-size:13px;color:var(--muted);line-height:1.6;text-align:center;display:none;}
    .verify-notice.visible{display:block;}
    .verify-notice strong{color:var(--primary);}
    #toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--surface-3);border:1px solid var(--border-hi);color:var(--text);padding:12px 22px;border-radius:10px;font-size:13px;pointer-events:none;z-index:99999;opacity:0;transition:opacity .3s,transform .3s;white-space:nowrap;}
    #toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
    .gem-buttons{display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;}
    .gem-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:10px;font-family:inherit;font-size:13px;font-weight:600;text-decoration:none;letter-spacing:.04em;transition:transform .2s,box-shadow .2s,opacity .2s;cursor:none;flex:1;justify-content:center;min-width:130px;}
    .gem-btn:hover{transform:translateY(-2px);opacity:.9;}
    .gem-btn-carrossel{background:linear-gradient(135deg,#7C3AED,#5B21B6);color:#fff;box-shadow:0 4px 16px rgba(124,58,237,.35);}
    .gem-btn-feed{background:linear-gradient(135deg,#0EA5E9,#0369A1);color:#fff;box-shadow:0 4px 16px rgba(14,165,233,.35);}
    .gem-btn-stories{background:linear-gradient(135deg,#F59E0B,#D97706);color:#fff;box-shadow:0 4px 16px rgba(245,158,11,.35);}
    .gem-btn svg{flex-shrink:0;}
  `;
  document.head.appendChild(s);
})();

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

// ─── AUTH STATE ───────────────────────────────────────────────────────────────
onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    document.getElementById("loginScreen").style.display = "none";
    const appEl = document.getElementById("mainApp");
    appEl.style.display = "flex";
    appEl.style.flexDirection = "column";
    initApp();
  } else {
    document.getElementById("mainApp").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";
  }
});

// ─── DOM READY ────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderLoginUI();
  initGlobalCursor();
});

// ─── RENDER LOGIN ─────────────────────────────────────────────────────────────
function renderLoginUI() {
  const box = document.querySelector(".login-box");
  if (!box) return;
  box.innerHTML = `
    <div class="login-logo">
      <div class="login-logo-icon">CIA</div>
      <div class="login-logo-text"><span>C.I.A</span><small>Conteúdo Infinito com IA</small></div>
    </div>
    <div class="login-tabs">
      <button class="login-tab active" id="tabEntrar" onclick="switchTab('entrar')">ENTRAR</button>
      <button class="login-tab" id="tabCadastro" onclick="switchTab('cadastro')">CRIAR CONTA</button>
    </div>
    <div id="formEntrar">
      <div class="login-tag">ACESSO RESTRITO</div>
      <p class="login-sub" style="margin-bottom:20px">Insira suas credenciais para continuar</p>
      <div class="login-form">
        <div class="field-wrap"><label>E-mail</label><input type="email" id="loginEmail" placeholder="seu@email.com" autocomplete="off"/></div>
        <div class="field-wrap"><label>Senha</label><input type="password" id="loginPass" placeholder="••••••" autocomplete="off"/></div>
        <div class="forgot-link"><button onclick="handleForgotPassword()">Esqueci minha senha</button></div>
        <div class="login-error" id="loginError"></div>
        <button class="login-btn" id="loginBtn" onclick="handleLogin()">
          <span>ENTRAR</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    <div id="formCadastro" style="display:none">
      <div class="login-tag">NOVO ACESSO</div>
      <p class="login-sub" style="margin-bottom:20px">Crie sua conta para acessar os agentes</p>
      <div class="login-form">
        <div class="field-wrap"><label>E-mail</label><input type="email" id="cadEmail" placeholder="seu@email.com" autocomplete="off"/></div>
        <div class="field-wrap"><label>Senha</label><input type="password" id="cadPass" placeholder="mínimo 6 caracteres" autocomplete="off"/></div>
        <div class="field-wrap"><label>Confirmar Senha</label><input type="password" id="cadPass2" placeholder="repita a senha" autocomplete="off"/></div>
        <div class="login-error" id="cadError"></div>
        <div class="verify-notice" id="verifyNotice">✅ Conta criada! Enviamos um <strong>e-mail de confirmação</strong>. Confirme e volte para entrar.</div>
        <button class="login-btn" id="cadBtn" onclick="handleCadastro()">
          <span>CRIAR CONTA</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    <p class="login-footer">Sistema exclusivo C.I.A · Acesso para membros</p>
  `;
  setTimeout(() => {
    document.getElementById("loginEmail")?.addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });
    document.getElementById("loginPass")?.addEventListener("keydown",  e => { if (e.key === "Enter") handleLogin(); });
    document.getElementById("cadPass2")?.addEventListener("keydown",   e => { if (e.key === "Enter") handleCadastro(); });
  }, 100);
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  const isEntrar = tab === "entrar";
  document.getElementById("tabEntrar").classList.toggle("active", isEntrar);
  document.getElementById("tabCadastro").classList.toggle("active", !isEntrar);
  document.getElementById("formEntrar").style.display   = isEntrar ? "block" : "none";
  document.getElementById("formCadastro").style.display = isEntrar ? "none"  : "block";
}

// ─── ERROS ────────────────────────────────────────────────────────────────────
function firebaseErrorMsg(code) {
  const m = {
    "auth/user-not-found":       "E-mail não encontrado.",
    "auth/wrong-password":       "Senha incorreta.",
    "auth/invalid-email":        "E-mail inválido.",
    "auth/email-already-in-use": "Este e-mail já está cadastrado.",
    "auth/weak-password":        "Senha fraca. Use no mínimo 6 caracteres.",
    "auth/too-many-requests":    "Muitas tentativas. Tente novamente em alguns minutos.",
    "auth/invalid-credential":   "E-mail ou senha incorretos.",
  };
  return m[code] || "Ocorreu um erro. Tente novamente.";
}
function showError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.classList.add("visible");
}
function clearError(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = "";
  el.classList.remove("visible");
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
async function handleLogin() {
  const email = document.getElementById("loginEmail")?.value.trim();
  const pass  = document.getElementById("loginPass")?.value.trim();
  const btn   = document.getElementById("loginBtn");
  clearError("loginError");
  if (!email || !pass) { showError("loginError", "Preencha e-mail e senha."); return; }
  btn.classList.add("loading");
  btn.querySelector("span").textContent = "Verificando...";
  try {
    const cred = await signInWithEmailAndPassword(auth, email, pass);
    if (!cred.user.emailVerified) {
      await signOut(auth);
      showError("loginError", "Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada.");
      btn.classList.remove("loading");
      btn.querySelector("span").textContent = "ENTRAR";
      return;
    }
  } catch (err) {
    showError("loginError", firebaseErrorMsg(err.code));
    btn.classList.remove("loading");
    btn.querySelector("span").textContent = "ENTRAR";
    const box = document.querySelector(".login-box");
    box.style.animation = "none"; box.offsetHeight; box.style.animation = "shake 0.4s ease";
  }
}

// ─── CADASTRO ─────────────────────────────────────────────────────────────────
async function handleCadastro() {
  const email = document.getElementById("cadEmail")?.value.trim();
  const pass  = document.getElementById("cadPass")?.value.trim();
  const pass2 = document.getElementById("cadPass2")?.value.trim();
  const btn   = document.getElementById("cadBtn");
  clearError("cadError");
  document.getElementById("verifyNotice").classList.remove("visible");
  if (!email || !pass || !pass2) { showError("cadError", "Preencha todos os campos."); return; }
  if (pass !== pass2) { showError("cadError", "As senhas não coincidem."); return; }
  if (pass.length < 6) { showError("cadError", "Use no mínimo 6 caracteres."); return; }
  btn.classList.add("loading");
  btn.querySelector("span").textContent = "Criando conta...";
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await sendEmailVerification(cred.user);
    await signOut(auth);
    document.getElementById("verifyNotice").classList.add("visible");
    document.getElementById("cadEmail").value = "";
    document.getElementById("cadPass").value  = "";
    document.getElementById("cadPass2").value = "";
    btn.classList.remove("loading");
    btn.querySelector("span").textContent = "CRIAR CONTA";
  } catch (err) {
    showError("cadError", firebaseErrorMsg(err.code));
    btn.classList.remove("loading");
    btn.querySelector("span").textContent = "CRIAR CONTA";
  }
}

// ─── ESQUECI SENHA ────────────────────────────────────────────────────────────
async function handleForgotPassword() {
  const email = document.getElementById("loginEmail")?.value.trim();
  if (!email) { showError("loginError", "Digite seu e-mail acima primeiro."); return; }
  try {
    await sendPasswordResetEmail(auth, email);
    showToast("📧 E-mail de redefinição enviado!");
    clearError("loginError");
  } catch (err) {
    showError("loginError", firebaseErrorMsg(err.code));
  }
}

// ─── LOGOUT ───────────────────────────────────────────────────────────────────
async function handleLogout() {
  const appEl = document.getElementById("mainApp");
  appEl.style.transition = "opacity 0.3s ease";
  appEl.style.opacity    = "0";
  setTimeout(async () => {
    await signOut(auth);
    activeAgentId = null;
    appEl.style.display = "none";
    appEl.style.opacity = "1";
    renderLoginUI();
  }, 300);
}

// ─── CURSOR ───────────────────────────────────────────────────────────────────
function initGlobalCursor() {
  if (window.matchMedia("(hover: none)").matches) return;
  if (document.getElementById("globalCursor")) return;
  const dot = document.createElement("div"); dot.id = "globalCursor";
  const ring = document.createElement("div"); ring.id = "globalCursorRing";
  document.body.appendChild(dot); document.body.appendChild(ring);
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + "px"; dot.style.top = mouseY + "px";
  });
  (function loop() {
    ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px"; ring.style.top = ringY + "px";
    requestAnimationFrame(loop);
  })();
}

// ─── INIT APP ─────────────────────────────────────────────────────────────────
function initApp() { renderSidebar(); }

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById("agentList");
  list.innerHTML = "";
  AGENTS.forEach((agent, i) => {
    const item = document.createElement("div");
    item.className = "agent-item";
    item.dataset.id = agent.id;
    item.style.animationDelay = `${i * 0.04}s`;
    item.innerHTML = `<div class="agent-item-emoji">${agent.emoji}</div><span class="agent-item-name">${agent.name}</span>`;
    item.addEventListener("click", () => selectAgent(agent.id));
    list.appendChild(item);
  });
}

// ─── SELECIONA AGENTE ─────────────────────────────────────────────────────────
function selectAgent(id) {
  if (activeAgentId === id) return;
  activeAgentId = id;
  document.querySelectorAll(".agent-item").forEach(el => {
    el.classList.toggle("active", Number(el.dataset.id) === id);
  });
  showAgentDetail(AGENTS.find(a => a.id === id));
}

// ─── DETALHE DO AGENTE ────────────────────────────────────────────────────────
function showAgentDetail(agent) {
  document.getElementById("welcomeState").style.display = "none";
  const detail = document.getElementById("agentDetail");
  const ctaHTML = `
    <div class="detail-cta-wrap">
      <div class="detail-cta-text">
        <h4>Pronto para criar conteúdo?</h4>
        <p>Escolha o formato e acesse o agente especializado em ${agent.name}.</p>
      </div>
      <div class="gem-buttons">
        <a href="${agent.gems.carrossel}" target="_blank" rel="noopener" class="gem-btn gem-btn-carrossel">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Carrossel
        </a>
        <a href="${agent.gems.feed}" target="_blank" rel="noopener" class="gem-btn gem-btn-feed">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Feed
        </a>
        <a href="${agent.gems.stories}" target="_blank" rel="noopener" class="gem-btn gem-btn-stories">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="7" y="2" width="10" height="20" rx="2"/></svg>Stories
        </a>
      </div>
    </div>`;
  const contentTypesHTML = agent.contentTypes.map(ct => `
    <div class="content-type-card">
      <div class="ct-icon">${ct.icon}</div>
      <div class="ct-name">${ct.name}</div>
      <div class="ct-desc">${ct.desc}</div>
    </div>`).join("");
  detail.style.display = "block";
  detail.classList.remove("animate");
  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-emoji">${agent.emoji}</div>
      <div class="detail-info">
        <span class="detail-tag">AGENTE · ${agent.tag.toUpperCase()}</span>
        <h1 class="detail-title">${agent.name}</h1>
        <p class="detail-desc">${agent.desc}</p>
      </div>
    </div>
    <div class="detail-body">
      <div>
        <div class="detail-section-title">Tipos de Conteúdo Disponíveis</div>
        <div class="content-types">${contentTypesHTML}</div>
      </div>
      ${ctaHTML}
    </div>`;
  detail.offsetHeight;
  detail.classList.add("animate");
}
