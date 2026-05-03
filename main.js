/* =============================================
   CIA PAINEL — MAIN.JS
   ============================================= */

// ─── DADOS DOS AGENTES ───────────────────────────────────────────────────────
// Quando seus GEMs estiverem prontos, troque o valor de "gemUrl" de cada agente.

const AGENTS = [
  {
    id: 1,
    emoji: "🏋️",
    name: "Fitness & Saúde",
    tag: "Saúde",
    desc: "Conteúdo especializado para personal trainers, nutricionistas e marcas fitness.",
    gemUrl: null, // TODO: cole o link do GEM aqui
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Roteiros prontos para vídeos curtos de treino e nutrição." },
      { icon: "✍️", name: "Legendas", desc: "Copies engajadores para posts de fitness e bem-estar." },
      { icon: "🧵", name: "Carrossel", desc: "Estrutura de slides para educação em saúde." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de nutrição para leads e clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos otimizados sobre treino, dieta e hábitos." },
    ],
  },
  {
    id: 2,
    emoji: "💰",
    name: "Finanças Pessoais",
    tag: "Finanças",
    desc: "Agente para coaches financeiros, consultores e criadores de conteúdo sobre dinheiro.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas rápidas de investimento e finanças em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies que educam e geram autoridade financeira." },
      { icon: "🧵", name: "Carrossel", desc: "Passo a passo de organização financeira em slides." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências para vender cursos ou consultorias." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre investimentos, orçamento e renda extra." },
    ],
  },
  {
    id: 3,
    emoji: "🧘",
    name: "Bem-estar & Mindset",
    tag: "Mindset",
    desc: "Para coaches de vida, psicólogos e criadores de conteúdo sobre autoconhecimento.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Reflexões e práticas de mindfulness em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Textos inspiradores que geram conexão emocional." },
      { icon: "🧵", name: "Carrossel", desc: "Técnicas de meditação, ansiedade e produtividade." },
      { icon: "📧", name: "Email Marketing", desc: "Emails motivacionais e de venda de programas." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre saúde mental, autoestima e hábitos." },
    ],
  },
  {
    id: 4,
    emoji: "🍕",
    name: "Gastronomia & Food",
    tag: "Gastronomia",
    desc: "Agente para chefs, restaurantes, influencers de culinária e food bloggers.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Roteiros de receitas e bastidores de cozinha." },
      { icon: "✍️", name: "Legendas", desc: "Descrições irresistíveis de pratos e receitas." },
      { icon: "🧵", name: "Carrossel", desc: "Receitas passo a passo em formato de slides." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters de receitas e promoções de restaurante." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre culinária, receitas e tendências food." },
    ],
  },
  {
    id: 5,
    emoji: "🏠",
    name: "Imóveis & Real Estate",
    tag: "Imóveis",
    desc: "Para corretores, imobiliárias e investidores que vendem imóveis pelas redes.",
    gemUrl: null,
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
    emoji: "👗",
    name: "Moda & Estilo",
    tag: "Moda",
    desc: "Para stylists, lojas de roupa, influencers de moda e personal shoppers.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Looks do dia, trends e dicas de estilo em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies que vendem looks e geram desejo de compra." },
      { icon: "🧵", name: "Carrossel", desc: "Guias de estilo, combinações e tendências da estação." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de lançamento de coleções e promoções." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre tendências, styling e moda consciente." },
    ],
  },
  {
    id: 7,
    emoji: "💻",
    name: "Tech & Tecnologia",
    tag: "Tech",
    desc: "Para devs, empresas de software, criadores tech e influencers de tecnologia.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Demos de produto, tutoriais e novidades tech." },
      { icon: "✍️", name: "Legendas", desc: "Copies técnicos e acessíveis para o público tech." },
      { icon: "🧵", name: "Carrossel", desc: "Explicações de conceitos, ferramentas e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de onboarding e newsletters de tech." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre IA, dev, gadgets e inovação." },
    ],
  },
  {
    id: 8,
    emoji: "🎓",
    name: "Educação & Infoprodutos",
    tag: "Educação",
    desc: "Para professores, criadores de cursos, mentores e especialistas em EAD.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Aulas rápidas, depoimentos e bastidores de cursos." },
      { icon: "✍️", name: "Legendas", desc: "Copies de lançamento e autoridade no nicho." },
      { icon: "🧵", name: "Carrossel", desc: "Conteúdo educativo e teasers de módulos." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de lançamento e nutrição de leads." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos que atraem alunos e constroem autoridade." },
    ],
  },
  {
    id: 9,
    emoji: "✈️",
    name: "Viagem & Turismo",
    tag: "Turismo",
    desc: "Para agências de viagem, influencers de travel e empreendedores do turismo.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Roteiros de destinos e experiências de viagem." },
      { icon: "✍️", name: "Legendas", desc: "Copies que despertam o desejo de viajar." },
      { icon: "🧵", name: "Carrossel", desc: "Guias de destinos, dicas e roteiros de viagem." },
      { icon: "📧", name: "Email Marketing", desc: "Pacotes, ofertas e newsletters de turismo." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre destinos, dicas e experiências." },
    ],
  },
  {
    id: 10,
    emoji: "🐾",
    name: "Pet & Veterinário",
    tag: "Pet",
    desc: "Para veterinários, pet shops, criadores e influencers do mundo animal.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Dicas de cuidado e momentos fofos com pets." },
      { icon: "✍️", name: "Legendas", desc: "Copies que engajam amantes de animais." },
      { icon: "🧵", name: "Carrossel", desc: "Guias de saúde, alimentação e comportamento animal." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters de produtos e dicas para tutores." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre raças, cuidados e saúde pet." },
    ],
  },
  {
    id: 11,
    emoji: "💄",
    name: "Beleza & Estética",
    tag: "Beleza",
    desc: "Para salões, esteticistas, maquiadores e marcas de beleza e cosméticos.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Tutoriais de maquiagem, skincare e procedimentos." },
      { icon: "✍️", name: "Legendas", desc: "Copies de serviços, promoções e antes/depois." },
      { icon: "🧵", name: "Carrossel", desc: "Rotinas de beleza, dicas de produtos e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Emails de agendamento, promoções e fidelização." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre tendências de beleza e cuidados." },
    ],
  },
  {
    id: 12,
    emoji: "⚖️",
    name: "Jurídico & Advocacia",
    tag: "Jurídico",
    desc: "Para advogados e escritórios que querem gerar autoridade e atrair clientes online.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Esclarecimentos jurídicos rápidos em vídeo." },
      { icon: "✍️", name: "Legendas", desc: "Copies educativos que constroem autoridade." },
      { icon: "🧵", name: "Carrossel", desc: "Direitos, dicas legais e casos explicados." },
      { icon: "📧", name: "Email Marketing", desc: "Newsletters jurídicas e captação de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre áreas do direito e orientações legais." },
    ],
  },
  {
    id: 13,
    emoji: "🏗️",
    name: "Construção & Arquitetura",
    tag: "Construção",
    desc: "Para arquitetos, construtoras, designers de interiores e lojas de materiais.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Obras em andamento, antes/depois e projetos." },
      { icon: "✍️", name: "Legendas", desc: "Copies técnicos e inspiradores de projetos." },
      { icon: "🧵", name: "Carrossel", desc: "Dicas de decoração, materiais e tendências." },
      { icon: "📧", name: "Email Marketing", desc: "Orçamentos, portfólio e captação de clientes." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre design, construção e reforma." },
    ],
  },
  {
    id: 14,
    emoji: "🎵",
    name: "Música & Entretenimento",
    tag: "Música",
    desc: "Para artistas, produtores musicais, DJs e criadores de conteúdo de entretenimento.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Clipes, bastidores e lançamentos musicais." },
      { icon: "✍️", name: "Legendas", desc: "Copies que geram hype e engajamento de fãs." },
      { icon: "🧵", name: "Carrossel", desc: "Curiosidades, letras e história musical." },
      { icon: "📧", name: "Email Marketing", desc: "Shows, lançamentos e newsletters para fãs." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos sobre música, artistas e tendências." },
    ],
  },
  {
    id: 15,
    emoji: "🛒",
    name: "E-commerce & Varejo",
    tag: "E-commerce",
    desc: "Para lojas virtuais, dropshippers e empreendedores do comércio digital.",
    gemUrl: null,
    contentTypes: [
      { icon: "📸", name: "Reels & Stories", desc: "Apresentação de produtos, unboxing e promoções." },
      { icon: "✍️", name: "Legendas", desc: "Copies de venda persuasivos com gatilhos mentais." },
      { icon: "🧵", name: "Carrossel", desc: "Catálogos, comparativos e benefícios de produtos." },
      { icon: "📧", name: "Email Marketing", desc: "Sequências de carrinho abandonado e promoções." },
      { icon: "📝", name: "Blog / SEO", desc: "Artigos que atraem compradores orgânicos." },
    ],
  },
];

// ─── ESTADO DA APP ────────────────────────────────────────────────────────────
let activeAgentId = null;

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function handleLogin() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const btn  = document.getElementById("loginBtn");
  const err  = document.getElementById("loginError");

  // Simula loading
  btn.classList.add("loading");
  btn.querySelector("span").textContent = "Verificando...";
  err.classList.remove("visible");

  setTimeout(() => {
    if (user === "admin" && pass === "admin") {
      // Login OK — anima saída e mostra app
      const loginScreen = document.getElementById("loginScreen");
      loginScreen.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      loginScreen.style.opacity = "0";
      loginScreen.style.transform = "scale(0.97)";

      setTimeout(() => {
        loginScreen.style.display = "none";
        const app = document.getElementById("mainApp");
        app.style.display = "flex";
        app.style.flexDirection = "column";
        initApp();
      }, 400);
    } else {
      // Erro
      err.classList.add("visible");
      btn.classList.remove("loading");
      btn.querySelector("span").textContent = "ENTRAR";

      // Shake no box
      const box = document.querySelector(".login-box");
      box.style.animation = "none";
      box.offsetHeight; // reflow
      box.style.animation = "shake 0.4s ease";
    }
  }, 600);
}

// Shake keyframe injetado dinamicamente
(function injectShake() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-5px); }
      80% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
})();

// Enter para login
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
  app.style.opacity = "0";

  setTimeout(() => {
    app.style.display = "none";
    app.style.opacity = "1";

    // Limpa estado
    activeAgentId = null;
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";
    document.getElementById("loginError").classList.remove("visible");

    const loginScreen = document.getElementById("loginScreen");
    loginScreen.style.display = "flex";
    loginScreen.style.opacity = "0";
    loginScreen.style.transform = "scale(0.97)";
    loginScreen.offsetHeight;
    loginScreen.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    loginScreen.style.opacity = "1";
    loginScreen.style.transform = "scale(1)";
  }, 300);
}

// ─── INICIALIZA APP ───────────────────────────────────────────────────────────
function initApp() {
  renderSidebar();
  initCursor();
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById("agentList");
  list.innerHTML = "";

  AGENTS.forEach((agent, i) => {
    const item = document.createElement("div");
    item.className = "agent-item";
    item.dataset.id = agent.id;
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

  // Atualiza sidebar
  document.querySelectorAll(".agent-item").forEach(el => {
    el.classList.toggle("active", Number(el.dataset.id) === id);
  });

  const agent = AGENTS.find(a => a.id === id);
  showAgentDetail(agent);
}

// ─── DETALHE DO AGENTE ────────────────────────────────────────────────────────
function showAgentDetail(agent) {
  const welcome = document.getElementById("welcomeState");
  const detail  = document.getElementById("agentDetail");

  welcome.style.display = "none";

  // Monta CTA conforme status do GEM
  const ctaHTML = agent.gemUrl
    ? `
      <div class="detail-cta-wrap">
        <div class="detail-cta-text">
          <h4>Pronto para criar conteúdo?</h4>
          <p>Acesse o agente especializado em ${agent.name} e gere conteúdo ilimitado com IA.</p>
        </div>
        <a href="${agent.gemUrl}" target="_blank" rel="noopener" class="detail-cta-btn">
          Acessar Agente
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `
    : `
      <div class="detail-cta-wrap">
        <div class="detail-cta-text">
          <span class="placeholder-badge">EM BREVE</span>
          <h4>Agente sendo preparado</h4>
          <p>O GEM especializado em ${agent.name} está sendo configurado. Em breve estará disponível aqui.</p>
        </div>
        <span class="detail-cta-btn" style="opacity:0.4; pointer-events:none; cursor:default;">
          Em Breve
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </span>
      </div>
    `;

  // Monta tipos de conteúdo
  const contentTypesHTML = agent.contentTypes.map(ct => `
    <div class="content-type-card">
      <div class="ct-icon">${ct.icon}</div>
      <div class="ct-name">${ct.name}</div>
      <div class="ct-desc">${ct.desc}</div>
    </div>
  `).join("");

  detail.style.display = "none";
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

  // Força re-trigger da animação
  detail.style.display = "block";
  detail.style.animation = "none";
  detail.offsetHeight; // reflow
  detail.style.animation = "";
}

// ─── CURSOR CUSTOMIZADO ───────────────────────────────────────────────────────
function initCursor() {
  const cursor     = document.getElementById("cursor");
  const cursorRing = document.getElementById("cursorRing");

  if (!cursor || !cursorRing) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top  = mouseY + "px";
  });

  // Ring com lag suave
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + "px";
    cursorRing.style.top  = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();
}
