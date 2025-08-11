"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Isso não é um tipo de manipulação?",
    answer: "Não. Este método se baseia em gatilhos psicológicos para despertar uma atração natural, sem usar 'joguinhos infantis ou táticas ultrapassadas'. A ideia é amplificar suas melhores qualidades e criar uma conexão genuína, não fingir ser quem você não é."
  },
  {
    question: "Funciona para homens e mulheres? E para qualquer orientação sexual?",
    answer: "Sim. As regras da psicologia da atração são universais e se aplicam a qualquer pessoa que queira criar uma conexão mais forte, independentemente de gênero ou orientação."
  },
  {
    question: "Sou tímido(a). Vou conseguir aplicar essas técnicas?",
    answer: "Sim. O método é um passo a passo que constrói sua confiança gradualmente. Você começa trabalhando sua imagem e mentalidade (Passo 1) antes mesmo de interagir, o que te prepara e te dá mais segurança para os passos seguintes."
  },
  {
    question: "Não seria mais fácil simplesmente \"ser eu mesmo(a)\"?",
    answer: "\"Ser você mesmo(a)\" é fundamental, mas não é uma estratégia. Este guia não te ensina a mudar sua personalidade, mas a usar uma estratégia para que as pessoas valorizem a pessoa incrível que você já é, em vez de te colocarem na zona de amizade."
  }
];

export function Faq() {
  return (
    <section className="py-20 sm:py-28 bg-white_conquista text-grafite">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-headline_conquista text-4xl md:text-5xl font-black text-center text-grafite mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="border-b-grafite/20">
              <AccordionTrigger className="text-left font-headline_conquista font-bold text-lg text-grafite hover:text-vermelho-intenso">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-grafite/80 leading-relaxed text-base font-body_conquista">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}