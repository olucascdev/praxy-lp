export const metadata = {
  title: "Termos de uso | Praxy",
  description: "Termos de uso da Praxy.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <a className="legal-brand" href="/" aria-label="Voltar para a Praxy">
        <img src="/praxy-logo-commpleta-navbar.svg" alt="Praxy" />
      </a>
      <article className="legal-document">
        
        <h1>Termos de uso</h1>
        <p className="legal-updated">Ultima atualizacao: 30 de agosto de 2026</p>

        <section>
          <h2>1. Aceitacao dos termos</h2>
          <p>Ao acessar ou utilizar os canais, produtos, servicos, conteudos ou experiencias digitais da Praxy, voce concorda com estes Termos de uso. Caso nao concorde com qualquer condicao, nao utilize nossos servicos.</p>
        </section>

        <section>
          <h2>2. Uso dos servicos</h2>
          <p>Voce se compromete a utilizar os servicos da Praxy de forma licita, responsavel e compativel com a finalidade apresentada. E proibido tentar comprometer a seguranca, copiar indevidamente conteudos, interferir na operacao ou utilizar os servicos para fins fraudulentos, abusivos ou nao autorizados.</p>
        </section>

        <section>
          <h2>3. Informacoes e disponibilidade</h2>
          <p>Buscamos manter as informacoes atualizadas e os servicos disponiveis, mas podemos alterar, suspender ou descontinuar funcionalidades, conteudos ou acessos a qualquer momento, especialmente por razoes tecnicas, operacionais, comerciais ou de seguranca.</p>
        </section>

        <section>
          <h2>4. Propriedade intelectual</h2>
          <p>Marcas, nomes, interfaces, textos, imagens, codigos, metodos, materiais e demais ativos relacionados a Praxy pertencem a Praxy ou a seus licenciadores. Estes Termos nao concedem licenca para uso de qualquer propriedade intelectual sem autorizacao previa e expressa.</p>
        </section>

        <section>
          <h2>5. Limitacao de responsabilidade</h2>
          <p>Na maxima extensao permitida pela lei aplicavel, a Praxy nao se responsabiliza por danos indiretos, lucros cessantes, perda de dados, interrupcoes, decisoes tomadas exclusivamente com base em conteudos informativos ou uso inadequado dos servicos.</p>
        </section>

        <section>
          <h2>6. Alteracoes destes termos</h2>
          <p>Podemos atualizar estes Termos periodicamente. A versao vigente sera sempre publicada nesta pagina, com indicacao da data de atualizacao.</p>
        </section>

        <section>
          <h2>7. Contato</h2>
          <p>Para falar sobre estes Termos, entre em contato pelos canais oficiais disponibilizados pela Praxy.</p>
        </section>
      </article>
    </main>
  );
}
