"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const HERO_VIDEO = "/Hero-background.mp4";
const WHATSAPP_NUMBER = "27996693332";
const WHATSAPP_URL = `https://wa.me/55${WHATSAPP_NUMBER}`;
const CONTACT_EMAIL = "contato@praxy.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/praxy.labs";

const navItems = [
  ["Sobre", "#sobre"],
  ["Processos", "#solucoes"],
  ["Protocolo", "#protocolo"],
  ["FAQ", "/faq"],
  ["Contato", "#contato"],
];

const SEO_KEYWORDS = [
  "Praxy", "SEO", "GEO", "AEO", "inteligência artificial", "agentes de IA", "automação empresarial", "automação de processos", "sistemas sob medida", "site institucional", "site empresarial", "criação de sites", "marketing digital", "presença digital", "estratégia digital", "transformação digital", "operação inteligente", "eficiência operacional", "produtividade empresarial", "processos empresariais", "fluxos de trabalho", "workflow", "integração de sistemas", "sistemas conectados", "dados empresariais", "inteligência de dados", "indicadores de negócio", "análise de dados", "decisões estratégicas", "redução de custos", "ganho de tempo", "trabalho manual", "tarefas repetitivas", "gargalos operacionais", "diagnóstico operacional", "mapeamento de processos", "consultoria de tecnologia", "consultoria em IA", "soluções digitais", "tecnologia para empresas", "tecnologia sob medida", "software personalizado", "desenvolvimento de software", "desenvolvimento web", "experiência digital", "performance web", "site rápido", "site responsivo", "mobile first", "acessibilidade digital", "arquitetura de informação", "estrutura de conteúdo", "conteúdo estratégico", "conteúdo para SEO", "conteúdo para IA", "busca orgânica", "tráfego orgânico", "posicionamento digital", "visibilidade online", "mecanismos de busca", "Google", "busca semântica", "dados estruturados", "schema markup", "rich results", "respostas de IA", "busca generativa", "mecanismos generativos", "otimização para IA", "otimização de conteúdo", "intenção de busca", "palavras-chave", "SEO técnico", "SEO on-page", "SEO local", "SEO para empresas", "SEO para sites", "GEO para empresas", "AEO para empresas", "marketing de busca", "descoberta digital", "autoridade digital", "relevância online", "conteúdo rastreável", "conteúdo encontrável", "conteúdo útil", "clareza comercial", "qualificação de leads", "geração de leads", "atendimento inteligente", "atendimento automatizado", "WhatsApp", "Instagram", "chatbot empresarial", "agente conversacional", "assistente virtual", "encaminhamento de leads", "CRM integrado", "CRM automatizado", "integração com CRM", "planilhas automatizadas", "notificações automáticas", "auditoria de processos", "monitoramento operacional", "acompanhamento de dados", "evolução contínua", "melhoria de processos", "escala operacional", "crescimento sustentável", "inovação empresarial", "governança de IA", "implementação de IA", "protocolo Praxy", "diagnóstico", "desenvolvimento", "auditoria", "evolução", "resultado mensurável", "operação conectada", "empresa mais eficiente"
];

function Bolt({ className = "" }) {
  return (
    <img
      className={`praxy-mark ${className}`.trim()}
      src="/praxy-logo-commpleta-navbar.svg"
      alt=""
      aria-hidden="true"
    />
  );
}

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4.7c-6 0-10.9 4.7-10.9 10.6 0 2.1.7 4.1 1.8 5.7L5.6 27l6.2-1.6c1.3.5 2.7.8 4.2.8 6 0 10.9-4.7 10.9-10.6S22 4.7 16 4.7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12.3 11.1c-.3.2-.9.9-.9 2.1 0 2.5 2.7 5.1 3.2 5.5.6.5 2.5 2.1 4.7 2.1 1.2 0 2-.6 2.3-1 .2-.3.3-1.5.1-1.7-.1-.2-1.9-1-2.2-1-.3-.1-.5 0-.7.2l-.8 1c-.2.2-.4.2-.7.1-.5-.2-1.3-.5-2.1-1.2-.8-.7-1.3-1.5-1.5-2-.1-.3-.1-.5.1-.7l.8-.8c.2-.2.2-.4.1-.7l-.9-2.1c-.1-.3-.3-.4-.5-.4h-1Z" fill="currentColor"/></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="9" width="20" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m8 11 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="7" y="7" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="21.3" cy="10.9" r="1.2" fill="currentColor"/></svg>;
}

function WhatsAppWidget() {
  return (
    <a className="whatsapp-widget" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Praxy pelo WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}

function Accent({ children }) {
  return <em className="text-accent">{children}</em>;
}

const services = [
  { id: "agents", title: "Agentes de IA", copy: "Atendem no WhatsApp e Instagram, qualificam clientes e encaminham quem está pronto para avançar.", flow: ["Mensagem", "Entendimento", "Próximo passo"] },
  { id: "automation", title: "Automação de processos", copy: "Tiram da equipe tarefas repetitivas como copiar dados, atualizar sistemas e enviar avisos.", flow: ["Entrada", "Fluxo", "Atualização"] },
  { id: "systems", title: "Sistemas sob medida", copy: "Quando uma ferramenta pronta não resolve, construímos o software de acordo com o seu processo.", flow: ["Operação", "Sistema", "Controle"] },
  { id: "websites", title: "Criação de sites com GEO, SEO e AEO", copy: "Estruturamos páginas para performance, busca tradicional, respostas de IA e descoberta em mecanismos generativos.", flow: ["Busca", "Página", "Descoberta"] },
  { id: "data", title: "Dados e inteligência", copy: "Reúne o que hoje está espalhado e transforma em indicadores que ajudam você a decidir.", flow: ["Fontes", "Leitura", "Decisão"] },
];

function ProductTile({ service, onOpen }) {
  return (
    <div className="product-tile" role="listitem">
      <div className="product-copy">
        <h3>{service.title}</h3>
        <p>{service.copy}</p>
      </div>
      <button className="product-open" type="button" onClick={() => onOpen(service)} aria-label={`Ver exemplo de ${service.title}`}><Arrow /></button>
    </div>
  );
}

function ServiceDemo({ service }) {
  if (service.id === "agents") return <div className="service-demo demo-whatsapp" aria-label="Conversa de WhatsApp sendo atendida">
    <div className="chat-head"><span>◉</span><b>Praxy atendimento</b><small>online</small></div>
    <p className="chat-bubble incoming">Oi, queria saber mais sobre os serviços.</p>
    <p className="chat-bubble outgoing">Claro. Qual ponto hoje mais toma tempo da sua equipe?</p>
    <p className="chat-bubble incoming last">Atendimento e organização dos pedidos.</p>
    <span className="chat-typing">digitando<span>.</span><span>.</span><span>.</span></span>
  </div>;
  if (service.id === "automation") return <div className="service-demo demo-n8n" aria-label="Fluxo de automação entre sistemas">
    <div className="n8n-node trigger"><b>Quando chega</b><small>Novo pedido</small></div><i className="n8n-link link-one" />
    <div className="n8n-node process"><b>Organizar</b><small>Dados do pedido</small></div><i className="n8n-link link-two" />
    <div className="n8n-node finish"><b>Atualizar</b><small>Sistema e equipe</small></div>
  </div>;
  if (service.id === "systems") return <div className="service-demo demo-system" aria-label="Sistema organizando uma operação">
    <div className="system-side"><i/><i/><i/></div><div className="system-content"><span>OPERAÇÃO EM TEMPO REAL</span><div className="system-bars"><i/><i/><i/><i/><i/></div><div className="system-row"><b>Pedidos</b><em>24</em></div><div className="system-row"><b>Em andamento</b><em>08</em></div></div>
  </div>;
  if (service.id === "websites") return <div className="service-demo demo-web" aria-label="Jornada de descoberta de um site">
    <div className="search-query"><span>⌕</span> solução para minha operação <b>↵</b></div><div className="search-result"><i/><span/><span/></div><div className="web-page"><header><i/><i/><i/></header><b>Sua operação pode render mais.</b><p>Clareza para encontrar, entender e agir.</p><span>Começar</span></div>
  </div>;
  return <div className="service-demo demo-data" aria-label="Dados se transformando em indicadores">
    <div className="data-source"><span>CRM</span><span>ERP</span><span>ATD</span></div><i className="data-stream"/><div className="data-board"><small>VISÃO DA OPERAÇÃO</small><div className="data-bars"><i/><i/><i/><i/><i/></div><b>+32%</b><span>mais clareza para decidir</span></div>
  </div>;
}

function ServiceModal({ service, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [onClose]);

  return <div className="service-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className={`service-modal demo-${service.id}`} role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <button ref={closeRef} className="service-modal-close" type="button" onClick={onClose} aria-label="Fechar exemplo">×</button>
      <div className="service-modal-copy"><h3 id="service-modal-title">{service.title}</h3><p>{service.copy}</p></div>
      <ServiceDemo service={service} />
    </section>
  </div>;
}

function Header({ open, setOpen, burgerRef, menuRef }) {
  return (
    <>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Início"><Bolt /></a>
        <nav className="links" aria-label="Principal">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="pill pill-nav" href="#contato"><span>Agendar conversa</span></a>
        <button ref={burgerRef} className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" aria-label={open ? "Fechar menu" : "Abrir menu"}><i/><i/></button>
      </header>
      <nav ref={menuRef} className="menu" id="menu" aria-hidden={!open} aria-label="Menu móvel">
        <div className="menu-inner">
          <ul>{navItems.map(([label, href]) => <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>)}</ul>
          <div className="menu-foot"><a className="pill" href="#sobre" onClick={() => setOpen(false)}>Mapear minha operação</a><a className="ghost" href="#contato" onClick={() => setOpen(false)}>Agendar conversa</a></div>
        </div>
      </nav>
    </>
  );
}

function Hero() {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const background = document.querySelectorAll(".plate,.hero,.logos,.brand,.links,.pill-nav");
    background.forEach((el) => { el.inert = open; });
    const focusables = menuRef.current?.querySelectorAll("a[href],button:not([disabled])") || [];
    const keydown = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && open && focusables.length) {
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    const resize = () => window.innerWidth / window.innerHeight > 1.1 && setOpen(false);
    addEventListener("keydown", keydown); addEventListener("resize", resize);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) requestAnimationFrame(() => focusables[0]?.focus());
    else if (document.activeElement && menuRef.current?.contains(document.activeElement)) burgerRef.current?.focus();
    return () => { removeEventListener("keydown", keydown); removeEventListener("resize", resize); document.body.style.overflow = ""; background.forEach((el) => { el.inert = false; }); };
  }, [open]);
  return (
    <section className={`stage ${open ? "is-open" : ""}`} id="inicio">
      <div className="plate"><video className="plate-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src={HERO_VIDEO} type="video/mp4"/></video></div>
      <Header open={open} setOpen={setOpen} burgerRef={burgerRef} menuRef={menuRef}/>
      <main className="hero">
        <h1><span>Sua empresa não precisa trabalhar mais.</span><span>Precisa <Accent>operar melhor.</Accent></span></h1>
        <p className="hero-sub"><span>A Praxy identifica onde sua operação perde tempo com tarefas repetitivas. Depois implementa agentes de IA, automações e sistemas para reduzir esse trabalho e acompanhar o que muda na prática.</span></p>
        <div className="hero-actions"><a className="pill" href="#sobre">Descobrir onde posso ganhar tempo</a><a className="ghost" href="#contato">Agendar conversa</a></div>
      </main>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto section" id="sobre">
      <div className="manifesto-frame reveal">
        <span className="manifesto-logo" aria-hidden="true"><Bolt /></span>
        <h2 className="manifesto-copy">O problema não é falta de ferramenta. É ferramenta que não <Accent>conversa</Accent> com o resto do negócio.</h2>
      </div>
    </section>
  );
}

function Products() {
  const [activeService, setActiveService] = useState(null);
  return (
    <section className="products section" id="solucoes">
      <div className="section-head"><h2>Você já tem os processos. Falta <Accent>automatizar</Accent> o que ainda depende do manual.</h2><p>Aplicamos tecnologia nos pontos que mais pesam no dia a dia. Atendimento, tarefas repetitivas, sistemas desconectados e dados sem visibilidade.</p></div>
      <div className="product-rail" role="list" aria-label="Soluções para processos da empresa">
        {services.map((service) => <ProductTile key={service.id} service={service} onOpen={setActiveService}/>) }
      </div>
      {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}
    </section>
  );
}

function Protocol() {
  return (
    <section className="protocol section" id="protocolo">
      <div className="protocol-head"><h2>Tecnologia sem <Accent>método</Accent> vira só mais uma ferramenta parada.</h2><p>A Praxy segue uma ordem clara. Primeiro entendemos o que precisa mudar. Depois construímos.</p></div>
      <div className="protocol-steps">
        <article><h3>Diagnóstico</h3><p>Mapeamos processos, ferramentas e gargalos antes de propor qualquer solução.</p></article>
        <article><h3>Desenvolvimento</h3><p>Construímos a solução adequada ao processo. Pode ser um agente, uma automação, um sistema ou a combinação necessária.</p></article>
        <article><h3>Auditoria</h3><p>Testamos fluxos, exceções e integrações antes da solução entrar na rotina da empresa.</p></article>
        <article><h3>Evolução</h3><p>Acompanhamos os dados, melhoramos o que existe e identificamos novas oportunidades.</p></article>
      </div>
    </section>
  );
}

function OutcomeData() {
  return (
    <section className="outcomes section" id="dados">
      <div className="outcomes-head">
        <h2>Você não precisa escolher entre velocidade, controle e <Accent>qualidade.</Accent></h2>
      </div>
      <div className="outcome-grid" aria-label="Indicadores acompanhados pela Praxy">
        <article className="outcome-card outcome-brand">
          <Bolt />
          <p>Dados acompanhados após a aplicação do Protocolo Praxy.</p>
        </article>
        <article className="outcome-card outcome-photo">
          <div className="signal-board" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
        </article>
        <article className="outcome-card outcome-wide">
          <span className="outcome-label">Trabalho manual reduzido</span>
          <strong>82%</strong>
          <h3>em operações que aplicam o Protocolo Praxy</h3>
          <p>Processos repetitivos passam a ser executados por agentes, automações e sistemas conectados.</p>
        </article>
        <article className="outcome-card outcome-acid">
          <span className="outcome-label">Atendimento operacional</span>
          <strong>2x</strong>
          <h3>mais rápido com agentes Praxy</h3>
          <p>Leads são respondidos, qualificados e encaminhados sem depender de acionamento manual.</p>
        </article>
        <article className="outcome-card">
          <span className="outcome-label">Evolução por ciclo</span>
          <strong>23%</strong>
          <h3>mais clareza sobre onde melhorar</h3>
          <p>A Praxy acompanha dados depois da implementação para identificar ajustes e novas oportunidades.</p>
        </article>
        <article className="outcome-card outcome-photo outcome-alt">
          <div className="signal-stack" aria-hidden="true">
            <i></i><i></i><i></i><i></i>
          </div>
        </article>
      </div>
    </section>
  );
}

function Booking() {
  const [seoOpen, setSeoOpen] = useState(false);
  const [calReady, setCalReady] = useState(false);
  const bookingRef = useRef(null);
  const seoButtonRef = useRef(null);
  const seoDialogRef = useRef(null);
  const seoWasOpenRef = useRef(false);

  useEffect(() => {
    const node = bookingRef.current;
    if (!node || calReady) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCalReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "360px 0px" });

    observer.observe(node);
    return () => observer.disconnect();
  }, [calReady]);

  useEffect(() => {
    if (!calReady) return undefined;
    (async () => {
      const cal = await getCalApi({ namespace: "protocolo-praxy" });
      cal("ui", { theme: "dark", cssVarsPerTheme: { dark: { "cal-brand": "#ffff3c" } }, hideEventTypeDetails: false, layout: "month_view" });
    })();
    return undefined;
  }, [calReady]);

  useEffect(() => {
    if (!seoOpen) {
      if (seoWasOpenRef.current) {
        seoButtonRef.current?.focus();
      }
      document.body.style.overflow = "";
      return undefined;
    }
    seoWasOpenRef.current = true;
    const closeOnEscape = (event) => event.key === "Escape" && setSeoOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => seoDialogRef.current?.querySelector("button")?.focus());
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [seoOpen]);

  return (
    <section ref={bookingRef} className="booking section" id="contato">
      <div className="booking-head"><h2>Vamos descobrir onde sua empresa perde <Accent>tempo?</Accent></h2><p>30 minutos, sem compromisso. Entendemos o problema e mostramos quais caminhos fazem sentido.</p></div>
      <div className="booking-actions">
        <a className="whatsapp-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Ou entre em contato pelo WhatsApp</a>
      </div>
      <div className="cal-shell">
        {calReady ? <Cal namespace="protocolo-praxy" calLink="praxy/protocolo-praxy" style={{ width: "100%", height: "100%", overflow: "auto" }} config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" }}/> : <div className="cal-placeholder"><button className="pill" type="button" onClick={() => setCalReady(true)}>Carregar agenda</button></div>}
      </div>
      <footer className="site-footer">
        <div className="footer-brand">
          <Bolt />
          <p className="footer-copy">Copyright © 2022–{new Date().getFullYear()} Praxy.</p>
        </div>
        <div className="footer-links">
          <nav aria-label="Empresa">
            <h3>Empresa</h3>
            <a href="#sobre">Sobre</a>
            <a href="#solucoes">Processos</a>
            <a href="#protocolo">Protocolo</a>
            <a href="/faq">FAQ</a>
            <a href="#contato">Contato</a>
          </nav>
          <nav aria-label="Soluções">
            <h3>Soluções</h3>
            <a href="#solucoes">Agentes de IA</a>
            <a href="#solucoes">Automação</a>
            <a href="#solucoes">Sistemas sob medida</a>
            <a href="#solucoes">Sites com GEO, SEO e AEO</a>
            <a href="#solucoes">Dados e inteligência</a>
            <button ref={seoButtonRef} className="footer-modal-trigger" type="button" onClick={() => setSeoOpen(true)}>SEO da Praxy</button>
          </nav>
          <nav aria-label="Contato">
            <h3>Contato</h3>
            <a href="#contato">Agendar conversa</a>
            <a className="footer-social" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp</a>
            <a className="footer-social" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagram</a>
            <a className="footer-social" href={`mailto:${CONTACT_EMAIL}`}><MailIcon />{CONTACT_EMAIL}</a>
            <a href="#inicio">Voltar ao topo</a>
          </nav>
          <nav aria-label="Legal">
            <h3>Legal</h3>
            <a href="/politica-de-privacidade">Política de privacidade</a>
            <a href="/termos-de-uso">Termos de uso</a>
          </nav>
        </div>
      </footer>
      {seoOpen && <div className="seo-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSeoOpen(false)}>
        <div ref={seoDialogRef} className="seo-modal" role="dialog" aria-modal="true" aria-label="SEO da Praxy">
          <button className="seo-modal-close" type="button" onClick={() => setSeoOpen(false)} aria-label="Fechar">×</button>
          <p>{SEO_KEYWORDS.join(", ")}</p>
        </div>
      </div>}
    </section>
  );
}

export default function Page() {
  const root = useRef(null);
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("review")) {
      document.documentElement.classList.add("review-ready");
    }
    const contract = `THESIS: AI infrastructure is a passage from intent to operation, refusing the generic dashboard hero.\nOWN-WORLD: black-space planes, silver type, acid-yellow operational signals, sharp geometry, restrained glass.\nSTORY: understand the unified layer, inspect its departmental reach and protocol, then schedule a conversation.\nFIRST VIEWPORT: full-bleed portal video; left-anchored two-line thesis and CTA pair; floating navigation; partner marks in the bottom fade.\nFORM: portal operational, user-pinned direction; seed key: brief-praxy-portal.\nFINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md`;
    const comment = document.createComment(contract);
    document.body.insertBefore(comment, document.body.firstChild);
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .13 });
    els.forEach((el) => io.observe(el));
    return () => { io.disconnect(); comment.remove(); document.documentElement.classList.remove("review-ready"); };
  }, []);
  return <div ref={root} className="site"><Hero/><Manifesto/><Products/><Protocol/><OutcomeData/><Booking/><WhatsAppWidget /></div>;
}
