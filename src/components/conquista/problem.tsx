import { XCircle } from 'lucide-react';

const painPoints = [
  "Tentar ser interessante, mas não ter o interesse correspondido.",
  "Ver a pessoa que você gosta se interessar por outros que parecem não fazer esforço.",
  "Achar que para conquistar basta \"ser você mesmo(a)\" e se frustrar.",
  "Ficar sem saber como continuar a conversa ou como avançar para o próximo nível.",
];

export function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-white_conquista text-grafite">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="font-headline_conquista text-4xl md:text-5xl font-black text-grafite mb-6">
          O problema não é você. É a sua estratégia.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-grafite/80 mb-12 font-body_conquista">
          Se suas conversas esfriam do nada, se você é constantemente colocado(a) na 'zona de amizade' ou se simplesmente não consegue despertar o interesse que deseja, a causa é uma só: você não sabe ativar os gatilhos certos da atração.
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start text-left gap-4">
              <XCircle className="h-6 w-6 text-vermelho-intenso flex-shrink-0 mt-1" />
              <span className="text-lg text-grafite/90 font-body_conquista">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}