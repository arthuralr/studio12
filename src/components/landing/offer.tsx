import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Lock, ShieldCheck, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  'O E-book completo "7 Dias Para o SIM!" (PDF)',
  "Acesso imediato e vitalício ao material",
  "Bônus: Lista de aplicativos e ferramentas de organização",
  "Bônus: Sugestões de leituras para continuar sua jornada",
];

const paymentMethods = [
    { name: 'Credit Card', icon: <CreditCard className="h-6 w-6" /> },
    { name: 'Lock', icon: <Lock className="h-6 w-6" /> },
    { name: 'ShieldCheck', icon: <ShieldCheck className="h-6 w-6" /> },
]

export function Offer() {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Dê o primeiro passo para a sua nova vida HOJE.
          </h2>
          <Card className="shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1559677437-62c20d42dd27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmZWxpY2lkYWRlfGVufDB8fHx8MTc1NDkwNzg4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mockup 3D do E-book 7 Dias Para o SIM!"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  data-ai-hint="happy woman"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-xl text-foreground mb-4">O que você recebe:</h3>
                <ul className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center bg-accent/50 p-6 rounded-lg my-6">
                  <p className="text-muted-foreground text-lg">De <s className="line-through">R$97,00</s> por apenas:</p>
                  <p className="font-headline text-5xl md:text-6xl font-bold text-primary my-2">
                    R$ 37,00
                  </p>
                </div>
                <Link 
                  href="https://kiwify.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: 'lg' }), 'w-full text-lg font-bold py-8 transition-transform duration-300 hover:scale-105 shadow-lg animate-pulse')}
                >
                  SIM, EU QUERO MEU E-BOOK AGORA!
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
