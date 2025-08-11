import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const valueStack = [
  { item: 'A Arte da Primeira Impressão', value: "R$ 47,00" },
  { item: "Técnicas de Conexão Emocional Profunda", value: "R$ 67,00" },
  { item: "Gatilhos de Escassez e Desejo", value: "R$ 47,00" },
];

export function Offer() {
  return (
    <section id="oferta" className="py-20 sm:py-28 bg-grafite">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline_conquista text-4xl md:text-5xl font-black text-white_conquista mb-12">
            Você está pronto(a) para parar de ser uma opção e se tornar o prêmio?
          </h2>
          <Card className="shadow-2xl overflow-hidden bg-white_conquista border-vermelho-intenso/30 text-grafite p-8 rounded-lg grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="font-bold text-xl text-grafite mb-6 font-headline_conquista">Ao investir no seu jogo, você vai dominar:</h3>
              <div className="space-y-4 mb-8">
                {valueStack.map((item, index) => (
                  <div key={index} className="flex items-start text-grafite/90 border-b border-grafite/10 pb-2">
                    <CheckCircle2 className="h-5 w-5 text-vermelho-intenso mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-body_conquista">{item.item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center bg-grafite/10 p-6 rounded-lg my-8">
                <p className="text-grafite/80 text-lg font-body_conquista">Valor Total: <s className="line-through">R$161,00</s></p>
                <p className="font-headline_conquista text-6xl md:text-7xl font-black text-vermelho-intenso my-2">
                  Apenas R$37,00
                </p>
              </div>
              <Link
                href="https://kiwify.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'lg' }), 'w-full bg-vermelho-intenso text-white_conquista hover:bg-vermelho-intenso/90 text-xl font-bold py-8 transition-transform duration-300 hover:scale-105 shadow-lg animate-pulse rounded-md')}
              >
                QUERO ME TORNAR IRRESISTÍVEL
              </Link>
              <div className="flex items-center justify-center gap-2 mt-4 text-grafite/70">
                <ShieldCheck className="h-4 w-4" />
                <span className="font-body_conquista text-sm">Domine o jogo ou seu dinheiro de volta. Garantia de 7 dias.</span>
              </div>
            </div>
            <div>
              <Image
                src="https://gtiweb.site/imagem-paloma/p11.jpeg"
                alt="Casal conectado"
                width={500}
                height={700}
                className="rounded-lg shadow-xl object-cover w-full h-full max-h-[600px]"
                data-ai-hint="couple connected"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
