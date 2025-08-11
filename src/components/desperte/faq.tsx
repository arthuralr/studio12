"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Nunca tive contato com espiritualidade ou sagrado feminino. Este e-book é para mim?",
    answer: "Sim, com certeza. Este e-book é, na verdade, o ponto de partida ideal. Ele foi desenhado como um convite amoroso para o autoconhecimento, sem pré-requisitos ou exigências. O foco não é em se tornar uma 'mulher mística', mas em se ouvir com verdade e redescobrir uma força que já existe em você. As práticas são simples e a principal ferramenta é a sua própria intenção."
  },
  {
    question: "Preciso seguir alguma religião ou acreditar em 'energia' para que funcione?",
    answer: "Não, de forma alguma. O e-book foi criado para ser universal. As práticas podem ser feitas por quem acredita em Deus, no Universo, em energia ou em absolutamente nada. O verdadeiro objetivo dos rituais é o seu encontro consigo mesma, fortalecendo a conexão com a mulher sábia e poderosa que habita em você, independentemente do sistema de crenças."
  },
  {
    question: "Tenho uma rotina muito corrida. Terei tempo para aplicar as práticas?",
    answer: "Sim. A beleza deste guia está em transformar o cotidiano em um ritual sagrado. Você não precisa de horas. Aprenderá a transformar atos simples, como preparar um chá ou tomar um banho, em momentos de profunda presença e reconexão. A constância de pequenos gestos conscientes tem mais poder do que grandes rituais feitos raramente."
  },
  {
    question: "O que exatamente eu recebo ao adquirir o e-book?",
    answer: "Você recebe um guia completo em formato PDF, com acesso imediato e vitalício. Dentro dele, você encontrará: Um passo a passo detalhado do Ritual de Limpeza Energética para clarear seu campo e elevar sua presença. Um oráculo exclusivo com 30 mensagens das 'Cartas Intuitivas' para te guiar diariamente. Receitas de blends de chás para foco, intuição e calma. Receitas de banhos rituais para limpeza, liberação de memórias do ventre e conexão com o amor-próprio. Um guia prático sobre como equilibrar suas energias Yin (receptividade) e Yang (ação) no dia a dia."
  },
  {
    question: "Como e quando recebo o material após a compra?",
    answer: "O acesso é imediato. Assim que o seu pagamento for confirmado pela plataforma Kiwify, você receberá automaticamente um e-mail com o link para baixar o seu e-book em formato PDF. Você poderá ler no seu celular, tablet ou computador, quando e onde quiser."
  }
];

export function Faq() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F4F7] text-[#2B212E]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-mystic text-4xl md:text-5xl font-bold text-center text-[#5C4B99] mb-12">
          Suas Dúvidas, Respondidas com Clareza
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="border-b-[#5C4B99]/20">
              <AccordionTrigger className="text-left font-semibold text-lg text-[#2B212E] hover:text-[#5C4B99]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
