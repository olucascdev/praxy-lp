export const metadata = {
  title: "Perguntas frequentes",
  description: "Tire suas dúvidas sobre agentes de IA, automação, sistemas sob medida e o Protocolo Praxy.",
  alternates: { canonical: "/faq" },
};

const questions = [
  {
    question: "O que a Praxy faz?",
    answer: "A Praxy identifica gargalos na operação e desenvolve agentes de IA, automações, sistemas sob medida e sites para tornar o trabalho mais claro, conectado e eficiente.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer: "Começamos com uma conversa de diagnóstico. Nela, entendemos o processo atual, os pontos que mais consomem tempo e quais caminhos fazem sentido para a empresa.",
  },
  {
    question: "A Praxy trabalha apenas com inteligência artificial?",
    answer: "Não. A inteligência artificial é uma das ferramentas possíveis. O trabalho pode envolver automações, integrações, sistemas sob medida, organização de dados e presença digital, conforme a necessidade da operação.",
  },
  {
    question: "É possível integrar a solução aos sistemas que já usamos?",
    answer: "Sim. Antes de definir uma solução, avaliamos as ferramentas e os fluxos que sua empresa já utiliza para entender o que pode ser conectado, automatizado ou melhorado.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "O prazo depende do problema, das integrações e do escopo. Após o diagnóstico, a Praxy apresenta um caminho de implementação compatível com a complexidade da operação.",
  },
  {
    question: "Como posso falar com a Praxy?",
    answer: "Você pode agendar uma conversa pelo site, enviar uma mensagem pelo WhatsApp ou escrever para contato@praxy.com.br.",
  },
];

export default function FaqPage() {
  return (
    <main className="faq-page">
      <a className="legal-brand" href="/" aria-label="Voltar para a Praxy">
        <img src="/praxy-logo-commpleta-navbar.svg" alt="Praxy" />
      </a>
      <article className="faq-document">
        <p className="faq-kicker">Perguntas frequentes</p>
        <h1>Respostas claras para começar.</h1>
        <p className="faq-intro">Entenda como a Praxy trabalha antes de marcar uma conversa.</p>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details key={question} className="faq-item">
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <a className="pill faq-cta" href="/#contato">Agendar conversa</a>
      </article>
    </main>
  );
}
