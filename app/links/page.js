const WHATSAPP_URL = "https://wa.me/5527996693332";
const INSTAGRAM_URL = "https://www.instagram.com/praxy.labs";

export const metadata = {
  title: "Links",
  description: "Encontre os canais oficiais da Praxy.",
  robots: { index: false, follow: false },
};

function ArrowUpRight() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4.7c-6 0-10.9 4.7-10.9 10.6 0 2.1.7 4.1 1.8 5.7L5.6 27l6.2-1.6c1.3.5 2.7.8 4.2.8 6 0 10.9-4.7 10.9-10.6S22 4.7 16 4.7Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12.3 11.1c-.3.2-.9.9-.9 2.1 0 2.5 2.7 5.1 3.2 5.5.6.5 2.5 2.1 4.7 2.1 1.2 0 2-.6 2.3-1 .2-.3.3-1.5.1-1.7-.1-.2-1.9-1-2.2-1-.3-.1-.5 0-.7.2l-.8 1c-.2.2-.4.2-.7.1-.5-.2-1.3-.5-2.1-1.2-.8-.7-1.3-1.5-1.5-2-.1-.3-.1-.5.1-.7l.8-.8c.2-.2.2-.4.1-.7l-.9-2.1c-.1-.3-.3-.4-.5-.4h-1Z" fill="currentColor" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="7" y="7" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="16" cy="16" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="21.3" cy="10.9" r="1.2" fill="currentColor" /></svg>;
}

function PraxyMark() {
  return <img className="links-praxy-mark" src="/praxy-mark.svg" alt="" aria-hidden="true" style={{ filter: "brightness(0)", width: "26px" }} />;
}

const links = [
  { label: "Falar no WhatsApp", hint: "Vamos conversar", href: WHATSAPP_URL, icon: WhatsAppIcon, external: true },
  { label: "Conhecer a Praxy", hint: "praxy.com.br", href: "/", icon: PraxyMark },
  { label: "Instagram", hint: "@praxy.labs", href: INSTAGRAM_URL, icon: InstagramIcon, external: true },
];

export default function LinksPage() {
  return <main className="links-page">
    <section className="links-shell" aria-labelledby="links-title">
      <a className="links-brand" href="/" aria-label="Ir para o site da Praxy"><img src="/praxy-logo-commpleta-navbar.svg" alt="Praxy" /></a>
      <div className="links-intro"><h1 id="links-title">Vamos construir uma operação que flui.</h1><p>Escolha por onde quer falar com a gente.</p></div>
      <nav className="links-list" aria-label="Canais da Praxy">
        {links.map(({ label, hint, href, icon: Icon, external }) => <a className="links-item" key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}><span className="links-icon"><Icon /></span><span className="links-copy"><b>{label}</b><small>{hint}</small></span><ArrowUpRight /></a>)}
      </nav>
    </section>
  </main>;
}
