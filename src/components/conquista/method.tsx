import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, GitPullRequest, Puzzle, Zap, Flame, Gem } from "lucide-react";

const steps = [
  { icon: <Target className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 1: O Jogo Antes do Contato", description: "Como construir uma imagem e posicionamento que geram curiosidade antes mesmo de dizer 'oi'." },
  { icon: <Eye className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 2: A Primeira Impressão Definitiva", description: "Abordagens criativas que te diferenciam da multidão e despertam interesse imediato." },
  { icon: <GitPullRequest className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 3: Conexão com Gatilhos Psicológicos", description: "A arte de usar espelhamento, perguntas de alto impacto e exclusividade para criar um vínculo emocional." },
  { icon: <Puzzle className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 4: Atração com Escassez e Mistério", description: "Como usar a regra 80/20 para fazer a pessoa sentir sua falta e desejar sua presença." },
  { icon: <Zap className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 5: O Vínculo Emocional Irresistível", description: "Como criar uma 'montanha-russa emocional' e rituais que tornam a conexão única." },
  { icon: <Flame className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 6: Mantendo o Interesse Sem Esforço", description: "Técnicas para garantir que a chama da atração nunca se apague." },
  { icon: <Gem className="h-8 w-8 text-vermelho-intenso" />, title: "Passo 7: Exclusividade e Lealdade", description: "O passo final para inverter o jogo e fazer a pessoa sentir que precisa te conquistar." }
];

export function Method() {
  return (
    <section className="py-20 sm:py-28 bg-white_conquista text-grafite">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline_conquista text-4xl md:text-5xl font-black mb-4">
            Os 7 Passos para se Tornar Irresistível
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" aria-hidden="true"></div>
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:items-center md:gap-16">
                <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-white_conquista p-2 rounded-full shadow-md z-10">{step.icon}</div>
                  <div>
                    <h3 className="text-2xl font-headline_conquista font-bold text-grafite mb-2">{step.title}</h3>
                    <p className="font-body_conquista text-grafite/80 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}