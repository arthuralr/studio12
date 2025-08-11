"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Para quem é este e-book?",
    answer: "Para qualquer mulher que se sente travada, cansada de prometer e não cumprir, e que deseja um método prático para criar disciplina e alcançar seus objetivos."
  },
  {
    question: "E se eu não tiver tempo?",
    answer: "O método foi pensado para ser prático e direto. As lições e tarefas são rápidas e podem ser aplicadas em qualquer rotina, mesmo as mais corridas."
  },
  {
    question: "Como vou receber o e-book?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail da Kiwify com o link para baixar seu e-book em formato PDF. O acesso é imediato."
  },
  {
    question: "A compra é segura?",
    answer: "Sim! O pagamento é processado pela Kiwify, uma das maiores e mais seguras plataformas de produtos digitais do Brasil."
  }
];

export function FaqSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
