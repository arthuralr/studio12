import { Star } from 'lucide-react';

const painPoints = [
  "Sente-se desconectada do seu corpo e dos seus ciclos.",
  "Busca respostas fora, ignorando a sabedoria que já tem dentro.",
  "Deseja uma rotina com mais significado e menos pressa.",
  "Quer transformar seu autocuidado em um ato sagrado.",
];

export function TheCall() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F4F7] text-[#2B212E]">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="font-mystic text-4xl md:text-5xl font-bold text-[#5C4B99] mb-6">
          Você sente esse chamado, mas não sabe nomear?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12">
          Talvez você sinta uma saudade de algo que nunca viveu. Talvez tenha ignorado sua intuição tantas vezes que agora duvida dela. Talvez tenha acreditado que sua sensibilidade era um exagero. Essa inquietação é a sua alma pedindo para voltar para casa. Para o seu corpo. Para a sua verdade.
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-center text-left gap-4">
              <Star className="h-6 w-6 text-[#5C4B99] flex-shrink-0" fill="#5C4B99" />
              <span className="text-lg text-gray-800">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
