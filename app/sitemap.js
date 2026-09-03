const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praxy.com.br";

export default function sitemap() {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/faq` },
    { url: `${siteUrl}/politica-de-privacidade` },
    { url: `${siteUrl}/termos-de-uso` },
  ];
}
