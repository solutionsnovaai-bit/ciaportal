/* =============================================
   CIA PAINEL — MAIN.JS
   ============================================= */

// ─── DADOS DOS AGENTES ───────────────────────────────────────────────────────
const AGENTS = [
  {
    id: 1,
    emoji: "🏋️",
    name: "Fitness & Personal",
    tag: "Fitness",
    desc: "Conteúdo especializado para personal trainers e marcas fitness.",
    gemUrl: "https://gemini.google.com/gem/1a5p9Ihz8KRrPz8nm3PZWjylUg3UcmqGm?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Roteiros prontos para vídeos curtos de treino." },
      { icon: "✍️", name: "Legendas", desc: "Copies engajadores para posts de fitness." },
      { icon: "🧵", name: "Carrossel", desc: "Estrutura de slides para educação em saúde." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de nutrição para leads e clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos otimizados sobre treino e hábitos." },
    ],
  },
  {
    id: 2,
    emoji: "🥗",
    name: "Nutricionistas",
    tag: "Nutrição",
    desc: "Agente para nutricionistas que querem crescer nas redes e atrair pacientes.",
    gemUrl: "https://gemini.google.com/gem/1rDtwK_Tvn4z7p5_mLOxm3rt3JaGRVaG-?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas rápidas de alimentação e receitas saudáveis." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que geram autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Guias nutricionais em formato de slides." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências para captação e fidelização de pacientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre dieta, saúde e alimentação." },
    ],
  },
  {
    id: 3,
    emoji: "🧠",
    name: "Psicólogos",
    tag: "Psicologia",
    desc: "Para psicólogos e terapeutas que querem gerar autoridade e atrair clientes online.",
    gemUrl: "https://gemini.google.com/gem/1dRIzP0GodxLF2jJFx_iLtVwb6o3p7TSK?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Reflexões e dicas de saúde mental em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Textos que geram conexão emocional e autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Técnicas de autoconhecimento e bem-estar." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de captação e nutrição de leads." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre saúde mental e autoestima." },
    ],
  },
  {
    id: 4,
    emoji: "🍕",
    name: "Restaurantes",
    tag: "Gastronomia",
    desc: "Agente para restaurantes, chefs e food businesses que vendem pela internet.",
    gemUrl: "https://gemini.google.com/gem/17bTmMW2dZuxyFDaW36zc4O72VthswdSN?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Bastidores de cozinha, pratos e promoções." },
      { icon: "✍️", name: "Legendas", desc: "Descrições irresistíveis de pratos e cardápios." },
      { icon: "🧵", name: "Carrossel", desc: "Receitas passo a passo e apresentação de menu." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters de promoções e eventos do restaurante." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre culinária e tendências gastronômicas." },
    ],
  },
  {
    id: 5,
    emoji: "🏠",
    name: "Corretores & Imobiliárias",
    tag: "Imóveis",
    desc: "Para corretores e imobiliárias que vendem imóveis pelas redes sociais.",
    gemUrl: "https://gemini.google.com/gem/15CqkVKec62Q-aZJBrsCwEMJuOGG0XnBJ?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Tours virtuais e apresentação de imóveis em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies persuasivos para anúncios e lançamentos." },
      { icon: "🧵", name: "Carrossel", desc: "Dicas de compra, venda e investimento imobiliário." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de follow-up e apresentação de imóveis." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre mercado imobiliário e financiamento." },
    ],
  },
  {
    id: 6,
    emoji: "💄",
    name: "Estética & Beleza",
    tag: "Beleza",
    desc: "Para salões, esteticistas, maquiadores e marcas de beleza e cosméticos.",
    gemUrl: "https://gemini.google.com/gem/1k2xu-0uszOotLQBIEZeZRl11FBzktSe9?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Tutoriais de maquiagem, skincare e procedimentos." },
      { icon: "✍️", name: "Legendas", desc: "Copies de serviços, promoções e antes/depois." },
      { icon: "🧵", name: "Carrossel", desc: "Rotinas de beleza, dicas de produtos e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de agendamento, promoções e fidelização." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre tendências de beleza e cuidados." },
    ],
  },
  {
    id: 7,
    emoji: "⚖️",
    name: "Advogados & Jurídico",
    tag: "Jurídico",
    desc: "Para advogados e escritórios que querem gerar autoridade e atrair clientes online.",
    gemUrl: "https://gemini.google.com/gem/1ucp35ru20wFlB4JKfMttQfLKB115SlUu?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Esclarecimentos jurídicos rápidos em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que constroem autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Direitos, dicas legais e casos explicados." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters jurídicas e captação de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre áreas do direito e orientações legais." },
    ],
  },
  {
    id: 8,
    emoji: "🏗️",
    name: "Arquitetura & Reformas",
    tag: "Construção",
    desc: "Para arquitetos, designers de interiores e empresas de reforma.",
    gemUrl: "https://gemini.google.com/gem/1hWPE8hbFz2A5opInqJ23gg8Tvq_TKE0A?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Obras em andamento, antes/depois e projetos." },
      { icon: "✍️", name: "Legendas", desc: "Copies técnicos e inspiradores de projetos." },
      { icon: "🧵", name: "Carrossel", desc: "Dicas de decoração, materiais e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Orçamentos, portfólio e captação de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre design, construção e reforma." },
    ],
  },
  {
    id: 9,
    emoji: "🔧",
    name: "Reformas & Construção",
    tag: "Reformas",
    desc: "Para construtoras, empreiteiras e empresas de reforma e manutenção.",
    gemUrl: "https://gemini.google.com/gem/1V1cyxLhNVGmjEL2WULpEEbTrC5SYQgS6?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Antes/depois de obras e serviços em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies de captação e apresentação de serviços." },
      { icon: "🧵", name: "Carrossel", desc: "Portfólio de obras e dicas de reforma." },
      { icon: "📧", name: "Email Marketing", desc: "Orçamentos e follow-up de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre reforma, materiais e manutenção." },
    ],
  },
  {
    id: 10,
    emoji: "📊",
    name: "Gestores de Tráfego",
    tag: "Marketing",
    desc: "Para gestores de tráfego e agências de marketing digital.",
    gemUrl: "https://gemini.google.com/gem/14r9RIURclojLX81FzeKpJK5XViE9zDz0?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Cases, resultados e bastidores de campanhas." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram autoridade no marketing digital." },
      { icon: "🧵", name: "Carrossel", desc: "Estratégias de tráfego e dicas de anúncios." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de prospecção e apresentação de serviços." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre tráfego pago e marketing digital." },
    ],
  },
  {
    id: 11,
    emoji: "🩺",
    name: "Médicos",
    tag: "Saúde",
    desc: "Para médicos e clínicas que querem construir autoridade e atrair pacientes online.",
    // FIX: link corrigido (era fQgiWp9W45r, correto é fQGp9W45r)
    gemUrl: "https://gemini.google.com/gem/1GbGubB4sVRpu5DyOgbqD4s9fQGp9W45r?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Educação em saúde e dicas médicas em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que constroem autoridade médica." },
      { icon: "🧵", name: "Carrossel", desc: "Informações de saúde, prevenção e tratamentos." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de captação e relacionamento com pacientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos médicos de autoridade e prevenção." },
    ],
  },
  {
    id: 12,
    emoji: "✂️",
    name: "Barbearias",
    tag: "Barbearia",
    desc: "Para barbearias e barbeiros que querem lotar a agenda pelas redes sociais.",
    gemUrl: "https://gemini.google.com/gem/1Z7HrNDcEgoYgfILQ_W_XF5CXCIvMG5JA?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Transformações, técnicas e bastidores da barbearia." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram agendamentos e fidelizam clientes." },
      { icon: "🧵", name: "Carrossel", desc: "Tendências de corte, barba e cuidados masculinos." },
      { icon: "📧", name: "Email Marketing", desc: "Promoções, agendamento e fidelização de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre cuidados masculinos e tendências." },
    ],
  },
  {
    id: 13,
    emoji: "🔢",
    name: "Contadores",
    tag: "Contabilidade",
    desc: "Para contadores e escritórios de contabilidade que querem atrair empresas online.",
    gemUrl: "https://gemini.google.com/gem/1YM0_DV2LVlDxYMaJR7x4L90ZrnLMmtEC?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas fiscais e contábeis em formato de vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos sobre impostos e gestão financeira." },
      { icon: "🧵", name: "Carrossel", desc: "Obrigações fiscais, dicas e calendário contábil." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters contábeis e captação de empresas." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre contabilidade, impostos e negócios." },
    ],
  },
  {
    id: 14,
    emoji: "🦷",
    name: "Dentistas",
    tag: "Odontologia",
    desc: "Para dentistas e clínicas odontológicas que querem atrair pacientes online.",
    gemUrl: "https://gemini.google.com/gem/1oLoeXqVJ2p527xijkqBvmcNlgdx7H5JP?usp=sharing",
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Antes/depois, procedimentos e dicas de saúde bucal." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram confiança e agendamentos." },
      { icon: "🧵", name: "Carrossel", desc: "Cuidados com a boca, tratamentos e prevenção." },
      { icon: "📧", name: "Email Marketing", desc: "Lembretes de consulta e captação de pacientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre saúde bucal e procedimentos." },
    ],
  },
  {
    id: 15,
    emoji: "🌍",
    name: "Idiomas",
    tag: "Educação",
    desc: "Para escolas de idiomas, professores e criadores de conteúdo de línguas.",
    gemUrl: "https://gemini.google.com/gem/1uA3E0-pFQsx-mSfPIW3rXNZeltokKOD1?usp=sharing",
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

// ─── INJEÇÃO DE ESTILOS GLOBAIS ───────────────────────────────────────────────
(function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* ── Cursor global ── */
    #globalCursor {
      position: fixed;
      width: 8px; height: 8px;
      background: #00FF88;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      mix-blend-mode: difference;
    }
    #globalCursorRing {
      position: fixed;
      width: 36px; height: 36px;
      border: 1.5px solid rgba(0,255,136,0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 99998;
      transform: translate(-50%, -50%);
      transition: width 0.3s, height 0.3s, border-color 0.3s;
    }
    body:has(a:hover) #globalCursorRing,
    body:has(button:hover) #globalCursorRing,
    body:has(.agent-item:hover) #globalCursorRing {
      width: 54px; height: 54px;
      border-color: #00FF88;
    }

    /* ── Shake no erro de login ── */
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-8px); }
      40%       { transform: translateX(8px); }
      60%       { transform: translateX(-5px); }
      80%       { transform: translateX(5px); }
    }

    /* ── Animações dos emojis da sidebar ── */
    @keyframes emojiFloat {
      0%, 100% { transform: translateY(0) scale(1); }
      50%       { transform: translateY(-5px) scale(1.1); }
    }
    @keyframes emojiWiggle {
      0%, 100% { transform: rotate(0deg); }
      25%       { transform: rotate(-10deg) scale(1.12); }
      75%       { transform: rotate(10deg) scale(1.12); }
    }
    @keyframes emojiBounce {
      0%, 100% { transform: translateY(0); }
      30%       { transform: translateY(-7px) scale(1.14); }
      60%       { transform: translateY(-2px) scale(1.05); }
    }
    @keyframes emojiPulse {
      0%, 100% { transform: scale(1); filter: brightness(1); }
      50%       { transform: scale(1.18); filter: brightness(1.4); }
    }
    @keyframes emojiSpin {
      0%   { transform: rotate(0deg); }
      25%  { transform: rotate(-12deg) scale(1.1); }
      75%  { transform: rotate(12deg) scale(1.1); }
      100% { transform: rotate(0deg); }
    }

    .agent-item:nth-child(5n+1) .agent-item-emoji { animation: emojiFloat  3.5s ease-in-out infinite; }
    .agent-item:nth-child(5n+2) .agent-item-emoji { animation: emojiWiggle 4.0s ease-in-out infinite; }
    .agent-item:nth-child(5n+3) .agent-item-emoji { animation: emojiBounce 3.8s ease-in-out infinite; }
    .agent-item:nth-child(5n+4) .agent-item-emoji { animation: emojiPulse  4.2s ease-in-out infinite; }
    .agent-item:nth-child(5n+5) .agent-item-emoji { animation: emojiSpin   4.5s ease-in-out infinite; }

    .agent-item:nth-child(1)  .agent-item-emoji { animation-delay: 0.00s; }
    .agent-item:nth-child(2)  .agent-item-emoji { animation-delay: 0.30s; }
    .agent-item:nth-child(3)  .agent-item-emoji { animation-delay: 0.60s; }
    .agent-item:nth-child(4)  .agent-item-emoji { animation-delay: 0.90s; }
    .agent-item:nth-child(5)  .agent-item-emoji { animation-delay: 1.20s; }
    .agent-item:nth-child(6)  .agent-item-emoji { animation-delay: 0.15s; }
    .agent-item:nth-child(7)  .agent-item-emoji { animation-delay: 0.45s; }
    .agent-item:nth-child(8)  .agent-item-emoji { animation-delay: 0.75s; }
    .agent-item:nth-child(9)  .agent-item-emoji { animation-delay: 1.05s; }
    .agent-item:nth-child(10) .agent-item-emoji { animation-delay: 0.20s; }
    .agent-item:nth-child(11) .agent-item-emoji { animation-delay: 0.50s; }
    .agent-item:nth-child(12) .agent-item-emoji { animation-delay: 0.80s; }
    .agent-item:nth-child(13) .agent-item-emoji { animation-delay: 1.10s; }
    .agent-item:nth-child(14) .agent-item-emoji { animation-delay: 0.35s; }
    .agent-item:nth-child(15) .agent-item-emoji { animation-delay: 0.65s; }

    .agent-item:hover .agent-item-emoji {
      animation-play-state: paused;
    }

    /* ── Emoji do card de detalhe ── */
    @keyframes detailFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      33%       { transform: translateY(-7px) rotate(-4deg); }
      66%       { transform: translateY(-3px) rotate(4deg); }
    }
    .detail-emoji {
      animation: detailFloat 4s ease-in-out infinite !important;
    }

    /* ── Ícones dos content-type-card ── */
    .content-type-card .ct-icon {
      display: inline-block;
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }
    .content-type-card:hover .ct-icon {
      transform: scale(1.4) rotate(-6deg);
    }

    /* ── Animação slideUp para o agent-detail ── */
    @keyframes slideUpDetail {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .agent-detail.animate {
      animation: slideUpDetail 0.4s cubic-bezier(0.22,1,0.36,1) both;
    }
  `;
  document.head.appendChild(style);
})();

// ─── CURSOR GLOBAL (único sistema) ───────────────────────────────────────────
(function initGlobalCursor() {
  // Não inicializa cursor em mobile/touch
  if (window.matchMedia("(hover: none)").matches) return;
  if (document.getElementById("globalCursor")) return;

  const dot  = document.createElement("div");
  dot.id     = "globalCursor";
  const ring = document.createElement("div");
  ring.id    = "globalCursorRing";

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top  = mouseY + "px";
  });

  (function loop() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top  = ringY + "px";
    requestAnimationFrame(loop);
  })();
})();

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function handleLogin() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const btn  = document.getElementById("loginBtn");
  const err  = document.getElementById("loginError");

  btn.classList.add("loading");
  btn.querySelector("span").textContent = "Verificando...";
  err.classList.remove("visible");

  setTimeout(() => {
    if (user === "admin" && pass === "admin") {
      const loginScreen = document.getElementById("loginScreen");
      loginScreen.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      loginScreen.style.opacity    = "0";
      loginScreen.style.transform  = "scale(0.97)";

      setTimeout(() => {
        loginScreen.style.display = "none";
        const app = document.getElementById("mainApp");
        app.style.display       = "flex";
        app.style.flexDirection = "column";
        initApp();
      }, 400);

    } else {
      err.classList.add("visible");
      btn.classList.remove("loading");
      btn.querySelector("span").textContent = "ENTRAR";

      const box = document.querySelector(".login-box");
      box.style.animation = "none";
      box.offsetHeight; // force reflow
      box.style.animation = "shake 0.4s ease";
    }
  }, 600);
}

document.addEventListener("DOMContentLoaded", () => {
  ["loginUser", "loginPass"].forEach(id => {
    document.getElementById(id)?.addEventListener("keydown", e => {
      if (e.key === "Enter") handleLogin();
    });
  });
});

// ─── LOGOUT ───────────────────────────────────────────────────────────────────
function handleLogout() {
  const app = document.getElementById("mainApp");
  app.style.transition = "opacity 0.3s ease";
  app.style.opacity    = "0";

  setTimeout(() => {
    app.style.display = "none";
    app.style.opacity = "1";
    activeAgentId     = null;

    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";
    document.getElementById("loginError").classList.remove("visible");

    const loginScreen           = document.getElementById("loginScreen");
    loginScreen.style.display   = "flex";
    loginScreen.style.opacity   = "0";
    loginScreen.style.transform = "scale(0.97)";
    loginScreen.offsetHeight; // force reflow
    loginScreen.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    loginScreen.style.opacity    = "1";
    loginScreen.style.transform  = "scale(1)";
  }, 300);
}

// ─── INICIALIZA APP ───────────────────────────────────────────────────────────
function initApp() {
  renderSidebar();
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById("agentList");
  list.innerHTML = "";

  AGENTS.forEach((agent, i) => {
    const item = document.createElement("div");
    item.className            = "agent-item";
    item.dataset.id           = agent.id;
    item.style.animationDelay = `${i * 0.04}s`;
    item.innerHTML = `
      <div class="agent-item-emoji">${agent.emoji}</div>
      <span class="agent-item-name">${agent.name}</span>
    `;
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
  const welcome = document.getElementById("welcomeState");
  const detail  = document.getElementById("agentDetail");

  welcome.style.display = "none";

  const ctaHTML = `
    <div class="detail-cta-wrap">
      <div class="detail-cta-text">
        <h4>Pronto para criar conteúdo?</h4>
        <p>Acesse o agente especializado em ${agent.name} e gere conteúdo ilimitado com IA.</p>
      </div>
      <a href="${agent.gemUrl}" target="_blank" rel="noopener" class="detail-cta-btn">
        Acessar C.I.A
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>`;

  const contentTypesHTML = agent.contentTypes.map(ct => `
    <div class="content-type-card">
      <div class="ct-icon">${ct.icon}</div>
      <div class="ct-name">${ct.name}</div>
      <div class="ct-desc">${ct.desc}</div>
    </div>
  `).join("");

  // FIX: animação re-disparada corretamente via classe
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
    </div>
  `;

  // Força reflow e adiciona classe para disparar animação
  detail.offsetHeight;
  detail.classList.add("animate");
}
