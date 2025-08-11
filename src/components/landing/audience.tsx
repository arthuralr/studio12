import { Check, X } from "lucide-react";

const forYouItems = [
  "Começa projetos com muita animação, mas desiste na primeira dificuldade.",
  "Sente que a vida está corrida e sempre deixa os próprios objetivos para depois.",
  "Precisa de um método prático e um passo a passo claro, sem teorias complicadas.",
];

const notForYouItems = [
  "Procura uma fórmula mágica que não exige comprometimento.",
  "Não está disposta a aplicar as tarefas práticas propostas a cada dia.",
  "Acredita que a mudança acontece sem ação.",
];

export function Audience() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Este guia é para você?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* É para você */}
          <div className="p-8 border-2 border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6 text-center">Sim, se você...</h3>
            <ul className="space-y-4">
              {forYouItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* NÃO é para você */}
          <div className="p-8 border-2 border-destructive/20 rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="font-headline text-2xl font-bold text-destructive mb-6 text-center">Talvez não, se você...</h3>
             <ul className="space-y-4">
              {notForYouItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
