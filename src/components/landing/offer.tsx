import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Lock, ShieldCheck, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const valueStack = [
  { item: 'E-book "7 Dias Para o SIM!"', value: "R$ 97,00" },
  { item: "Bônus 1: Lista de Aplicativos e Ferramentas para Organização", value: "R$ 27,00" },
  { item: "Bônus 2: Guia de Leituras para Manter a Inspiração", value: "R$ 27,00" },
];

export function Offer() {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Dê o primeiro passo para a sua nova vida HOJE.
          </h2>
          <Card className="shadow-2xl overflow-hidden bg-card/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1511530953363-05f1642e118f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8ZWJvb2t8ZW58MHx8fHwxNzU0OTA4MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mockup 3D do E-book 7 Dias Para o SIM!"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  data-ai-hint="ebook mockup"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-xl text-foreground mb-4">Ao investir no seu SIM, você vai receber:</h3>
                <div className="space-y-3 mb-6 bg-background/30 p-4 rounded-md border">
                  {valueStack.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-muted-foreground">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{item.item}</span>
                      </div>
                      <span className="font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center bg-background/50 p-6 rounded-lg my-6">
                  <p className="text-muted-foreground text-lg">Valor Total: <s className="line-through">R$151,00</s></p>
                  <p className="font-headline text-5xl md:text-6xl font-bold text-primary my-2">
                    Apenas R$ 37,00
                  </p>
                  <p className="text-muted-foreground text-sm">ou 4x de R$ 9,83</p>
                </div>
                <Link 
                  href="https://kiwify.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: 'lg', variant: 'accent' }), 'w-full text-lg font-bold py-8 transition-transform duration-300 hover:scale-105 shadow-lg animate-pulse')}
                >
                  SIM, QUERO ME TORNAR UMA PESSOA DISCIPLINADA!
                </Link>
                <div className="text-center mt-6">
                  <div className="flex justify-center items-center gap-4 text-muted-foreground mb-4">
                    <Lock className="h-5 w-5"/>
                    <p className="text-sm">Ambiente de pagamento 100% seguro pela Kiwify.</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 text-muted-foreground border-t border-border pt-6 mt-6">
                     <BadgeCheck className="h-10 w-10 text-primary/80" />
                    <h4 className="font-semibold text-foreground">Garantia Incondicional de 7 Dias</h4>
                    <p className="text-xs text-muted-foreground/90 max-w-sm">
                      Se por qualquer motivo você achar que este e-book não é para você, basta me enviar um e-mail em até 7 dias e eu devolvo 100% do seu dinheiro. Simples assim, sem perguntas.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
