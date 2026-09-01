import "./styles.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.praxy.com.br";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Praxy | Automação e agentes de IA para sua operação",
    template: "%s | Praxy",
  },
  description: "A Praxy identifica gargalos operacionais e constrói agentes de IA, automações, sistemas e sites para sua empresa operar melhor.",
  applicationName: "Praxy",
  authors: [{ name: "Praxy" }],
  creator: "Praxy",
  publisher: "Praxy",
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Praxy",
    title: "Praxy | Automação e agentes de IA para sua operação",
    description: "Identifique gargalos operacionais e construa agentes de IA, automações e sistemas para sua empresa operar melhor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxy | Automação e agentes de IA para sua operação",
    description: "Identifique gargalos operacionais e construa agentes de IA, automações e sistemas para sua empresa operar melhor.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  const scrollResetScript = `try{if("scrollRestoration"in history)history.scrollRestoration="manual";if(!location.hash)scrollTo(0,0)}catch(e){}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Praxy",
        url: siteUrl,
        logo: `${siteUrl}/praxy-logo-commpleta-navbar.svg`,
        description: "Agentes de IA, automações, sistemas e sites para operações empresariais.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Praxy",
        url: siteUrl,
        description: "Automação e agentes de IA para sua operação.",
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script dangerouslySetInnerHTML={{ __html: scrollResetScript }} />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
