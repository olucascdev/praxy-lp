const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praxy.com.br";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
