import "./styles.css";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.praxy.com.br";
const googleAnalyticsId = "G-6J5EXYHXQ1";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Praxy | Mais tempo para sua empresa gerar valor",
    template: "%s | Praxy",
  },
  description: "A Praxy identifica os gargalos que travam sua operação e transforma tempo perdido em clareza, velocidade e resultado.",
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
    title: "Praxy | Mais tempo para sua empresa gerar valor",
    description: "Identifique os gargalos que travam sua operação e transforme tempo perdido em clareza, velocidade e resultado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxy | Mais tempo para sua empresa gerar valor",
    description: "Identifique os gargalos que travam sua operação e transforme tempo perdido em clareza, velocidade e resultado.",
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
        description: "Tecnologia para reduzir atritos na operação e criar mais tempo para gerar valor.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Praxy",
        url: siteUrl,
        description: "Mais tempo para sua empresa gerar valor.",
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script dangerouslySetInnerHTML={{ __html: scrollResetScript }} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
