const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praxy.com.br";

export const dynamic = "force-static";

export function GET() {
  const body = `# Praxy

> A Praxy identifica gargalos operacionais e implementa agentes de IA, automações, sistemas sob medida e sites para empresas operarem melhor.

## Serviços
- Agentes de IA: atendimento, qualificação e encaminhamento de contatos.
- Automação de processos: redução de tarefas repetitivas e integração de sistemas.
- Sistemas sob medida: desenvolvimento baseado nos processos de cada empresa.
- Sites com GEO, SEO e AEO: páginas estruturadas para busca, respostas de IA e descoberta digital.
- Dados e inteligência: organização de informações e acompanhamento de indicadores.

## Páginas
- [Início](${siteUrl}/)
- [Perguntas frequentes](${siteUrl}/faq)
- [Política de privacidade](${siteUrl}/politica-de-privacidade)
- [Termos de uso](${siteUrl}/termos-de-uso)
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
