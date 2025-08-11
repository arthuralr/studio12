import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const valueStack = [
  { item: 'E-book "Desperte o Sagrado Feminino"', value: "R$ 97,00" },
  { item: "Bônus 1: Oráculo com 30 Cartas da Voz da Intuição", value: "R$ 47,00" },
  { item: "Bônus 2: Guia de Rituais, Chás e Banhos Energéticos", value: "R$ 47,00" },
];

export function Offer() {
  return (
    <section id="oferta" className="py-20 sm:py-28 bg-[#F4F4F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#5C4B99] mb-12">
            Sua reconexão começa agora.
          </h2>
          <Card className="shadow-2xl overflow-hidden bg-[#2B212E] border-[#5C4B99]/30 text-white_lunar p-8 rounded-2xl">
              
              <h3 className="font-bold text-xl text-[#F4F4F7] mb-6">Ao investir na sua jornada, você vai receber:</h3>
              <div className="space-y-4 mb-8 text-left">
                {valueStack.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-[#F4F4F7]/90 border-b border-white_lunar/10 pb-2">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[#5C4B99] mr-3 flex-shrink-0" />
                      <span>{item.item}</span>
                    </div>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-center bg-black/20 p-6 rounded-lg my-8">
                <p className="text-[#F4F4F7]/80 text-lg">Valor Total: <s className="line-through">R$191,00</s></p>
                <p className="font-mystic text-6xl md:text-7xl font-bold text-white my-2">
                  Apenas R$47,00
                </p>
                <p className="text-[#F4F4F7]/80 text-sm">ou 5x de R$ 10,02</p>
              </div>
              <Link
                href="https://kiwify.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'lg' }), 'w-full bg-[#5C4B99] text-white_lunar hover:bg-[#4a3b80] text-xl font-bold py-8 transition-transform duration-300 hover:scale-105 shadow-lg animate-pulse rounded-full')}
              >
                SIM, QUERO DESPERTAR MINHA ESSÊNCIA
              </Link>
              <div className="text-center mt-8">
                <div className="flex flex-col items-center gap-3 text-white_lunar/80">
                   <Image 
                    src="https://gtiweb.site/imagem-paloma/p10.png"
                    alt="Garantia de 7 dias"
                    width={500}
                    height={100}
                    className="h-auto w-full max-w-sm"
                    data-ai-hint="guarantee badge"
                   />
                </div>
              </div>

          </Card>
        </div>
      </div>
    </section>
  );
}
