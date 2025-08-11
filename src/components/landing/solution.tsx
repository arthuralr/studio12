import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListTodo, Target, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <ListTodo className="h-8 w-8 text-primary" />,
    title: "Rotina Inteligente",
    description: "Aprenda a criar sistemas que funcionam para o seu estilo de vida e maximizam sua produtividade."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Foco e Eficiência",
    description: "Domine técnicas práticas para eliminar distrações e concluir suas tarefas mais importantes com consistência."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Fim da Autossabotagem",
    description: "Entenda por que você se sabota e aprenda a parar de adiar seu próprio progresso."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Resultados em Qualquer Área",
    description: "Use o método para emagrecer, crescer na carreira, cuidar da saúde ou melhorar seus relacionamentos."
  }
];

export function Solution() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Existe um caminho para o SIM.
          </h2>
          <p className="text-lg text-muted-foreground">
            O e-book 7 Dias Para o SIM! é o guia definitivo para você quebrar esse ciclo. Não é sobre teorias complicadas, mas um passo a passo prático e direto para transformar seus hábitos e se tornar uma pessoa que cumpre o que promete.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start space-x-6 p-4">
              <div className="flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold font-headline text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
