import { CheckCircle, XCircle } from "lucide-react";

const beforeItems = [
  "Cansada de procrastinar",
  "Sem disciplina",
  "Frustrada com seus resultados",
  "Autossabotagem constante",
];

const afterItems = [
  "Orgulhosa de si mesma",
  "No controle da sua rotina",
  "Confiante para cumprir metas",
  "Com um método claro para o sucesso",
];

export function Transformation() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Antes */}
          <div className="p-8 border-2 border-destructive/20 rounded-lg bg-card/80 backdrop-blur-sm">
            <h3 className="font-headline text-2xl font-bold text-destructive mb-6 text-center">Como você se sente hoje</h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Depois */}
          <div className="p-8 border-2 border-primary/30 rounded-lg bg-gradient-to-br from-primary/20 via-primary/5 to-transparent shadow-lg backdrop-blur-sm">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6 text-center">Como você vai se sentir em 7 dias</h3>
             <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
